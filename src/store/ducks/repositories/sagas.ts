import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSucess, loadFailure } from '../repositories/actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/leonardorcamargo/repos');

    yield put(loadSucess(response.data));
  } catch(error) {
    yield put(loadFailure());
  }
}