import { expect } from 'chai';
import sinon from 'sinon';
// import fetchMock from 'fetch-mock';
import moment from 'moment';
import * as request from '../airtable/request';
import * as enphase from '../utils/enphase';
import generatePdfForSubscriber from '../utils/pdfgeneration';
import sendEmail from '../utils/email';
// import getLatestPGEBill from '../utils/utilityApi';
import * as utilityAPI from '../utils/utilityApi';
import {
  approveSubscriberBill,
  generateBillsForSolarProject
} from '../utils/billgeneration';

describe('billGeneration', () => {
  const sandbox = sinon.createSandbox();

  describe('#generateBillsForSolarProject', async () => {

    // const date = new Date()
    const currentMoment = moment();
    const solarProjectId = 7;
    const solarProject = {
      id: 7,
      subscriberIds: [3,5,9],
      name: "Jasmin's Solar Extravaganza"
    };
    const latestPGEBill = { // what units should these be?
      netPgeUsage: 500,
      ebceRebate: 1701,
      pgeCharges: 2155,
      ebceCharges: 4144,
      wouldBeCosts: 3356,             // is this a decimal?
      startMoment: currentMoment.subtract(30, 'days'),
      endMoment: currentMoment
    };
    const previousSubscriberBill = {
      data: 'add some data'
    };
    const enphaseDataForSub = {
      data: 'add some data'
    };

    beforeEach(() => {
      sandbox.stub(request, 'getSolarProjectById').returns(solarProject);
      const stubbedGetOwnerById = sandbox.stub(request, 'getOwnerById');
      stubbedGetOwnerById.withArgs(3).returns({id: 3, meterId: 2, name: 'Lo'});
      stubbedGetOwnerById.withArgs(5).returns({id: 5, meterId: 8, name: 'Bo'});
      stubbedGetOwnerById.withArgs(9).returns({id: 9, meterId: 7, name: 'Jo'});
      sandbox.stub(utilityAPI, 'getLatestPGEBill').returns(latestPGEBill);
      // TODO break these stubs out into different meterId args
      sandbox.stub(request, 'getSubscriberBillsByIds').returns('YYYYYYY')
      sandbox.stub(request, 'updateSubscriberBill');
      sandbox.stub(enphase, 'getEnphaseDataForSubscriber').returns(enphaseDataForSub);
      sandbox.stub(request, 'getRateScheduleById').returns();
      sandbox.stub(request, 'createSubscriberBill');
      sandbox.stub({generatePdfForSubscriber}, 'generatePdfForSubscriber');
      sandbox.stub({sendEmail}, 'sendEmail'); // TODO maybe should throw an error for test
    });

    afterEach(() => {
      sandbox.restore();
    });


    it("should get a solar project by its id", async () => {
      await generateBillsForSolarProject(solarProjectId);

      console.log('.called: ', request.getSolarProjectById.called);
      expect(request.getSolarProjectById.called).to.be(true);
    });

    // it('should do stuff', async () => {
    //   await generateBillsForSolarProject(solarProjectId);

    //   expect(1).to.equal(1);
    //   expect(sendEmail.called).to.equal(false);
    //   // expect(result).to.equal(undefined);
    //   // expect(request.getSolarProjectById).to.equal(undefined);
    // });

    it("should try to generate a bill for all subscribers to a solar project, even if there are errors thrown", () => {

    });

  });
});

// expect(result.subscriberIds).to.be.a('object');
// expect(JSON.stringify(result.subscriberIds)).to.equal(JSON.stringify([3,5,9]));

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
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
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------


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
