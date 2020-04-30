import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import busHook from '../../component/my-hook';
import { useCurrent } from '../../component/useCurrent';
import useToggle from '../../component/useToggle'
import { getUserInfo } from '../../services'

export const HookTest = (props) => {
    // console.log(props)
    const { count, setCount, list, setList } = busHook();
    const currentCom = useCurrent();

    const { state, toggle } = useToggle();

    const [i, setI] = useState(0)
    const [userInfo, setUserInfo] = useState({})

    // 要想获取到上一次渲染的state值，就需要使用 useRef() 生成的对象，在 useEffect 中进行赋值
    // 在新一次的渲染中通过 prevRef.current 获取值
    const prevRef = useRef();

    let interval = null;

    useEffect(() => {
        prevRef.current = i;
    })

    useEffect(() => {
        // 异步数据获取
        async function getData() {
            let re = await getUserInfo();
            console.log(re)
            setUserInfo(re.data)
        }
        getData()
    }, [currentCom])

    // let point = 0
    function setInter() {
        interval = setInterval(() => {
            const preI = prevRef.current;
            console.log('begin interval preI:' + preI)
            // console.log('begin interval point:' + point)
            if (preI < 5) {
                setI((_i) => _i + 1)
                // point ++
                console.log(11)
            } else {
                clearInterval(interval)
            }
        }, 1000)
    }

    function add() {
        setList((preList) => {
            console.log(preList)
            const _list = [
                ...preList,
                ...[4, 5, 6]
            ]
            return _list
        })
    }

    // 返回一个函数
    const showCount = useCallback(() => {
        console.log('into use call back count:' + count);

    }, [count])
    debugger

    console.log('preRender')

    // 当依赖发生变化时才重新计算
    const memoVal = useMemo(() => {
        return Date.now()
    }, [count])

    return (
        <div>
            <p>{memoVal}</p>
            <p>{userInfo.name}</p>
            <p>{i}</p>
            {/* <p>preCount:{preCount}</p> */}
            <p onClick={() => { showCount() }}>count:{count}</p>
            <button onClick={() => setCount(count + 1)} >click</button>
            <button onClick={add} >add</button>
            <button onClick={setInter} >interval</button>
            {list.map((val, index) => <div key={index} >{val}</div>)}

            <div>
                <p>
                    Effects：{state ? 'true' : 'false'}
                </p>
                <p>
                    <button onClick={() => toggle()}>
                        Toggle
                    </button>
                    <button onClick={() => toggle(false)} style={{ margin: '0 16px' }}>
                        Toggle False
                    </button>
                    <button onClick={() => toggle(true)}>
                        Toggle True
                    </button>
                </p>
            </div>

        </div>
    )

}

export default HookTest