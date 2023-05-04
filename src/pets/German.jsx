import React from 'react'
import IMAGES from '../IMAGES/images'

export default function German() {
  return (
    <div>
      <div id='german-cell'>
        <div>
          <h1>German Shepherd</h1>
          <img src={IMAGES.GS} alt='German-dog'/>
        </div>
        <div> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, laborum omnis iure adipisci delectus quod veniam earum facilis similique molestiae consectetur accusantium, error dignissimos inventore vel officiis nam! Doloribus, nulla.</div>
      </div>
    </div>
  )
}
