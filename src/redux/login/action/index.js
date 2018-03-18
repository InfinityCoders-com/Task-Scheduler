import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';

export function* loginRequest (action) {
  try {
    const response = yield call(fireAjax, 'POST', '', {
      'action': 'login',
      'email': action.payload.email,
      'password': action.payload.password
    });
    if (response.error === 0) {
      let {token, userid} = response.data;
      yield put(actions.userLoginSuccess());
    } else if (response.error === 1) {
      yield put(actions.userLoginFail('Invalid Login...'));
    }
  } catch (e) {
    yield put(actions.userLoginError('Error Occurs !!'));
    console.warn('Some error found in "logingRequest" action\n', e);
  }
}
