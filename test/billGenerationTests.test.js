import { expect } from 'chai';
import sinon from 'sinon';
// import fetchMock from 'fetch-mock';
import moment from 'moment';
import * as request from '../airtable/request';
import * as enphase from '../utils/enphase';
import * as pdfgeneration from '../utils/pdfgeneration';
import * as email from '../utils/email';
// import getLatestPGEBill from '../utils/utilityApi';
import * as utilityAPI from '../utils/utilityApi';
import {
  approveSubscriberBill,
  generateBillsForSolarProject
} from '../utils/billgeneration';

describe('billGeneration', () => {
  const sandbox = sinon.createSandbox();

  describe('#generateBillsForSolarProject', async () => {

    const subscriberThree = {id: 3, meterId: 2, name: 'Lo', subscriberBillIds: [5, 2], rateScheduleId: 2};
    const subscriberFive = {id: 5, meterId: 8, name: 'Bo', subscriberBillIds: null, rateScheduleId: 3};
    const subscriberNine = {id: 9, meterId: 7, name: 'Jo', subscriberBillIds: [6, 1, 4], rateScheduleId: 4};
    const today = moment();
    const thirtyDaysAgo = moment().subtract(30, 'days');
    const sixtyDaysAgo = moment().subtract(60, 'days');
    const solarProjectId = 7;
    const solarProject = {
      id: 7,
      subscriberIds: [3,5,9],
      name: "Magical Solar Extravaganza",
      enphaseUserId: 17,
      enphaseSystemId: 21
    };
    // TODO for all PGE mock bills: what units should these be? use decimals?
    const latestPGEBillMeterTwo = {
      netPgeUsage: 500,
      ebceRebate: 1701,
      pgeCharges: 2155,
      ebceCharges: 4144,
      wouldBeCosts: 3356,
      startDate: thirtyDaysAgo,
      endDate: today
    };
    const latestPGEBillMeterEight = {
      netPgeUsage: 443,
      ebceRebate: 1888,
      pgeCharges: 365,
      ebceCharges: 3111,
      wouldBeCosts: 5541,
      startDate: thirtyDaysAgo,
      endDate: today
    };
    const latestPGEBillMeterSeven = {
      netPgeUsage: 303,
      ebceRebate: 1877,
      pgeCharges: 2088,
      ebceCharges: 3861,
      wouldBeCosts: 7123,
      startDate: thirtyDaysAgo,
      endDate: today
    };
    const billsForSubscriberThree = [
      {statementNumber: 3, startDate: sixtyDaysAgo, endDate: thirtyDaysAgo},
      {statementNumber: 1},
      {statementNumber: 2}
    ];
    const billsForSubscriberNine = [
      {statementNumber: 2, startDate: sixtyDaysAgo, endDate: thirtyDaysAgo},
      {statementNumber: 1}
    ];
    const generationDataForSubThree = [5263, 4112, 6023, 4801];
    const generationDataForSubFive = [9873, 9827, 3648, 8642];
    const generationDataForSubNine = [1253, 1911, 2144, 1306];
    const rateScheduleForSubThree = {id: 2, rebateRate: 0.093, rate: 0.18};
    const rateScheduleForSubFive = {id: 3, rebateRate: 0.048, rate: 0.21};
    const rateScheduleForSubNine = {id: 4, rebateRate: 1.002, rate: 0.06};


    before(async () => {
      sandbox.stub(request, 'getSolarProjectById').returns(solarProject);
      const stubbedGetOwnerById = sandbox.stub(request, 'getOwnerById');
      stubbedGetOwnerById.withArgs(3).returns(subscriberThree);
      stubbedGetOwnerById.withArgs(5).returns(subscriberFive);
      stubbedGetOwnerById.withArgs(9).returns(subscriberNine);
      const stubbedGetPGEBill = sandbox.stub(utilityAPI, 'getLatestPGEBill');
      stubbedGetPGEBill.withArgs(2).returns(latestPGEBillMeterTwo);
      stubbedGetPGEBill.withArgs(8).returns(latestPGEBillMeterEight);
      stubbedGetPGEBill.withArgs(7).returns(latestPGEBillMeterSeven);
      const stubbedGetSubBullsById = sandbox.stub(request, 'getSubscriberBillsByIds')
      stubbedGetSubBullsById.withArgs([5,2])
        .returns(billsForSubscriberThree);
      stubbedGetSubBullsById.withArgs([6, 1, 4])
        .returns(billsForSubscriberNine);
      sandbox.stub(request, 'updateSubscriberBill');
      const stubbedGetEnphaseData = sandbox.stub(enphase, 'getEnphaseDataForSubscriber');
      stubbedGetEnphaseData.onCall(0).returns(generationDataForSubThree);
      stubbedGetEnphaseData.onCall(1).returns(generationDataForSubFive);
      stubbedGetEnphaseData.onCall(2).returns(generationDataForSubNine);
      const stubbedGetRateSchedule = sandbox.stub(request, 'getRateScheduleById');
      stubbedGetRateSchedule.withArgs(2).returns(rateScheduleForSubThree);
      stubbedGetRateSchedule.withArgs(3).returns(rateScheduleForSubFive);
      stubbedGetRateSchedule.withArgs(4).returns(rateScheduleForSubNine);
      sandbox.stub(request, 'createSubscriberBill');
      sandbox.stub(pdfgeneration, 'generatePdfForSubscriber');
      sandbox.stub(email, 'sendEmail'); // TODO maybe should throw an error for test
      await generateBillsForSolarProject(solarProjectId);
    });

    after(() => {
      sandbox.restore();
    });

    it("should get a solar project by its id", async () => {
      expect(request.getSolarProjectById.called).to.equal(true);
    });

    it("should get each subscriber associated with the solar project", async () => {
      expect(request.getOwnerById.called).to.equal(true);
      expect(request.getOwnerById.calledWith(3)).to.equal(true);
      expect(request.getOwnerById.calledWith(5)).to.equal(true);
      expect(request.getOwnerById.calledWith(9)).to.equal(true)
      expect(request.getOwnerById.calledWith(12)).to.equal(false);
    });

    it("should get the latest PGE bill for every subscriber's meter", async () => {
      expect(utilityAPI.getLatestPGEBill.called).to.equal(true);
      expect(utilityAPI.getLatestPGEBill.calledWith(2)).to.equal(true);
      expect(utilityAPI.getLatestPGEBill.calledWith(8)).to.equal(true);
      expect(utilityAPI.getLatestPGEBill.calledWith(7)).to.equal(true);
      expect(utilityAPI.getLatestPGEBill.calledWith(4)).to.equal(false);
    });

    it("should get the previous PPSC bill for every subscriber that has one", () => {
      expect(request.getSubscriberBillsByIds.called).to.equal(true);
      expect(request.getSubscriberBillsByIds.calledWith([5,2])).to.equal(true);
      expect(request.getSubscriberBillsByIds.calledWith([6,1,4])).to.equal(true);
      expect(request.getSubscriberBillsByIds.calledWith([3,7])).to.equal(false);
    });

    it("should use dummy information if there is no previous PPSC bill", () => {
      expect(request.getSubscriberBillsByIds.calledWith(null)).to.equal(false);
    });

    it("should get enphase data for each subscriber", () => {
      expect(enphase.getEnphaseDataForSubscriber.called).to.equal(true);
      expect(enphase.getEnphaseDataForSubscriber.getCall(0).args[0]).to.equal(17);
      expect(enphase.getEnphaseDataForSubscriber.getCall(0).args[1]).to.equal(21);
      expect(enphase.getEnphaseDataForSubscriber.getCall(0).args[4]).to.equal(3);
      expect(enphase.getEnphaseDataForSubscriber.getCall(1).args[0]).to.equal(17);
      expect(enphase.getEnphaseDataForSubscriber.getCall(1).args[4]).to.equal(5);
      expect(enphase.getEnphaseDataForSubscriber.getCall(2).args[0]).to.equal(17);
      expect(enphase.getEnphaseDataForSubscriber.getCall(2).args[4]).to.equal(9);
    });

    // tests to add:
      // should get enphase data for same date range found on the PGE bill
      // should throw error is current start date is > 1 day after end date of last bill
      // should update last bill's status to previous
      // should try to generate a bill for all subscribers to a solar project, even if there are errors thrown
      // I should throw every error intentionally

  });
});
