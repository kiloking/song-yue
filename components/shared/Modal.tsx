import React from 'react'

export const Modal = ({children}: { children:React.ReactNode}) => {
  return (
    <div className=' w-full fixed z-10 h-screen inset-0'>
      {children}
    </div>
  )
}
