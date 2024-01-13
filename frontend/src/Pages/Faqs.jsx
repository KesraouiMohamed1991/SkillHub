import { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqsData = [
    {
      question: "Why wouldn't I just hire a full-time designer?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint. Minima repellat beatae laudantium modi. Magnam nihil esse nulla, quia perferendis tenetur architecto autem inventore, commodi, quaerat suscipit voluptates voluptatum?",
    },
    {
      question: "Is there a limit to how many requests I can have?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint. Minima repellat beatae laudantium modi. Magnam nihil esse nulla, quia perferendis tenetur architecto autem inventore, commodi, quaerat suscipit voluptates voluptatum?",
    },
    {
      question: "How fast will I receive my designs?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint. Minima repellat beatae laudantium modi. Magnam nihil esse nulla, quia perferendis tenetur architecto autem inventore, commodi, quaerat suscipit voluptates voluptatum?",
    },
    {
      question: "Who are the designers?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint. Minima repellat beatae laudantium modi. Magnam nihil esse nulla, quia perferendis tenetur architecto autem inventore, commodi, quaerat suscipit voluptates voluptatum?",
    },
    {
      question: "How does the pause feature work?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint. Minima repellat beatae laudantium modi. Magnam nihil esse nulla, quia perferendis tenetur architecto autem inventore, commodi, quaerat suscipit voluptates voluptatum?",
    },
    {
      question: "What programs do you design in?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sint. Minima repellat beatae laudantium modi. Magnam nihil esse nulla, quia perferendis tenetur architecto autem inventore, commodi, quaerat suscipit voluptates voluptatum?",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section id='Faqs' className="h-screen w-screen flex  text-primary bg-background dark:text-background dark:bg-primary justify-center items-center p-4   font-mono">
      <div className="h-2/3  text-primary bg-background dark:text-background dark:bg-accent w-full sm:w-2/3">
        <h1 className="text-center text-2xl py-2">FAQs</h1>

        {faqsData.map((faq, index) => (
          <div key={index} className="flex flex-col border-b-2 border-black cursor-pointer">
            <div className="flex justify-between p-6" onClick={() => handleToggle(index)}>
              <p className="font-semibold">{faq.question}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 transition-transform transform ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <p
              className={`p-2 toggled-icon text-sm ${
                activeIndex === index ? 'block' : 'hidden'
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
