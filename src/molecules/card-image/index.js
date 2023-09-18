import React from 'react'
import Image from '../../atoms/image'

export default function CardImage(props) {
  return (
    <div className='card-image mr-4'>
        <Image src={props.ImageSrc} className={props.ImageclassName} />
    </div>
  )
}
