import React from 'react'
import IMAGES from '../IMAGES/images'
import './pets.css'

export default function French() {
  return (
    <div>
      <div id='french-cell'>
        <div>
          <h1>French Bulldog</h1>
          <img src={IMAGES.FB} alt='french bulldog' />

        </div>
        <div>
          <p>
          The one-of-a-kind French Bulldog, with his large bat ears and even disposition, is one of the world's most popular small-dog breeds, especially among city dwellers. The Frenchie is playful, alert, adaptable, and completely irresistible. The French Bulldog resembles a Bulldog in miniature, except for the large, erect 'bat ears' that are the breed's trademark feature. The head is large and square, with heavy wrinkles rolled above the extremely short nose. The body beneath the smooth, brilliant coat is compact and muscular. The bright, affectionate Frenchie is a charmer. Dogs of few words, Frenchies don't bark much'¿but their alertness makes them excellent watchdogs. They happily adapt to life with singles, couples, or families, and do not require a lot of outdoor exercise. They get on well with other animals and enjoy making new friends of the human variety. It is no wonder that city folk from Paris to Peoria swear by this vastly amusing and companionable breed.
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
