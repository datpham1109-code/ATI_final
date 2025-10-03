import { currentUser } from "@/actions/auth/user"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { ModalProvider } from "@/global/modal-provider"

import React from "react"

export default async function RootLayout({ children }: {children: React.ReactNode}) {
  const user = await currentUser()

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <iframe
      src="/chatbot/index.html"
      width="350"
      height="500"
      style={{
      border: "none",
      position: "fixed",
      bottom: "20px",
      right: "20px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      borderRadius: "10px",
      zIndex: 1000,
      }}
    />
    </div>
  )
}