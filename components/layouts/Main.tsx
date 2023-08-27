import React from 'react'

export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative w-full">{children}</main>
    )
}
