import {put} from 'redux-saga/effects';

import randomstring from 'randomstring';
import * as constants from '../../constants/string';
import * as actions from '../actions/index';


export function* authUserSaga(action) {
    yield put(actions.authStart());
        const authData = {
            username: action.username,
            password: action.password,
            //returnSecureToken: true
        }
    let token = null;
    let userId = null;
    if(authData.username === constants.USERNAME && authData.password === constants.PASSWORD) {
        token = yield randomstring.generate();
        userId = yield randomstring.generate(9);
        yield put(actions.authSuccess(token, userId));
    }
    else {
        yield put(actions.authFail('Failed to sign in'));
    }
}