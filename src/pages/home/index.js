import React from 'react'
import Nav from '../../templates/nav'
import Main from '../../templates/main'
import Footer from '../../templates/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Main />
      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Footer />
    </>
  )
}
