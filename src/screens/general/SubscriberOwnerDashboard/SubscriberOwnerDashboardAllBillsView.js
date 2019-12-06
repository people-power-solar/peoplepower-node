import React from 'react';
import '../../../styles/SubscriberOwnerDashboardAllBillsView.css';
import { centsToDollars } from '../../../lib/subscriberHelper';
import Bill from '../../../components/Bill';
import { getLoggedInUserId, logOut } from '../../../lib/auth';

const ROOT_ROUTE = '/';

export default class SubscriberOwnerDashboardAllBillsView extends React.Component {
  constructor(props) {
    super(props);
    const { bills } = this.props;
    this.state = {
      bills
    };
  }

  componentDidMount() {
    const { history } = this.props;
    const id = getLoggedInUserId();
    if (!id) {
      // They shouldn't be able to access this screen
      history.push('/');
    }
  }

  handleLogout() {
    logOut();
    const { history } = this.props;
    history.push(ROOT_ROUTE);
  }

  render() {
    const { bills } = this.state;
    const { callback } = this.props;
    return (
      <div className="all-bills-outer-container">
        <button
          className="subscriber-back-button"
          type="button"
          onClick={callback}
        >
          <div className="subscriber-back-button-container">
            <div className="subscriber-back-arrow">←</div>
            <div className="subscriber-back-text">Back</div>
          </div>
        </button>
        <p className="all-bills-header">Transactions</p>
        <div className="all-bills-cards-holder">
          {bills.map(bill => {
            return (
              <Bill
                statementDate={bill['Statement Date']}
                startDate={bill['Start Date']}
                endDate={bill['End Date']}
                // rate_schedule
                estimatedRebate={centsToDollars(bill['Estimated Rebate'])}
                totalEstimatedRebate={centsToDollars(
                  bill['Total Estimated Rebate']
                )}
                amtDueOnPrev={centsToDollars(bill['Amount Due on Previous'])}
                amtReceivedSincePrev={centsToDollars(
                  bill['Amount Received Since Previous']
                )}
                amtDue={centsToDollars(bill['Amount Due'])}
                isLatest={bill['Is Latest']}
                callback={() => console.log('Pay was pressed!')}
              />
            );
          })}
        </div>
        <div>
          {/* <button onClick={() => this.handleLogout()} type="button">
            Logout
          </button> */}
        </div>
      </div>
    );
  }
}