import React from 'react'

export default function LayoutContainer({ children }: { children: React.ReactNode }) {
    return (
        <section className='w-full max-w-7xl mx-auto overflow-x-hidden'>
            {children}
        </section>
    )
}
