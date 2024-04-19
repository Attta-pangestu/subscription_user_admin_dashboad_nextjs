import DashboardViews from '@/views/dashboard/DashboardViews'
import React from 'react'
import Head from 'next/head'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Dashboard Page",
  description: "Deskripsi Dashboard Page ",
  icons: {
    icon: '/images/icon_dashboard.png',
  }
  
}

const DashboardPage = () => {
  return (
    <>
    <Head>
      <title>Dashboard Page</title>
    </Head>
    <DashboardViews />
    </>
  )
}

export default DashboardPage