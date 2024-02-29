import Head from "next/head";

export const metadata = {
  title: "Questions and Answers - Dubai Lottery - AleehaLogistics",
  description:
    "Read our questions and answers page,  How often do new AleehaLogistics campaigns appear? Will the range of products and prize categories expand? Get more info here",
};
const faqs = [
  {
    section_title: "About Us",
    qna_array: [
      {
        qus: "What is AleehaLogistics?",
        ans: "AleehaLogistics is an innovative online store that offers a unique shopping experience. With every purchase, AleehaLogistics provides customers a complimentary Prize Draw ticket, presenting an opportunity to win luxurious prizes.",
      },
      {
        qus: "How can I access AleehaLogistics.net?",
        ans: "AleehaLogistics is accessible through various devices, including desktop computers, smartphones, and tablets.",
      },
      {
        qus: "In which countries does AleehaLogistics operate?",
        ans: "AleehaLogistics operates worldwide, providing accessibility to customers globally. For comprehensive information on product/prize collection for international users, please refer to our 'Draw Terms & Conditions'.",
      },
    ],
  },
  {
    section_title: "Campaigns",
    qna_array: [
      {
        qus: "How often do new AleehaLogistics campaigns appear?",
        ans: "New campaigns are launched immediately after the completion of an existing campaign. While there is no specific time limit per campaign, you can anticipate frequent releases of new campaigns on AleehaLogistics.",
      },
      {
        qus: "Will the range of products and prize categories expand?",
        ans: "We have exciting plans to introduce new products and prizes. Stay tuned for upcoming campaigns that will bring more variety and excitement to AleehaLogistics.",
      },
    ],
  },
  {
    section_title: "Making a Purchase",
    qna_array: [
      {
        qus: "Are there any undisclosed fees that I should be aware of when making a purchase?",
        ans: "Rest assured, there are no hidden charges on any AleehaLogistics purchase. However, we recommend checking with your bank to inquire about any potential transaction or processing fees they may apply.",
      },
      {
        qus: "Which currencies are accepted for purchasing a AleehaLogistics product?",
        ans: "Currently, AleehaLogistics accepts Dirhams. You can make a purchase from AleehaLogistics using any bank account with any currency. However, please note that AleehaLogistics will not be responsible for any exchange rate differences or fees (whether hidden or otherwise) imposed by your bank that may affect the final billing amount.",
      },
      {
        qus: "Is it possible to cancel or refund a purchase order on AleehaLogistics?",
        ans: "According to the 'User Agreement', all sales purchases on AleehaLogistics are considered final, and no refunds will be provided under any circumstances.",
      },
    ],
  },
  {
    section_title: "AleehaLogistics Prizes",
    qna_array: [
      {
        qus: "Where can I collect my AleehaLogistics prize?",
        ans: "Instructions on prize collection will be sent to you (as the 'winner') via email. For complete details, please consult the 'Draw Terms & Conditions'.",
      },
      {
        qus: "Can I designate someone else to collect my Prize?",
        ans: "Only the registered account holder or, at our discretion, an individual with 'Power of Attorney' (POA) can collect the Prize on behalf of the registered account holder. Emirates ID or passport are the only acceptable forms of identification (please ensure your identification is up to date).",
      },
      {
        qus: "What if I prefer to keep my win in the AleehaLogistics prize draw confidential?",
        ans: "According to the 'Draw Terms & Conditions', AleehaLogistics reserves the right to utilize your image, name, and any statements you have made across their marketing channels (both physical and digital).",
      },
      {
        qus: "Can I access information about previous winners of the AleehaLogistics campaign draws?",
        ans: "You will have the opportunity to view past winners of AleehaLogistics campaigns through our social media channels.",
      },
      {
        qus: "How will I receive updates on the campaign status: 'Coming Soon'/'Launched'/'Ending'/'Closed'?",
        ans: "AleehaLogistics will send 'Push Notifications' and emails to inform all ticket holders about the status of each campaign.",
      },
    ],
  },
];

