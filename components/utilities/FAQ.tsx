"use client";
import QA from "./QA";

function FAQ() {
  const faqText = [
    {
      text: "What is fylm",
      desc: "fylm is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      text: "How much does fylm cost",
      desc: "Watch fylm on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,200 to ₦7,000 a month. No extra costs, no contracts.",
    },
    {
      text: "Where can I watch",
      desc: "Watch anywhere, anytime. Sign in with your fylm account to watch instantly on the web at fylm.com from your personal computer or on any internet-connected device that offers the fylm app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take fylm with you anywhere.",
    },
    {
      text: "How do I cancel",
      desc: "fylm is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      text: "Where can I watch fylm",
      desc: "fylm has an extensive library of feature films, documentaries, TV shows, anime, award-winning fylm originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      text: "Is fylm good for kids",
      desc: "The fylm Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const result = faqText.map((faq, i) => {
    return (
      <section key={i} className="">
        <QA question={faq.text} answer={faq.desc} />
      </section>
    );
  });
  return <section className="faq  mx-auto">{result}</section>;
}

export default FAQ;
