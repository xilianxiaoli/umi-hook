
export default {
    namespace: 'global',

    state: {
        collapsed: false,
        notices: []
    },

    effects: {

    },

    reducers: {
        changeLayoutCollapsed(state, { payload }) {
            return {
                ...state,
                collapsed: payload
            };
        },
        changeMenuData(state, { payload }) {
            return {
                ...state,
                menuData: payload
            };
        }
    },

    subscriptions: {
        setup({ history, ...pp }) {
            // Subscribe history(url) change, trigger `load` action if pathname is `/`
            return history.listen(({ pathname, search }) => {
                // console.log(pathname, search)
                // console.log('into history.listen')
            });
        }
    }
};
