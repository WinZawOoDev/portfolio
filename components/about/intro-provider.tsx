'use client';

import React, { createContext, useContext, useReducer } from 'react'

type TypeOutStatus = { intro: boolean; name: boolean; position: boolean; content: boolean }

type TypeOutAction =
  | { type: 'intro'; payload: boolean }
  | { type: 'name'; payload: boolean }
  | { type: 'position'; payload: boolean }
  | { type: 'content'; payload: boolean }

type IntroContextValue = {
  typeOutStatus: TypeOutStatus
  dispatchTypeOutStatus: React.Dispatch<TypeOutAction>
}

const IntroContext = createContext<IntroContextValue | null>(null);

export function useIntroContext() {
  const ctx = useContext(IntroContext);
  if (!ctx) throw new Error('useIntroContext must be used within an IntroProvider');
  return ctx;
}

const typeOutInitState: TypeOutStatus = { intro: false, name: false, position: false, content: false };

function typeOutReducer(state: TypeOutStatus, action: TypeOutAction): TypeOutStatus {
  const { type, payload } = action;
  switch (type) {
    case 'intro':
      return { ...state, intro: payload }
    case 'name':
      return { ...state, name: payload }
    case 'position':
      return { ...state, position: payload }
    case 'content':
      return { ...state, content: payload }
    default:
      return state
  }
}

export default function IntroProvider({ children }: { children: React.ReactNode }) {
  const [typeOutStatus, dispatchTypeOutStatus] = useReducer(typeOutReducer, typeOutInitState);

  return (
    <IntroContext.Provider value={{ typeOutStatus, dispatchTypeOutStatus }}>
      {children}
    </IntroContext.Provider>
  )
}