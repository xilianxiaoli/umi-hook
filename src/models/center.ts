
export default {
    namespace: "center",
    state: {
        centerName: 'center'
    },
    reducers: {
        updateName(state: any, { payload }:any) {
            return {
                ...state,
                centerName: payload
            }
        }
    }
}