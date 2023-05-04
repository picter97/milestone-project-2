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
        <div>
          <h1>About the breed</h1>  
          <p id='p-cell'>Whether Standard, Miniature, or Toy, and either black, white, or apricot, the Poodle stands proudly among dogdom's true aristocrats. Beneath the curly, low-allergen coat is an elegant athlete and companion for all reasons and seasons.Poodles come in three size varieties: Standards should be more than 15 inches tall at the shoulder; Miniatures are 15 inches or under; Toys stand no more than 10 inches. All three varieties have the same build and proportions. At dog shows, Poodles are usually seen in the elaborate Continental clip. Most pet owners prefer the simpler Sporting clip, in which the coat is shorn to follow the outline of the squarely built, smoothly muscled body.  Forget any preconceived notions about Poodles you may have: Poodles are eager, athletic, and wickedly smart dogs of remarkable versatility. The Standard, with his greater size and strength, is the best all-around athlete of the family, but all Poodles can be trained with great success.</p>
        </div>
      </div>
      <div id='info-dog'>
        <div>
          <h2>height</h2>
          <p>over 15 in </p>
        </div>
        <div>
          <h2>weigh</h2>
          <p>60-70 pound Male</p>
          <p>40-50 punds Female</p>
        </div>
        <div>
          <h2>life expectancy</h2>
          <p>10-18 years</p>
        </div>
      </div>
    </div>
  )
}
