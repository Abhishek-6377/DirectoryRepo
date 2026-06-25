// OrganicOnly.jsx
import React from 'react';

const OrganicOnly = () => {
  return (
    <section className="relative bg-[#dfebfc] py-28 lg:pb-52 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-100"
    style={{
      backgroundImage:
        "url('https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-home-back-img-1.jpg')",
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 top-10">
    {/* Left Column */}
    <div>
      <h1 className="text-5xl md:text-6xl font-['Abril_Fatface'] font-extrabold text-[#244262] mb-6">
        Organic Only
      </h1>
      <p className="text-lg text-[#848484] font-['PT_Sans'] mb-10">
        Eros it voluptat accusantium doloremque laudantitum. Sed ut perspiciatis unde omnis iste.
      </p>

      <div className="space-y-8">
        {[
          "Start with Our Company First",
          "Learn How to Grow Yourself",
          "Farming Strategies of Today",
        ].map((title, idx) => (
          <div key={idx}>
            <h4 className="text-xl font-['Abril_Fatface'] font-semibold text-[#244262]">
              {title}
            </h4>
            <p className="mt-2 text-gray-500 text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Column: Image */}
    <div className="flex justify-center">
      <img
        src="https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-home-img-3.jpg"
        alt="Organic Farming"
        className="w-190 h-185 -ml-10 rounded-lg shadow-lg"
        loading="lazy"
      />
    </div>
  </div>
</section>
  );
};

export default OrganicOnly;
