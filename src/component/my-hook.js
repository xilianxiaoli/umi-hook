import React, { useState, useEffect } from 'react';

// 
/**
 * 自定义 hook ，把多个组件公用的东西提升出来
 * 返回你想要的函数和变量
 */
export default () => {
    const [count, setCount] = useState(1)
    const [list, setList] = useState([1, 2, 3])

    useEffect(() => {
        console.log('into effect')
        setCount((parms) => {
            console.log('parms=' + parms)
            return count + 100
        })
        return () => {
            console.log('use effect return func')
        }
    }, [])

    return {
        count, setCount, list, setList
    }
}