/*
    THIS IS A GENERATED FILE
    Changes might be overwritten in the future, edit with caution!
*/

export const Tables = {
  Payment: 'Payment',
  ProjectGroup: 'Project Group',
  RateSchedule: 'Rate Schedule',
  TestDevelopment: 'Test (Development)',
  SubscriberBill: 'Subscriber Bill',
  Announcement: 'Announcement',
  PGEUsage: 'PGE Usage',
  PledgeInvite: 'Pledge Invite',
  SolarProject: 'Solar Project',
  Owner: 'Owner',
  Generation: 'Generation'
};

export const Columns = {
  Payment: {
    primaryKey: `Primary Key`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    ownerId: `Owner`,
    status: `Status`,
    type: `Type`,
    amount: `Amount`,
    subscriberBillId: `Subscriber Bill`,
    orderId: `Order ID`,
    payerId: `Payer ID`,
    currencyCode: `Currency Code`,
    address: `Address`,
    payerFullName: `Payer Full Name`,
    intent: `Intent`,
    paymentCreateTime: `Payment Create Time`,
    paymentUpdateTime: `Payment Update Time`,
    notes: `Notes`,
    payerEmail: `Payer Email`,
    id: `ID`
  },
  'Project Group': {
    primaryKey: `Primary Key`,
    ownerIds: `Owners`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    isPublic: `Is Public?`,
    isTakingPledges: `Is Taking Pledges?`,
    name: `Name`,
    solarProjectIds: `Solar Projects`,
    adminIds: `Admins`,
    announcementIds: `Announcements`,
    street1: `Street 1`,
    street2: `Street 2`,
    state: `State`,
    zipcode: `Zipcode`,
    city: `City`,
    description: `Description`,
    latitude: `Latitude`,
    longitude: `Longitude`,
    isDefault: `Is Default?`,
    id: `ID`,
    address: `Address`
  },
  'Rate Schedule': {
    primaryKey: `Primary Key`,
    subscriberBillId: `Subscriber Bill`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    rate: `Rate`,
    rebateRate: `Rebate Rate`,
    id: `ID`
  },
  'Test (Development)': {
    name: `Name`,
    tag: `Tag`,
    id: `ID`
  },
  'Subscriber Bill': {
    primaryKey: `Primary Key`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    subscriberOwnerId: `Subscriber Owner`,
    statementDate: `Statement Date`,
    startDate: `Start Date`,
    endDate: `End Date`,
    rateScheduleId: `Rate Schedule`,
    estimatedRebate: `Estimated Rebate`,
    totalEstimatedRebate: `Total Estimated Rebate`,
    amountDueOnPrevious: `Amount Due on Previous`,
    amountReceivedSincePrevious: `Amount Received Since Previous`,
    amountDue: `Amount Due`,
    owner: `Owner`,
    paymentIds: `Payments`,
    status: `Status`,
    balance: `Balance`,
    id: `ID`
  },
  Announcement: {
    primaryKey: `Primary Key`,
    link: `Link`,
    attachments: `Attachments`,
    projectGroupId: `Project Group`,
    authorId: `Author`,
    message: `Message`,
    eventType: `Event type`,
    id: `ID`,
    location: `Location`,
    time: `Time`,
    title: `Title`,
    isGlobal: `Is Global?`
  },
  'PGE Usage': {
    primaryKey: `Primary Key`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    solarProjectId: `Solar Project`,
    subscriberOwner: `Subscriber Owner`,
    startDate: `Start Date`,
    endDate: `End Date`,
    amount: `Amount`,
    ebceRebate: `EBCE Rebate`,
    id: `ID`
  },
  'Pledge Invite': {
    primaryKey: `Primary Key`,
    generalOwnerId: `General Owner`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    firstName: `First Name`,
    lastName: `Last Name`,
    shareAmount: `Share Amount`,
    wantsDividends: `Wants Dividends?`,
    phoneNumber: `Phone Number`,
    email: `Email`,
    token: `Token`,
    status: `Status`,
    id: `ID`
  },
  'Solar Project': {
    primaryKey: `Primary Key`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    name: `Name`,
    size: `Size`,
    address: `Address`,
    status: `Status`,
    generationId: `Generation`,
    pgeUsageId: `PGE Usage`,
    projectGroupId: `Project Group`,
    street1: `Street 1`,
    street2: `Street 2`,
    city: `City`,
    state: `State`,
    zipcode: `Zipcode`,
    id: `ID`,
    subscriberOwnerIds: `Subscriber Owners`
  },
  Owner: {
    primaryKey: `Primary Key`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    projectGroupId: `Project Group`,
    paymentIds: `Payments`,
    ownerTypes: `Owner Types`,
    id: `ID`,
    subscriberBillIds: `Subscriber Bills`,
    pledgeInviteId: `Pledge Invite`,
    adminOfId: `Admin Of`,
    numberOfShares: `Number of Shares`,
    isReceivingDividends: `Is Receiving Dividends?`,
    solarProjectId: `Solar Project`,
    firstName: `First Name`,
    lastName: `Last Name`,
    email: `Email`,
    alternateEmail: `Alternate Email`,
    permanentStreet1: `Permanent Street 1`,
    permanentStreet2: `Permanent Street 2`,
    permanentCity: `Permanent City`,
    permanentState: `Permanent State`,
    permanentZipcode: `Permanent Zipcode`,
    mailingStreet1: `Mailing Street 1`,
    mailingStreet2: `Mailing Street 2`,
    mailingCity: `Mailing City`,
    mailingState: `Mailing State`,
    mailingZipcode: `Mailing Zipcode`,
    phoneNumber: `Phone Number`,
    onboardingStep: `Onboarding Step`,
    password: `Password`,
    announcementIds: `Announcements`,
    name: `Name`,
    permanentAddress: `Permanent Address`,
    mailingAddress: `Mailing Address`,
    mailingAddressSame: `Mailing Address Same`,
    bylaw1: `Bylaw 1`,
    bylaw2: `Bylaw 2`,
    certifyPermanentAddress: `Certify Permanent Address`
  },
  Generation: {
    primaryKey: `Primary Key`,
    dateCreated: `Date Created`,
    dateUpdated: `Date Updated`,
    solarProjectId: `Solar Project`,
    subscriberOwners: `Subscriber Owner(s)?`,
    startDate: `Start Date`,
    endDate: `End Date`,
    amount: `Amount`,
    id: `ID`
  }
};
