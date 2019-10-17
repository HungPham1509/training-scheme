import React, {Component} from 'react';
import User from '../../components/User/User';
import Account from './Account/Account';
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
                            vnuMail={acc.vnuMail}/>
        })
        return  <div className={classes.Accounts}>
                    <User />
                    <div>
                        {accs}
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