import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0">
        <div className="">tic-tac-toe@2021</div>
      </footer>
    </>
  )
}

export default Layout
