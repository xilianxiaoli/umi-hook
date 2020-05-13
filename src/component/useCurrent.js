import React, { useState, useEffect, useRef } from 'react';

export const useCurrent = () => {
    const currentCom = useRef(); // 返回一个可变的 ref 对象，这个对象在整个生命周期中可以保持不变
    useEffect(() => {
        currentCom.current = true
    })
    return currentCom
}