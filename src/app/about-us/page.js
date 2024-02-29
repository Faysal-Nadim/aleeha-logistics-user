export const metadata = {
  title: "About Us - AleehaLogistics UAE Lottery",
  description:
    " Whether you're chasing that dream vacation, the latest tech gadget, or a simple moment of unexpected delight, AleehaLogistics stands as your partner in the journey.",
};
const aboutUs = [
  {
    section_title: "About Us",
    paragraph: [
      "Welcome to AleehaLogistics – Where Dreams Turn into Reality!",
      "At AleehaLogistics, we believe in making dreams come true. We're not just a platform; we're a gateway to endless possibilities and exciting opportunities. Our journey began with a simple yet powerful vision: to transform dreams into tangible moments of triumph. As we set out on this path, we are driven by the desire to offer a transformative experience that goes beyond the ordiinary",
      "Established with the resolute mission of providing everyone with a chance to win remarkable prizes, we've created a space where aspirations flourish and luck finds its way to your doorstep. We understand that each dream is unique, and each aspiration deserves the opportunity to bloom. It's not just about the prizes; it's about nurturing the anticipation, the thrill, and the sheer joy that comes with the possibility of turning your desires into reality.",
      "But AleehaLogistics is more than a mere platform; it's a community that thrives on shared excitement and shared successes. Every draw is an event that brings us closer together, uniting dreamers from different corners of the world in the pursuit of happiness. And when those dreams are fulfilled, when the winners' smiles light up our screens, that's when we truly celebrate.",
      "Whether you're chasing that dream vacation, the latest tech gadget, or a simple moment of unexpected delight, AleehaLogistics stands as your partner in the journey. With every draw, every ticket, and every smile of a winner, we embrace the concept of winning and celebrate the endless potential that resides within each dreamer.",
      "Welcome to AleehaLogistics – where your dreams are our mission, and your victories are our celebration. Together, let's keep dreaming and achieving, because with AleehaLogistics, the possibilities are boundless.",
    ],
  },
  {
    section_title: "Our Mission",
    paragraph: [
      "Our mission is clear: to bring joy, excitement, and the thrill of winning to people from all walks of life. We're dedicated to creating a platform that's fair, transparent, and accessible to everyone. Through our meticulously designed draws, we're here to change lives, spread happiness, and give you a reason to look forward to every draw.",
    ],
  },
  {
    section_title: "Why Choose AleehaLogistics?",
    paragraph: [
      "Affordable Excitement: At AleehaLogistics, we believe that winning shouldn't be reserved for the lucky few. Our draws are affordable, ensuring that everyone has a shot at taking home incredible prizes.",
      "Transparency: We're committed to transparency in all our processes. You'll know exactly how our draws work, how winners are chosen, and how prizes are distributed. Your trust is our priority.",
      "Diverse Prizes: From cash rewards to electronic gadgets, luxury getaways to valuable vouchers, our prizes span a wide range of categories. There's something for everyone to dream about.",
      "User-Friendly Experience: Our platform is designed with you in mind. Navigating through draws, purchasing tickets, and tracking results is intuitive and hassle-free.",
    ],
  },
  {
    section_title: "Join Us Today",
    paragraph: [
      "Whether you're chasing a thrilling win or simply exploring the excitement, AleehaLogistics is your ticket to a world where your dreams meet opportunity. Join us on this journey of fun, excitement, and the chance to win big. Let's celebrate the joy of winning together at AleehaLogistics!",
    ],
  },
];

const page = () => {
  return (
    <div className=" lg:px-8 md:px-6 sm:px-4  w-full  font-sora">
      <div className="flex flex-col gap-10">
        {/* <p className="prim_text_2xl mb-0">About Us</p>
        <div className="mt-2 mb-6">
          <div className="mt-4">
            <p className="text-[16px] font-medium"></p>
            <p className="text-[14px] mt-2 "></p>
          </div>
        </div> */}

        {aboutUs.map((section, index) => (
          <div key={index}>
            <p className="prim_text_2xl font-sora mb-0">
              {section?.section_title}
            </p>
            <div className="mt-2 mb-4">
              {section.paragraph.map((para, index) => (
                <div key={index} className="mt-8">
                  <p className="text-sm mt-2 font-mr "> {para}</p>
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
