/* eslint no-restricted-imports: 0 */

/*
  THIS IS A GENERATED FILE
  Changes might be overwritten in the future, edit with caution!

  Wrapper functions around functions in airtable.js that interact with Airtable, designed
  to provide basic functionality

  If you're adding a new function: make sure you add a corresponding test (at least 1) for it in request.spec.js

*/

import { Tables, Columns } from './schema';
import {
  createRecord,
  updateRecord,
  getAllRecords,
  getRecordsByAttribute,
  getRecordById,
  deleteRecord
} from './airtable';

/*
 ******* CREATE RECORDS *******
 */

export const createOwner = async record => {
  return createRecord(Tables.Owner, record);
};

export const createProjectGroup = async record => {
  return createRecord(Tables.ProjectGroup, record);
};

export const createAnnouncement = async record => {
  return createRecord(Tables.Announcement, record);
};

export const createSolarProject = async record => {
  return createRecord(Tables.SolarProject, record);
};

export const createSubscriberBill = async record => {
  return createRecord(Tables.SubscriberBill, record);
};

export const createRateSchedule = async record => {
  return createRecord(Tables.RateSchedule, record);
};

export const createPledgeInvite = async record => {
  return createRecord(Tables.PledgeInvite, record);
};

export const createPayment = async record => {
  return createRecord(Tables.Payment, record);
};

export const createTestDevelopment = async record => {
  return createRecord(Tables.TestDevelopment, record);
};

/*
 ******* READ RECORDS *******
 */

export const getOwnerById = async id => {
  return getRecordById(Tables.Owner, id);
};

export const getAllOwners = async () => {
  return getAllRecords(Tables.Owner);
};

export const getOwnersByEmail = async value => {
  return getRecordsByAttribute(
    Tables.Owner,
    Columns[Tables.Owner].email,
    value
  );
};

export const getOwnersByProjectGroupId = async value => {
  return getRecordsByAttribute(
    Tables.Owner,
    Columns[Tables.Owner].projectGroupId,
    value
  );
};

export const getProjectGroupById = async id => {
  return getRecordById(Tables.ProjectGroup, id);
};

export const getAllProjectGroups = async () => {
  return getAllRecords(Tables.ProjectGroup);
};

export const getAnnouncementById = async id => {
  return getRecordById(Tables.Announcement, id);
};

export const getAllAnnouncements = async () => {
  return getAllRecords(Tables.Announcement);
};

export const getAnnouncementsByProjectGroupId = async value => {
  return getRecordsByAttribute(
    Tables.Announcement,
    Columns[Tables.Announcement].projectGroupId,
    value
  );
};

export const getSolarProjectById = async id => {
  return getRecordById(Tables.SolarProject, id);
};

export const getAllSolarProjects = async () => {
  return getAllRecords(Tables.SolarProject);
};

export const getSubscriberBillById = async id => {
  return getRecordById(Tables.SubscriberBill, id);
};

export const getAllSubscriberBills = async () => {
  return getAllRecords(Tables.SubscriberBill);
};

export const getRateScheduleById = async id => {
  return getRecordById(Tables.RateSchedule, id);
};

export const getAllRateSchedules = async () => {
  return getAllRecords(Tables.RateSchedule);
};

export const getPledgeInviteById = async id => {
  return getRecordById(Tables.PledgeInvite, id);
};

export const getAllPledgeInvites = async () => {
  return getAllRecords(Tables.PledgeInvite);
};

export const getPaymentById = async id => {
  return getRecordById(Tables.Payment, id);
};

export const getAllPayments = async () => {
  return getAllRecords(Tables.Payment);
};

export const getTestDevelopmentById = async id => {
  return getRecordById(Tables.TestDevelopment, id);
};

export const getAllTestDevelopments = async () => {
  return getAllRecords(Tables.TestDevelopment);
};

/*
 ******* UPDATE RECORDS *******
 */

export const updateOwner = async (id, recordUpdates) => {
  return updateRecord(Tables.Owner, id, recordUpdates);
};

export const updateProjectGroup = async (id, recordUpdates) => {
  return updateRecord(Tables.ProjectGroup, id, recordUpdates);
};

export const updateAnnouncement = async (id, recordUpdates) => {
  return updateRecord(Tables.Announcement, id, recordUpdates);
};

export const updateSolarProject = async (id, recordUpdates) => {
  return updateRecord(Tables.SolarProject, id, recordUpdates);
};

export const updateSubscriberBill = async (id, recordUpdates) => {
  return updateRecord(Tables.SubscriberBill, id, recordUpdates);
};

export const updateRateSchedule = async (id, recordUpdates) => {
  return updateRecord(Tables.RateSchedule, id, recordUpdates);
};

export const updatePledgeInvite = async (id, recordUpdates) => {
  return updateRecord(Tables.PledgeInvite, id, recordUpdates);
};

export const updatePayment = async (id, recordUpdates) => {
  return updateRecord(Tables.Payment, id, recordUpdates);
};

export const updateTestDevelopment = async (id, recordUpdates) => {
  return updateRecord(Tables.TestDevelopment, id, recordUpdates);
};

/*
 ******* DELETE RECORDS *******
 */

export const deleteOwner = async id => {
  return deleteRecord(Tables.Owner, id);
};
export const deleteProjectGroup = async id => {
  return deleteRecord(Tables.ProjectGroup, id);
};
export const deleteAnnouncement = async id => {
  return deleteRecord(Tables.Announcement, id);
};
export const deleteSolarProject = async id => {
  return deleteRecord(Tables.SolarProject, id);
};
export const deleteSubscriberBill = async id => {
  return deleteRecord(Tables.SubscriberBill, id);
};
export const deleteRateSchedule = async id => {
  return deleteRecord(Tables.RateSchedule, id);
};
export const deletePledgeInvite = async id => {
  return deleteRecord(Tables.PledgeInvite, id);
};
export const deletePayment = async id => {
  return deleteRecord(Tables.Payment, id);
};
export const deleteTestDevelopment = async id => {
  return deleteRecord(Tables.TestDevelopment, id);
};