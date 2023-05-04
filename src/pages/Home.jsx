import React from 'react'

 export default function Home() {
  return(
    <div>
      <header style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px', marginBottom: '20px' }}>
        <h1>WELCOME ! </h1>
        <p>Here you will find information about different dog breeds, key facts, and other resources for dog lovers.</p>
      </header>
      <section className="MainSection">
        <div>
          <h2 className="SubTitle">Meet Our Furry Friends</h2>
          <p className="Description">We love all dog breeds and have plenty of lovable pups. Our mission is to teach you important facts and knowledge so that you will be prepared when you get your first dog ! </p>
        </div>
          <h2 className="SubTitle">Fun and Fascinating Dog Facts</h2>
          <div className="FactsGrid">
            <div className="FactCard">
              <h3 className="FactTitle">French Bulldogs</h3>
              <ul className="FactList">
                <li>French bulldogs were originally bred to be companion dogs for lace workers in England.</li>
                <li>They are a small breed but have a big personality.</li>
                <li>Frenchies are known for their distinctive "bat ears".</li>
              </ul>
            </div>
            <div className="FactCard">
              <h3 className="FactTitle">Labrador Retrievers</h3>
              <ul className="FactList">
                <li>Labrador Retrievers are excellent swimmers and are often used as search and rescue dogs for water emergencies.</li>
                <li>They are one of the most popular dog breeds in the world.</li>
                <li>Labradors have a "soft mouth" and are able to carry eggs without breaking them!</li>
              </ul>
            </div>
            <div className="FactCard">
              <h3 className="FactTitle">Golden Retrievers</h3>
              <ul className="FactList">
                <li>Golden Retrievers were originally bred as hunting dogs in Scotland, but today they are one of the most popular family dogs in the world.</li>
                <li>They are known for their friendly and gentle nature.</li>
                <li>Goldens have webbed feet, which makes them excellent swimmers.</li>
              </ul>
            </div>
            <div className="FactCard">
              <h3 className="FactTitle">German Shepherds</h3>
              <ul className="FactList">
                <li>German Shepherds are often used as police and military dogs because of their intelligence, loyalty, and strong work ethic.</li>
                <li>They are highly trainable and excel in obedience competitions.</li>
                <li>German Shepherds have a strong protective instinct and make excellent guard dogs.</li>
              </ul>
            </div>
            <div className="FactCard">
              <h3 className="FactTitle">Poodles</h3>
              <ul className="FactList">
                <li>Poodles are one of the most intelligent dog breeds and are often used in dog shows because of their impressive ability to learn tricks.</li>
                <li>They come in three sizes: standard, miniature, and toy.</li>
                <li>Poodles are hypoallergenic and shed very little.</li>
              </ul>
        </div>   
        <div className="ContactSection">
        <div className="ContactContainer">
          <h2 className="SubTitle">Contact Us</h2>
          <form className="ContactForm">
          <div className="FormFields">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="FormFields">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" />
          </div>
          <div className="FormFields">
            <label htmlFor="message"> Message:</label>
            <textarea id="message" name="message" placeholder="Enter your message"></textarea>
          </div> 
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
    </section>
    <div><img alt=" "></img></div>
  </div>
  );
 }