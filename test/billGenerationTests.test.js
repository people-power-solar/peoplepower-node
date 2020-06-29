import { expect } from 'chai';
import sinon from 'sinon';
// import fetchMock from 'fetch-mock';
import {
  approveSubscriberBill,
  generateBillsForSolarProject
} from '../utils/billgeneration';

describe('billGeneration', () => {
  const sandbox = sinon.createSandbox();

  describe('#generateBillsForSolarProject', () => {

    const date = new Date()
    const solarProject = {
      id: 7,
      subscriberIds: [3,5,9]
    };
    const latestPGEBill = { // what units should these be?
      netPgeUsage: 500,
      ebceRebate: 1701,
      pgeCharges: 2155,
      ebceCharges: 4144,
      wouldBeCosts: 3356, // is this a decimal?
      startMoment: date - 2592000000, // 30 days prior to date
      endMoment: date
    };
    const previousSubscriberBill = {
      // ADD DATA HERE
    };
    const enphaseDataForSub = {
      data: 'hi'
    };

    beforeEach(() => {
      sandbox.stub({request}, 'getSolarProjectById').returns(solarProject);
      const stubbedGetOwnerById = sandbox.stub(request, 'getOwnerById');
      stubbedGetOwnerById.withArgs(3).returns( { id:3, meterId: 4} );
      stubbedGetOwnerById.withArgs(5).returns( { id:5, meterId: 6} );
      stubbedGetOwnerById.withArgs(9).returns( { id:9, meterId: 10} );
      sandbox.stub(request, 'getLatestPGEBill').returns(latestPGEBill);
      sandbox.stub(request, 'getPreviousSubscriberBill').returns(previousSubscriberBill);
      sandbox.stub(request, 'updateSubscriberBill');
      sandbox.stub(request, 'getEnphaseDataForSubscriber').returns(enphaseDataForSub);
      sandbox.stub(request, 'getRateScheduleById').returns();
      sandbox.stub(request, 'createSubscriberBill');
      sandbox.stub(request, 'generatePdfForSubscriber');
      sandbox.stub(request, 'sendEmail'); //maybe should throw an error
      sandbox.stub(request, 'generateBillForSubscriber') // just for Jas's tests
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should get a solar project by its id and include subscriber ids', () => {
      const solarProjectId = 7;
      const result = generateBillsForSolarProject(solarProjectId);
      expect(result).to.be.a('object');
      expect(result.subscriberIds).to.be.a('object');
      expect(JSON.stringify(result.subscriberIds)).to.equal(JSON.stringify([3,5,9]));
    });
    it("should include the solar project's subscriber ids", () => {

    });

  });

});


// describe('adminUtils', () => {
//   const sandbox = sinon.createSandbox();

//   describe('#toggleValidColor', () => {
//     it('should return "b-is-not-valid" for a nonempty input with type 0', () => {
//       const result = toggleValidColor('testcolor', 0);

//       expect(result).to.be.a('string');
//       expect(result).to.equal('b-is-not-valid');
//     });
//     it('should return "b-is-valid" for a blank input with type 0', () => {
//       const result = toggleValidColor('', 0);

//       expect(result).to.be.a('string');
//       expect(result).to.equal('b-is-valid');
//     });
//     it('should return "b-is-valid" for an undefined input with type 0', () => {
//       const result = toggleValidColor(undefined, 0);


// describe('#removeOwner', () => {
//   const owner = {
//     id: 5,
//     projectGroupId: 0
//   };
//   const loggedInOwner = { id: 365 };
//   const projectGroup = {
//     id: 0,
//     ownerIds: [1, 2, 3, 4, 5]
//   };

//   beforeEach(() => {
//     sandbox.stub(request, 'getProjectGroupById').returns(projectGroup);
//     sandbox.stub(request, 'updateProjectGroup');
//     sandbox.stub(userData, 'refreshUserData');
//     sandbox.stub(store, 'getState').returns({ userData: loggedInOwner });
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });

//   it('should succesfully remove an owner from a project group', async () => {
//     await removeOwner(owner);

//     expect(request.updateProjectGroup.getCall(0).args[0]).to.equal(0);
//     expect(
//       JSON.stringify(request.updateProjectGroup.getCall(0).args[1].ownerIds)
//     ).to.equal(JSON.stringify([1, 2, 3, 4]));
//     expect(userData.refreshUserData.getCall(0).args[0]).to.equal(365);
//   });
// });
