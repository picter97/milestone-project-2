import React from 'react'

 export default function Home() {
  return (
    <div>
      <header style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px', marginBottom: '20px' }}>
      
        <h1>WELCOME ! </h1>
        <p>Here you will find information about different dog breeds, key facts, and other resources for dog lovers.</p>
      </header>
   <section>
          <h2 className="SubTitle">Meet Our Furry Friends</h2>
          <p className="Description">We love all dog breeds and have plenty of lovable pups. Our mission is to teach you important facts and knowledge so that you will be prepared when you get your first dog ! </p>
          <div className="Facts">
              <h3 className="FactTitle">Over 50 Breeds</h3>
              <p className="FactDescription">From adorable French Bulldogs to energetic Labrador Retrievers, we have a variety of breeds.</p>   
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
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Enter your message"></textarea>
          </div> 
            <button type="submit">Send</button>
          </form>
        </div>
    <div>
      <img alt=" "></img>

    </div>
    </div>
   </section>
</div>
  );
 }