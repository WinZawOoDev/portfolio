import React from 'react'

export default function LayoutContainer({ children }: { children: React.ReactNode }) {
    return (
        <section className='w-full max-w-7xl mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-8'>
            {children}
        </section>
    )
}
