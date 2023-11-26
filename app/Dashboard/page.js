
import React from 'react'
import Head from 'next/head'
import { Header } from './Header'

export default function page () {
  return (
    <>
        <Header />
        <Head>
            <title>Dashboard</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main>

        </main>
    </>
  )
}
