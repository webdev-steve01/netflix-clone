import React from 'react';
import Card from './Card';
import TV from './assets/tv-screen-television-svgrepo-com.svg'
import download from './assets/download-square-svgrepo-com.svg';
import telescope from './assets/telescope-svgrepo-com.svg';
import profile from './assets/multiple-user-profile-images-svgrepo-com.svg'

function ThirdSection() {
  // console.error('test')
  return (
    <section className="Third-section">
      <h1 className='title'>More reasons to join</h1>
      <section className="card-container m-auto">
        <Card
          cardHeader="Enjoy your TV"
          cardText="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
          cardImageSrc={TV}
        />
        <Card
          cardHeader="Download your shows to watch offline"
          cardText="Save your favorites easily and always have something to watch."
          cardImageSrc={download}
        />
        <Card
          cardHeader="Watch everywhere"
          cardText="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          cardImageSrc={telescope}
        />
        <Card
          cardHeader="Create profile for kids"
          cardText="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
          cardImageSrc={profile}
        />
      </section>
    </section>
  );
}

export default ThirdSection;
