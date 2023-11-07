import { all } from 'redux-saga/effects'
import homeSaga from './pages/home/saga'
import registerSaga from './pages/register/saga'
import { loginSaga } from './pages/formLogin/saga'

export default function* rootSaga() {
  yield all([
    homeSaga(),
    registerSaga(),
    loginSaga()
  ])
}