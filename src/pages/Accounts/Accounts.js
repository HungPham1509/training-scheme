import React, {Component} from 'react';
import User from '../../components/User/User';
import Account from './Account/Account';
import prevIcon from '../../theme/svg/prev.svg';
import nextIcon from '../../theme/svg/next.svg';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index';

import classes from './Accounts.css';

class Accounts extends Component {
    componentDidMount() {
        this.props.onFetchAccounts();
    }

    render() {
        const accs = this.props.accounts.map(acc => {
            return <Account fullname={acc.fullName}
                            role={acc.role}
                            institution={acc.institution}
                            phoneNumber={acc.phoneNumber}
                            major={acc.major}
                            vnuMail={acc.vnuMail}
                            avatar={acc.avatar}/>
        })
        return  <div className={classes.Accounts}>
                    <User />
                    <div className={classes.accountsContainer}>
                        {accs}
                    </div>
                    <div className={classes.Buttons}>
                            <button>
                                <img src={prevIcon} alt='icon'  className={classes.prev}/>
                                Previous
                            </button>
                            <button>
                                Next
                                <img src={nextIcon} alt='icon' className={classes.next}/>
                            </button>
                    </div>
                </div>
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        error: state.accounts.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchAccounts: () => dispatch(actions.fetchAccounts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);