import React from 'react'

const Vedio = ({ vedioId, title }) => {
  return (
    <div className='w-full  h-auto flex flex-col gap-3 bg-white rounded-lg'>
      <div>
        <iframe
          width='100%'
          height='300'
          src={`https://www.youtube.com/embed/${vedioId}`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
      <div className=' p-5 flex flex-col gap-[20px]'>
        <h4 className='font-sans font-bold'> {title}</h4>
      </div>
    </div>
  )
}

export default Vedio
