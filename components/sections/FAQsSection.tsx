import React from 'react';
import FAQ from '../utilities/FAQ';

function FAQsSection() {
  return (
    <section className='px-4 py-5 bg-black text-white'>
      <h1 className="title  lg:text-[1.2em] lg:py-2">
        Frequently asked questions
      </h1>
      <FAQ />
    </section>
  );
}

export default FAQsSection;
