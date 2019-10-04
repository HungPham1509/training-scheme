import {put, delay} from 'redux-saga/effects';

import Cookies from 'universal-cookie';
import randomstring from 'randomstring';
import * as constants from '../../constants/string';
import * as actions from '../actions/index';

const cookies = new Cookies();

export function* authUserSaga(action) {
    yield put(actions.authStart());
        const authData = {
            username: action.username,
            password: action.password,
            rememberPassword: action.rememberPassword,
            returnSecureToken: true
        }
    let token = null;
    let userId = null;
    if(authData.username === constants.USERNAME && authData.password === constants.PASSWORD) {
        token = yield randomstring.generate();
        userId = yield randomstring.generate(9);
        if(authData.rememberPassword === true) {
            yield cookies.set('token', token, {path: '/'});
            yield cookies.set('userID', userId, {path: '/'});
        }
        else {
            const expirationDate = yield new Date().getTime() + 3600*2;
            yield cookies.set('expirationDate', expirationDate, {path: '/'});
            yield cookies.set('token', token, {path: '/'});
            yield cookies.set('userID', userId, {path: '/'});
            yield put(actions.checkAuthTimeOut(3600));
        }
        yield put(actions.authSuccess(token, userId));
    }
    else {
        yield put(actions.authFail('Failed to sign in'));
    }
}

export function* logoutSaga (action) {
    yield cookies.remove('token', { path: '/' });
    yield cookies.remove('userID', { path: '/' });
    yield cookies.remove('expirationDate', {path: '/'})
    yield put(actions.logOutSucceed());
}

export function* authCheckTimeOutSaga (action) {
    yield delay(action.expirationTime*2)
    yield put(actions.authLogout());
}

export function* authCheckStateSaga (action) {
    const token = yield cookies.get('token');
    const userId = yield cookies.get('userID');
    if(!token) {
        yield put(actions.authLogout());
    }
    else {
        const expirationDate = yield cookies.get('expirationDate');
        const presentTime = yield new Date().getTime();
        if(expirationDate) {
            if(expirationDate <= presentTime) {
                yield put(actions.authLogout());
            }
            else {
                yield put(actions.authSuccess(token, userId));
                yield put(actions.checkAuthTimeOut(expirationDate - presentTime));
            }
        }
        else {
            yield put(actions.authSuccess(token, userId));
        }
    }
}

