import React from 'react'
import { Link } from 'react-router-dom'
const DonationSuccess = () => {
  React.useEffect(() => {
    document.title = 'OnCourt | Support Us'
  }, [])

  return (
    <div className='pt-[100px] bg-white flex justify-center items-center h-screen flex-col '>
      <div className='p-[40px] bg-slate-100 rounded-xl'>
        <h1 className='text-[40px] text-royal-blue/90 font-bold flex items-baseline'>
          Thank you for your support!
        </h1>
      </div>
      <Link
        to='/news'
        className='w-[250px] mt-5 ext-white bg-gradient-to-br from-blue-100 to-yellow hover:bg-gradient-to-bl font-semibold rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 text-royal-blue '
      >
        Explore recent news
      </Link>
    </div>
  )
}

export default DonationSuccess
