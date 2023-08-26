'use client';

import React, { createContext, useContext, useReducer } from 'react'

const IntroContext = createContext({} as any);
export const useIntroContext = () => useContext(IntroContext);

const typeOutInitState = { intro: false, name: false, position: false, content: false };
type TYPEOUTACTION =
    | { type: "intro", payload: boolean }
    | { type: "name", payload: boolean }
    | { type: "position", payload: boolean }
    | { type: "content", payload: boolean }



export default function IntroProvider({ children }: { children: React.ReactNode }) {

    const [typeOutStatus, dispatchTypeOutStatus] = useReducer(typeOutReducer, typeOutInitState);

    return (
        <IntroContext.Provider value={{ typeOutStatus, dispatchTypeOutStatus }}>
            {children}
        </IntroContext.Provider>
    )
}

function typeOutReducer(state: typeof typeOutInitState, action: TYPEOUTACTION) {
    const { type, payload } = action;
    switch (type) {
        case "intro":
            return { ...state, intro: payload }
        case "name":
            return { ...state, name: payload }
        case "position":
            return { ...state, position: payload }
        case "content":
            return { ...state, content: payload }
        default:
            throw new Error();
    }
}