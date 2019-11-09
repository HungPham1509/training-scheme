import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {authUserSaga, logoutSaga, authCheckTimeOutSaga, authCheckStateSaga} from './auth';
import {fetchAccountsSaga, searchAccountsSaga, filterAccountsSaga} from './accounts';



export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, authCheckTimeOutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
    yield takeEvery(actionTypes.FETCH_ACCOUNTS, fetchAccountsSaga);
    yield takeEvery(actionTypes.SEARCH_ACCOUNTS, searchAccountsSaga);
    yield takeEvery(actionTypes.FILTER_ACCOUNTS, filterAccountsSaga);
}


