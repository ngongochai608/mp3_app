import React, { useContext } from 'react'
import { Songs } from '../Context'

const SongDetail = () => {
    const { song } = useContext(Songs);

  return (
    <div className='col-span-1'>
            <img className='m-auto w-[300px] h-[300px] object-cover rounded-full avatar-song' src={song.links.images[0].url} alt="" />
            <h3 className='text-white text-2xl text-center mt-5'>{song.name}</h3>
    </div>
  )
}

export default SongDetail