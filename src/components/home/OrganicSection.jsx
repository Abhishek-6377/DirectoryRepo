import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    image:
      "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/home-country-iwt-1.jpg",
    title: "Don’t panic go organic.",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque",
    alt: "Organic Farming",
  },
  {
    image:
      "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/home-country-iwt-2.jpg",
    title: "Farm-grown resources.",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque",
    alt: "Farm Resources",
  },
  {
    image:
      "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/home-country-iwt-3.jpg",
    title: "Let’s keep things natural.",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque",
    alt: "Natural Living",
  },
];

const OrganicSection = () => {
  return (
    <div className="flex flex-col bg-[#ebe1cf] items-center text-[#244262] px-4 py-12">
      {/* ORGANIC Text */}
      <p
        className="uppercase tracking-[9px] font-light text-[13px]"
        style={{ fontFamily: "overpass" }}
      >
        ORGANIC
      </p>

      {/* Spacer */}
      <div className="h-[19px]" />

      {/* Asterisk */}
      <p
        className="uppercase tracking-[7px] font-light text-[25px]"
        style={{ fontFamily: "Myriad Pro" }}
      >
        *
      </p>

      {/* Section Title */}
      <div className="text-center mt-4 max-w-2xl">
        <h1 className="text-[52px] font-['Abril_Fatface'] -mt-6 font-extrabold ">Homegrown</h1>
        <p className="mt-[22px] text-[19px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      {/* Spacer */}
      <div className="h-[60px]" />

      {/* Image Cards Grid */}
      <div className="w-full max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {cards.map((card, index) => (
          <div key={index} className="text-center">
            <img
              src={card.image}
              alt={card.alt}
              className="w-full h-auto object-cover rounded-md"
              loading="lazy"
            />
            <div className="mt-4">
              <h4 className="text-xl font-bold">{card.title}</h4>
              <p className="text-gray-600 mt-2 text-sm">{card.text}</p>
            </div>
            <div className="h-8" /> {/* Spacer */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganicSection;
