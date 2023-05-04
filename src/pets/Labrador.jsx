import React from 'react'
import IMAGES from '../IMAGES/images'


export default function Labrador() {
  return (
    <div>
      <div id='labrador-cell' >
        <div>
          <h1>Labrador</h1>
          <img src={IMAGES.LR} alt='labrador-dog'/>
        </div>
        <div>
          <h1>About breed</h1>
          <p>The sweet-faced, lovable Labrador Retriever is America's most popular dog breed.
            Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to 
            go around for a family looking for a medium-to-large dog. The sturdy, well-balanced Labrador Retriever can
            , depending on the sex, stand from 21.5 to 24.5 inches at the shoulder and weigh between 55 to 80 pounds.
            The dense, hard coat comes in yellow, black, and a luscious chocolate. The head is wide, the eyes glimmer with kindliness,
            and the thick, tapering 'otter tail' seems to be forever signaling the breed's innate eagerness. Labs are famously friendly.
            They are companionable housemates who bond with the whole family, and they socialize well with neighbor dogs and humans alike. 
            But don't mistake his easygoing personality for low energy: The Lab is an enthusiastic athlete that requires lots of exercise, 
            like swimming and marathon games of fetch, to keep physically and mentally fit.
          </p>
        </div>
      </div>
      <div id='info-dog'>
        <div>
          <h2>height</h2>
          <p>height</p>
        </div>
        <div>
          <h2>weigh</h2>
          <p>weigh</p>
        </div>
        <div>
          <h2>life expectancy</h2>
          <p>life expectancy</p>
        </div>
      </div>
    </div>
  )
}
