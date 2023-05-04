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
        <div> 
          <h1>About the breed</h1>
          <p id='p-cell'>
          Generally considered dogkind's finest all-purpose worker, the German Shepherd Dog is a large, agile, muscular dog of noble character and high intelligence. Loyal, confident, courageous, and steady, the German Shepherd is truly a dog lover's delight. German Shepherd Dogs can stand as high as 26 inches at the shoulder and, when viewed in outline, presents a picture of smooth, graceful curves rather than angles. The natural gait is a free-and-easy trot, but they can turn it up a notch or two and reach great speeds. There are many reasons why German Shepherds stand in the front rank of canine royalty, but experts say their defining attribute is character: loyalty, courage, confidence, the ability to learn commands for many tasks, and the willingness to put their life on the line in defense of loved ones. German Shepherds will be gentle family pets and steadfast guardians, but, the breed standard says, there's a 'certain aloofness that does not lend itself to immediate and indiscriminate friendships
          </p>
        </div>
      </div>
      <div id='info-dog'>
        <div>
          <h2>height</h2>
          <p>24-26 in Male</p>
          <p>22-24 in Female</p>
        </div>
        <div>
          <h2>weigh</h2>
          <p>65-90 pounds Male</p>
          <p>50-70 Female</p>
        </div>
        <div>
          <h2>life expectancy</h2>
          <p>7-10 years</p>
          
        </div>
      </div>
    </div>
  )
}
