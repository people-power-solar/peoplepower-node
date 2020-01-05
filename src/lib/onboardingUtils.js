import { getAllRecords } from './request';
import keys from '../secret';
import { setLoginCookie } from './auth';
import constants from '../constants';

const {
  BASE_ID,
  USER_LOGIN_TABLE,
  PERSON_TABLE,
  OWNER_TABLE,
  PROJECT_GROUP_TABLE
} = constants;

const { key } = keys;

const Airtable = require('airtable');

const base = new Airtable({ apiKey: key }).base(BASE_ID);

const DEFAULT_NUM_RETRIES = 3;

// Returns created person's ID
const createPersonWithRetries = async (
  email,
  phoneNumber,
  fullName,
  street,
  city,
  state,
  apt,
  mailingStreet,
  mailingApt,
  mailingCity,
  mailingState,
  mailingZipcode,
  zipcode,
  numRetries
) => {
  // create a person record without an owner field nor user login field
  try {
    const createdPerson = await base(PERSON_TABLE).create([
      {
        fields: {
          Email: email,
          'Phone Number': phoneNumber,
          Name: fullName,
          Street: street,
          City: city,
          State: state,
          Apt: apt,
          Zipcode: zipcode,
          'Onboarding Step': 3,
          'Mailing Street': mailingStreet,
          'Mailing Apt': mailingApt,
          'Mailing City': mailingCity,
          'Mailing State': mailingState,
          'Mailing Zipcode': mailingZipcode
        }
      }
    ]);
    return createdPerson[0].id;
  } catch (err) {
    if (numRetries === 0) {
      throw err;
    }

    return createPersonWithRetries(
      email,
      phoneNumber,
      fullName,
      street,
      city,
      state,
      apt,
      zipcode,
      mailingStreet,
      mailingApt,
      mailingCity,
      mailingState,
      mailingZipcode,
      numRetries - 1
    );
  }
};

// Returns created owner's ID
const createOwnerWithRetries = async (createdPersonId, numRetries) => {
  try {
    const createdOwner = await base(OWNER_TABLE).create([
      {
        fields: {
          Person: [createdPersonId],
          'Owner Type': ['General']
        }
      }
    ]);
    return createdOwner[0].id;
  } catch (err) {
    if (numRetries === 0) {
      throw err;
    }

    return createOwnerWithRetries(createdPersonId, numRetries - 1);
  }
};

// Returns true or false based on success
const createUserLoginWithRetries = async (
  createdPersonId,
  createdOwnerId,
  email,
  password,
  numRetries
) => {
  try {
    await base(USER_LOGIN_TABLE).create([
      {
        fields: {
          Person: [createdPersonId],
          Owner: [createdOwnerId],
          Email: email,
          password
        }
      }
    ]);
    return true;
  } catch (err) {
    if (numRetries === 0) {
      throw err;
    }

    return createUserLoginWithRetries(
      createdPersonId,
      createdOwnerId,
      email,
      password,
      numRetries - 1
    );
  }
};

// TODO: UNTESTED FUNCTION
const rollbackPersonWithRetries = async (createdPersonId, numRetries) => {
  try {
    await base(PERSON_TABLE).destroy([createdPersonId]);
  } catch (err) {
    if (numRetries === 0) {
      console.error(`ATTENTION: ${err}`);

      // take any additional action here to notify admin to rectify inconsistency
    }
    await rollbackPersonWithRetries(createdPersonId, numRetries - 1);
  }
};

// TODO:UNTESTED FUNCTION
const rollbackOwnerWithRetries = async (createdOwnerId, numRetries) => {
  try {
    await base(OWNER_TABLE).destroy([createdOwnerId]);
  } catch (err) {
    if (numRetries === 0) {
      console.error(`ATTENTION: ${err}`);

      // take any additional action here to notify admin to rectify inconsistency
    }
    await rollbackPersonWithRetries(createdOwnerId, numRetries - 1);
  }
};

// returns person and owner ID in object
const createPersonOwnerUserLoginRecord = async (
  email,
  password,
  phoneNumber,
  fullName,
  street,
  apt,
  city,
  state,
  zipcode,
  mailingStreet,
  mailingApt,
  mailingCity,
  mailingState,
  mailingZipcode,
  numRetries = DEFAULT_NUM_RETRIES
) => {
  // necessary IDs
  let createdPersonId;
  let createdOwnerId;

  try {
    createdPersonId = await createPersonWithRetries(
      email,
      phoneNumber,
      fullName,
      street,
      city,
      state,
      apt,
      zipcode,
      mailingStreet,
      mailingApt,
      mailingCity,
      mailingState,
      mailingZipcode,
      numRetries
    );
  } catch (err) {
    console.error(err);
    return {};
  }

  // create an owner record
  try {
    createdOwnerId = await createOwnerWithRetries(createdPersonId, numRetries);
  } catch (err) {
    console.error(err);

    // if fail to create an owner record, rollback the created person
    await rollbackPersonWithRetries(createdPersonId, numRetries);

    return {};
  }

  // create a user login record
  try {
    await createUserLoginWithRetries(
      createdPersonId,
      createdOwnerId,
      email,
      password,
      numRetries - 1
    );
    setLoginCookie(createdPersonId);
    return { createdOwnerId, createdPersonId };
  } catch (err) {
    console.error(err);

    // if fail to create a User Login record, rollback the created person and owner
    await rollbackPersonWithRetries(createdPersonId, numRetries);
    await rollbackOwnerWithRetries(createdOwnerId, numRetries);

    return {};
  }
};

const getAllProjectGroups = async () => {
  return getAllRecords(PROJECT_GROUP_TABLE);
};

export { createPersonOwnerUserLoginRecord, getAllProjectGroups };