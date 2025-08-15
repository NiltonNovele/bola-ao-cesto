import React from 'react'
import { Link } from 'react-router-dom'
const New = ({ title, image, id, content, summary }) => {
  return (
    <div className='w-full  h-auto flex flex-col gap-3 bg-white rounded-lg'>
      <div>
        <img src={image} alt='' />
      </div>
      <div className=' p-5 flex flex-col gap-[20px]'>
        <Link
          to={`/news/${id}`}
          className='font-sans font-bold hover:text-royal-blue'
        >
          {' '}
          {title}
        </Link>
        <p className='font-anek'>{summary}</p>
      </div>
    </div>
  )
}

export default New
