import React from 'react'
import IMAGES from '../IMAGES/images'
export default function Labrador() {
  return (
    <div>
      <div id='labrador-cell'>
        <div>
          <h1>Labrador</h1>
          <img src={IMAGES.LR} alt='labrador-dog'/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis asperiores obcaecati libero modi, excepturi quo corporis deleniti molestiae non consequatur, sed harum? Esse natus quibusdam sapiente inventore ducimus eum!</p>
      </div>
    </div>
  )
}
