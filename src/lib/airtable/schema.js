/*
    THIS IS A GENERATED FILE
    Changes might be overwritten in the future, edit with caution!
*/

export const Tables = {
  Payment: 'Payment',
  Organization: 'Organization',
  ProjectGroup: 'Project Group',
  Person: 'Person',
  RateSchedule: 'Rate Schedule',
  Address: 'Address',
  TestDevelopment: 'Test (Development)',
  SubscriberBill: 'Subscriber Bill',
  Announcement: 'Announcement',
  PGEUsage: 'PGE Usage',
  PledgeInvite: 'Pledge Invite',
  SolarProject: 'Solar Project',
  UserLogin: 'User Login',
  Owner: 'Owner',
  Generation: 'Generation'
};

export const Columns = {
  Payment: {
    id: `ID`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    owner: `Owner`,
    status: `Status`,
    type: `Type`,
    amount: `Amount`,
    subscriberBill: `Subscriber Bill`,
    orderId: `Order ID`,
    payerId: `Payer ID`,
    currencyCode: `Currency Code`,
    address: `Address`,
    payerFullName: `Payer Full Name`,
    intent: `Intent`,
    paymentCreateTime: `Payment Create Time`,
    paymentUpdateTime: `Payment Update Time`,
    notes: `Notes`,
    payerEmail: `Payer Email`
  },
  Organization: {
    id: `ID`,
    personsAffiliated: `Person(s) Affiliated`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    address: `Address`,
    name: `Name`
  },
  'Project Group': {
    primaryKey: `Primary Key`,
    owner: `Owner`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    isPublic: `Is Public?`,
    isTakingPledges: `Is taking pledges?`,
    name: `Name`,
    solarProject: `Solar Project`,
    admin: `Admin`,
    announcement: `Announcement`,
    street1: `Street 1`,
    street2: `Street 2`,
    state: `State`,
    zipcode: `Zipcode`,
    city: `City`,
    description: `Description`,
    latitude: `Latitude`,
    longitude: `Longitude`,
    isDefault: `Is Default?`,
    id: `ID`
  },
  Person: {
    id: `ID`,
    email: `Email`,
    phoneNumber: `Phone Number`,
    owner: `Owner`,
    organization: `Organization`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    tags: `Tags`,
    userLogin: `User Login`,
    name: `Name`,
    recordIdforDev: `RECORD ID (for dev)`,
    announcement: `Announcement`,
    street: `Street`,
    city: `City`,
    state: `State`,
    zipcode: `Zipcode`,
    apt: `Apt`,
    onboardingStep: `Onboarding Step`,
    alternativeEmail: `Alternative Email`,
    mailingStreet: `Mailing Street`,
    mailingApt: `Mailing Apt`,
    mailingCity: `Mailing City`,
    mailingState: `Mailing State`,
    mailingZipcode: `Mailing Zipcode`,
    mailingPhoneNumber: `Mailing Phone Number`,
    dividends: `Dividends`,
    billingStreet: `Billing Street`,
    billingApt: `Billing Apt`,
    billingCity: `Billing City`,
    billingState: `Billing State`,
    billingZipcode: `Billing Zipcode`,
    projectGroup: `Project Group`,
    address: `Address`
  },
  'Rate Schedule': {
    id: `ID`,
    subscriberBill: `Subscriber Bill`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    rate: `Rate`,
    rebateRate: `Rebate Rate`
  },
  Address: {
    id: `ID`,
    person: `Person`,
    organization: `Organization`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    street: `Street`,
    city: `City`,
    state: `State`,
    zipCode: `Zip Code`,
    solarProject: `Solar Project`,
    apt: `Apt`
  },
  'Test (Development)': {
    name: `Name`,
    tag: `Tag`,
    id: `ID`
  },
  'Subscriber Bill': {
    id: `ID`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    subscriberOwner: `Subscriber Owner`,
    statementDate: `Statement Date`,
    startDate: `Start Date`,
    endDate: `End Date`,
    rateSchedule: `Rate Schedule`,
    estimatedRebate: `Estimated Rebate`,
    totalEstimatedRebate: `Total Estimated Rebate`,
    amountDueOnPrevious: `Amount Due on Previous`,
    amountReceivedSincePrevious: `Amount Received Since Previous`,
    amountDue: `Amount Due`,
    owner: `Owner`,
    payment: `Payment`,
    status: `Status`,
    balance: `Balance`
  },
  Announcement: {
    title: `Title`,
    link: `Link`,
    attachments: `Attachments`,
    projectGroup: `Project Group`,
    author: `Author`,
    message: `Message`,
    eventType: `Event type`,
    id: `ID`,
    location: `Location`,
    time: `Time`
  },
  'PGE Usage': {
    id: `ID`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    solarProject: `Solar Project`,
    subscriberOwner: `Subscriber Owner`,
    startDate: `Start Date`,
    endDate: `End Date`,
    amount: `Amount`,
    ebceRebate: `EBCE Rebate`
  },
  'Pledge Invite': {
    id: `ID`,
    generalOwner: `General Owner`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    firstName: `First Name`,
    lastName: `Last Name`,
    shareAmount: `Share Amount`,
    wantsDividends: `Wants Dividends?`,
    phoneNumber: `Phone Number`,
    email: `Email`,
    token: `Token`,
    status: `Status`
  },
  'Solar Project': {
    id: `ID`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    name: `Name`,
    size: `Size`,
    address: `Address`,
    status: `Status`,
    subscriberOwner: `Subscriber Owner`,
    generation: `Generation`,
    pgeUsage: `PGE Usage`,
    projectGroup: `Project Group`
  },
  'User Login': {
    id: `ID`,
    person: `Person`,
    owner: `Owner`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    email: `Email`,
    password: `password`,
    passwordSalt: `Password Salt`,
    passwordHash: `Password Hash`,
    passwordReminderToken: `Password Reminder Token`,
    passwordReminderExpire: `Password Reminder Expire`,
    emailConfirmationToken: `Email Confirmation Token`
  },
  Owner: {
    id: `ID`,
    person: `Person`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    agreementId: `Agreement ID`,
    projectGroup: `Project Group`,
    userLogin: `User Login`,
    payment: `Payment`,
    ownerType: `Owner Type`,
    ownerId: `Owner ID`,
    subscriberBill: `Subscriber Bill`,
    pledgeInvite: `Pledge Invite`,
    adminOf: `Admin Of`,
    solarProject: `Solar Project`,
    numberOfShares: `Number of Shares`,
    receivingDividends: `Receiving Dividends?`
  },
  Generation: {
    id: `ID`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    solarProject: `Solar Project`,
    subscriberOwners: `Subscriber Owner(s)?`,
    startDate: `Start Date`,
    endDate: `End Date`,
    amount: `Amount`
  }
};
