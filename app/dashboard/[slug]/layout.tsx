import React from 'react'

export default function DashboardLayout({
    children, 
    params,
}:{
    children: React.ReactNode
    params: { slug: string}
}) {
  return (
    <section>{children}</section>
  )
}
