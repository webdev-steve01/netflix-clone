"use client";
import React, { useState } from "react";
import plus from "./assets/plus-svgrepo-com (1).svg"
import Image from "next/image";
import QA from "./QA";

function FAQ() {
  const faqText = [
    {
      text: "What is netflix",
      desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      text: "How much does Netflix cost",
      desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,200 to ₦7,000 a month. No extra costs, no contracts.",
    },
    {
      text: "Where can I watch",
      desc: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      text: "How do I cancel",
      desc: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      text: "Where can I watch Netflix",
      desc: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      text: "Is Netflix good for kids",
      desc: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const [close, setClose] = useState(true)

  const handleClick = () => {
    if (close) {
      setClose(false)
    } else {
      setClose(true)
    }
  }
  // const click = document.querySelectorAll('closed')
  // click.forEach(i => {
  //   i.addEventListener('click', () => {
  //     if (close == true) {
  //       setClose(false);
  //       i.classList.add('open')
  //       i.classList.remove('closed')
  //     } else {
  //       setClose(true);
  //       i.classList.add('closed')
  //       i.classList.remove('open')
  //     }
  //   })
  // })

  const result = faqText.map((faq, i) => {
    return (
      <section key={i} className="">
        <QA question={faq.text} answer={faq.desc} />
      </section>
    )
  })
  return (
    <section className="faq">
      {/* <section className="closed px-4">
        <section className=" text py-5 flex justify-between align-middle">
          <div className="">What is netflix</div>
          <section className="plus">
            <Image src={plus} alt="" width={20} height={20} />
          </section>
        </section>
        <section className="description">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want without a single commercial – all for one low
          monthly price. There's always something new to discover and new TV
          shows and movies are added every week!
        </section>
      </section>
      <section className="closed px-4">
        <section className=" text py-5 flex justify-between align-middle">
          <div className="">How much does Netflix cost</div>
          <section className="plus">
            <Image src={plus} alt="" width={20} height={20} />
          </section>
        </section>
        <section className="description">
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from
          ₦2,200 to ₦7,000 a month. No extra costs, no contracts.
        </section>
      </section>
      <section className="closed px-4">
        <section className=" text py-5 flex justify-between align-middle">
          <div className="">What is netflix</div>
          <section className="plus">
            <Image src={plus} alt="" width={20} height={20} />
          </section>
        </section>
        <section className="description">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want without a single commercial – all for one low
          monthly price. There's always something new to discover and new TV
          shows and movies are added every week!
        </section>
      </section>
      <section className="closed px-4">
        <section className=" text py-5 flex justify-between align-middle">
          <div className="">What is netflix</div>
          <section className="plus">
            <Image src={plus} alt="" width={20} height={20} />
          </section>
        </section>
        <section className="description">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want without a single commercial – all for one low
          monthly price. There's always something new to discover and new TV
          shows and movies are added every week!
        </section>
      </section>
      <section className="closed px-4">
        <section className=" text py-5 flex justify-between align-middle">
          <div className="">What is netflix</div>
          <section className="plus">
            <Image src={plus} alt="" width={20} height={20} />
          </section>
        </section>
        <section className="description">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want without a single commercial – all for one low
          monthly price. There's always something new to discover and new TV
          shows and movies are added every week!
        </section>
      </section>
      <section className="closed px-4">
        <section className=" text py-5 flex justify-between align-middle">
          <div className="">What is netflix</div>
          <section className="plus">
            <Image src={plus} alt="" width={20} height={20} />
          </section>
        </section>
        <section className="description">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want without a single commercial – all for one low
          monthly price. There's always something new to discover and new TV
          shows and movies are added every week!
        </section>
      </section> */}
      {result}
    </section>
  );
}

export default FAQ;
