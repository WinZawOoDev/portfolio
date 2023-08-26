'use client'

import React, { createContext, useContext, useReducer } from 'react'
import { Element } from 'react-scroll'

const IntroContext = createContext({} as any);
export const useIntroContext = () => useContext(IntroContext);

const typeOutInitState = { intro: false, name: false, position: false, content: false };
type TYPEOUTACTION =
    | { type: "intro", payload: boolean }
    | { type: "name", payload: boolean }
    | { type: "position", payload: boolean }
    | { type: "content", payload: boolean }


export default function Container({ children }: { children: React.ReactNode }) {

    const [typeOutStatus, dispatchTypeOutStatus] = useReducer(typeOutReducer, typeOutInitState);

    return (
        <Element name='about' className='relative w-full'>
            <IntroContext.Provider value={{ typeOutStatus, dispatchTypeOutStatus }}>
                <div className='max-w-7xl mx-auto grid grid-cols-2 place-items-center h-screen'>
                    {children}
                </div>
            </IntroContext.Provider>
        </Element>
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