import React from 'react'

const Page = (Props) => {

  return (
    <h1 className="text-lg font-medium hover:text-blue-400 transition-colors duration-200 cursor-pointer">{Props.pageName}</h1>
  )
}

export default Page 