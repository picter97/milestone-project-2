import React from 'react'
import IMAGES from '../IMAGES/images'
export default function Poodle() {
  return (
    <div>
      <div id='poodle-cell'>
        <div>
          <h1>Poodle</h1>
          <img src={IMAGES.P} alt='poodle-dog'/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum obcaecati minus molestiae. Fugit repudiandae, expedita eaque commodi, eveniet eum quae nemo, obcaecati aliquid sunt iusto officiis laudantium est praesentium.</p>
      </div>
    </div>
  )
}
