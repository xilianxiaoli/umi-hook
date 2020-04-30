import React, { useState, useEffect, useRef } from 'react';

export const useCurrent = () => {
    const currentCom = useRef();
    useEffect(() => {
        currentCom.current = true
    })
    return currentCom
}