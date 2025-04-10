import React from 'react'

export default function Header() {
  return (
    <div className="fixed top-0 left-[200px] h-[200px] w-[calc(100%-250px)] bg-[#2f2f2f] z-10 flex items-center justify-end pr-[5%]">
      <h1 className="text-white m-0 p-0 text-right" style={{ color: 'white' }}>
        Your favourite music
      </h1>
    </div>
  )
}
