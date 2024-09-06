import React from 'react';
import Image from 'next/image';
import styles  from './Card.module.css';

interface cardProps{
  cardHeader: string;
  cardText: string;
  cardImageSrc: string;
}

function Card({cardHeader, cardText, cardImageSrc}: cardProps) {
  return (
    <div className={styles.card}>
      <section className="top flex flex-col gap-4">
        <h1 className='text-white cardHead'>
          {cardHeader}
        </h1>
        <p>
          {cardText}
        </p>
      </section>
      <section className="image flex justify-end">
        <Image src={cardImageSrc} alt='svg' priority width={30} height={30}/>
      </section>
    </div>
  );
}

export default Card;
