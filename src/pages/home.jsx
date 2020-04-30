import React, { Component } from 'react';
import { connect,routerRedux } from 'dva';
// import { routerRedux } from 'dva/router';
import { history  } from 'umi';

@connect()
export default class Home extends Component {

    go = () => {
        const { dispatch, history } = this.props;
        // history.push('/test/xxxx')
        // 路由跳转遇到的一个问题 为什么 redux 中的 router 对象没有触发更新 ？
        // 但是目标路由中的 location 对象中的数据是正确的
        // history.push('/test/xxxx')
        // routerRedux.push('/test/xxxx')
        dispatch(routerRedux.push('/test/xxxx'))
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <div onClick={this.go} >onClick</div>
            </div>

        )
    }

}