const page = () => {
  return (
    <div className=" lg:px-8 md:px-6 sm:px-4  w-full  font-sora">
      <Head>
        <script type="application/ld+json">
          {`{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "1) What is AleehaLogistics?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AleehaLogistics is an innovative online store that offers a unique shopping experience. With every purchase, AleehaLogistics provides customers a complimentary Prize Draw ticket, presenting an opportunity to win luxurious prizes.",
            },
          },
          {
            "@type": "Question",
            name: "How can I access AleehaLogistics.net?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AleehaLogistics is accessible through various devices, including desktop computers, smartphones, and tablets.",
            },
          },
          {
            "@type": "Question",
            name: "In which countries does AleehaLogistics operate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AleehaLogistics operates worldwide, providing accessibility to customers globally. For comprehensive information on product/prize collection for international users, please refer to our 'Draw Terms & Conditions'.",
            },
          },
          {
            "@type": "Question",
            name: "How often do new AleehaLogistics campaigns appear?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "New campaigns are launched immediately after the completion of an existing campaign. While there is no specific time limit per campaign, you can anticipate frequent releases of new campaigns on AleehaLogistics.",
            },
          },
          {
            "@type": "Question",
            name: "Will the range of products and prize categories expand?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We have exciting plans to introduce new products and prizes. Stay tuned for upcoming campaigns that will bring more variety and excitement to AleehaLogistics.",
            },
          },
          {
            "@type": "Question",
            name: "Are there any undisclosed fees that I should be aware of when making a purchase?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rest assured, there are no hidden charges on any AleehaLogistics purchase. However, we recommend checking with your bank to inquire about any potential transaction or processing fees they may apply.",
            },
          },
          {
            "@type": "Question",
            name: "Which currencies are accepted for purchasing a AleehaLogistics product?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Currently, AleehaLogistics accepts Dirhams. You can make a purchase from AleehaLogistics using any bank account with any currency. However, please note that AleehaLogistics will not be responsible for any exchange rate differences or fees (whether hidden or otherwise) imposed by your bank that may affect the final billing amount.",
            },
          },
          {
            "@type": "Question",
            name: "Is it possible to cancel or refund a purchase order on AleehaLogistics?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "According to the 'User Agreement', all sales purchases on AleehaLogistics are considered final, and no refunds will be provided under any circumstances.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I collect my AleehaLogistics prize?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Instructions on prize collection will be sent to you (as the 'winner') via email. For complete details, please consult the 'Draw Terms & Conditions'.",
            },
          },
          {
            "@type": "Question",
            name: "Can I designate someone else to collect my Prize?",
            acceptedAnswer: {
              "@type": "Answer",
              text: " Only the registered account holder or, at our discretion, an individual with 'Power of Attorney' (POA) can collect the Prize on behalf of the registered account holder. Emirates ID or passport are the only acceptable forms of identification (please ensure your identification is up to date).",
            },
          },
          {
            "@type": "Question",
            name: "What if I prefer to keep my win in the AleehaLogistics prize draw confidential?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "According to the 'Draw Terms & Conditions', AleehaLogistics reserves the right to utilize your image, name, and any statements you have made across their marketing channels (both physical and digital).",
            },
          },
          {
            "@type": "Question",
            name: "Can I access information about previous winners of the AleehaLogistics campaign draws?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You will have the opportunity to view past winners of AleehaLogistics campaigns through our social media channels.",
            },
          },
          {
            "@type": "Question",
            name: "How will I receive updates on the campaign status: 'Coming Soon'/'Launched'/'Ending'/'Closed'?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AleehaLogistics will send 'Push Notifications' and emails to inform all ticket holders about the status of each campaign.",
            },
          },
        ],
      }`}
        </script>
      </Head>
      <div className="flex flex-col gap-10">
        {faqs.map((section, index) => (
          <div key={index}>
            <p className="prim_text_2xl mb-0">{section?.section_title}</p>
            <div className="mt-2 mb-6">
              {section.qna_array.map((qa, i) => (
                <div key={i} className="mt-8">
                  <p className="text-[16px] font-mr font-semibold">
                    {i + 1}
                    {") "} {qa?.qus}
                  </p>
                  <p className="text-[14px] font-mr mt-4 ">Ans: {qa?.ans}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
