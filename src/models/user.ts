import { getUserInfo } from '../services/index'

export default {
    namespace: 'user',
    state: {
        test:'here',
        userInfo: {
            name: 'xiaoli',
            age: 123
        }
    },
    effects: {
        *initName(params: any, method: any) {
            const { call, put,select } = method;
            const { payload, callback } = params;
            const state = yield select()
            const info = yield call(getUserInfo, payload)
            yield put({
                type: 'updateUserInfo',
                payload:info.data
            })
            yield put({
                type:'center/updateName',
                payload:'change center name'
            })
            callback && callback(info)
        }
    },
    reducers: {
        updateUserInfo(state: object, action: any) {
            const { payload } = action
            return {
                ...state,
                userInfo: { ...payload }
            }
        }
    }
}