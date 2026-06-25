import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/footer-bg-img.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-opacity-60 z-0" />

      {/* Top Area */}
      <div className="relative z-10 py-38">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12 px-4">
          
          {/* Address */}
          <div className="text-center">
            <h6 className="text-lg font-semibold mb-4">Address</h6>
            <p className="text-gray-300">
              <a 
                href="https://www.google.com/maps/place/Jaipur,+Rajasthan/@26.8851151,75.6257461,11z/data=!4m15!1m8!3m7!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!2sJaipur,+Rajasthan!3b1!8m2!3d26.9124336!4d75.7872709!16zL20vMDE2NzIy!3m5!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!8m2!3d26.9124336!4d75.7872709!16zL20vMDE2NzIy?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Panchwati colony, Rakhri, Sodala, Jaipur Rajsthan<br />
                Khatipura road Sodala, Jaipur
              </a>
            </p>
          </div>

          {/* Center Text */}
          <div className="text-center ">
            <h2 className="text-3xl font-bold font-['Abril_Fatface'] text-[#244262] mb-4">Grow Only Organic</h2>
            <p className="text-gray-300 max-w-md">
              A fresh and modern theme for all organic food and healthy product websites.
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <h6 className="text-lg text-center font-semibold mb-4">Email</h6>
            <p className="text-gray-300">
              <a href="abhishek@anivarti.in" className="hover:underline block">
                abhishek@anivarti.in
              </a>
              <a href="abhishek@anivarti.in" className="hover:underline block">
                contact@anivarti.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="relative z-10 py-4 text-center text-sm bg-[#244262] bg-opacity-10 text-gray-300">
        <a
          href="https://qodeinteractive.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          © 2025 Qode Interactive, All Rights Reserved
        </a>
      </div>
    </footer>
  );
};

export default Footer;
