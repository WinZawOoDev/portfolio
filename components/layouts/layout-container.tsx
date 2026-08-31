import React from 'react'

export default function LayoutContainer({ children }: { children: React.ReactNode }) {
    return (
        <section className='layout-container overflow-x-hidden'>
            {children}
        </section>
    )
}
