"use client"

import { SessionProvider } from "next-auth/react"

export default function AuthenticateSessionProvider({ children }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}