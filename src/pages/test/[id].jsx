import React, { Component } from 'react';
import { connect } from 'dva';
import {HookTest} from '../hook'

@connect((state) => {
    const { user, center } = state
    return {
        user, center
    }
})
export default class Index extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'user/initName',
            payload: { name: 'xxxx' },
            callback: (data) => {
            }
        })
    }

    go = ()=>{
        const {dispatch,history} = this.props;
        history.push('/test/xxxx')
    }

    render() {
        const { user: { userInfo }, center: { centerName } } = this.props;
        // console.log(this.props)
        return (
            <div>
                test/id
                <div>{userInfo.next_page}</div>
                <div onClick={this.go} >centerName:{centerName}</div>
                <HookTest ss='hook-str'></HookTest>
            </div>

        )
    }

}