import React, { useState } from 'react';
import { MapPin, Mail, Truck, ShoppingBag, DollarSign, Percent } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission here
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    const offices = [
        {
            city: 'Jodhpur',
            address: 'Panchwati colony, Rakhri, Sodala, Jaipur Rajsthan',
            email: 'abhishek@anivarti.in'
        },
        {
            city: 'Ajmer',
            address: 'Panchwati colony, Rakhri, Sodala, Jaipur Rajsthan',
            email: 'abhishek@anivarti.in'
        },
        {
            city: 'Kota',
            address: 'Panchwati colony, Rakhri, Sodala, Jaipur Rajsthan',
            email: 'abhishek@anivarti.in'
        },
        {
            city: 'Bikaner',
            address: 'Panchwati colony, Rakhri, Sodala, Jaipur Rajsthan',
            email: 'abhishek@anivarti.in'
        }
    ];

    const features = [
        {
            title: 'Delivery',
            description: 'Proin gravida',
            imgSrc: 'https://mildhill.qodeinteractive.com/wp-content/uploads/2019/09/main-iwt-img-1.png',
            link: 'https://mildhill.qodeinteractive.com/our-team/',
        },
        {
            title: 'Online Shop',
            description: 'Proin gravida',
            imgSrc: 'https://mildhill.qodeinteractive.com/wp-content/uploads/2019/09/main-iwt-img-2.png',
            link: 'https://mildhill.qodeinteractive.com/contact-us/',
        },
        {
            title: 'Great Value',
            description: 'Proin gravida',
            imgSrc: 'https://mildhill.qodeinteractive.com/wp-content/uploads/2019/09/main-iwt-img-3.png',
            link: 'https://mildhill.qodeinteractive.com/who-we-are/',
        },
        {
            title: 'Top Discounts',
            description: 'Proin gravida',
            imgSrc: 'https://mildhill.qodeinteractive.com/wp-content/uploads/2019/09/main-iwt-img-4.png',
            link: 'https://mildhill.qodeinteractive.com/pricing-plans/',
        },
    ];

    return (
        <div className="min-h-screen ">
            {/* Main Contact Section */}
            <div
             className="h-195 bg-cover bg-center rounded-2xl p-30"
                        style={{
                            backgroundImage: "url('https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/contact-img-1.jpg?id=2102')"
                        }}
            >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Office Locations */}
                    <div className='ml-35'>

                        <div className="mb-12">
                            <h1 className="text-6xl font-bold font-['Abril_Fatface'] text-[#244262]  mb-4">Contact Us</h1>
                            <p className="text-lg text-gray-600">
                                Lorem ipsum dolor sit amet, tibique voluptatibus sit in. Dolorem eloquentiam quo at.
                                Sit case debet decore ne.
                            </p>
                        </div>

                        {/* Office Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {offices.map((office, index) => (
                                <div key={index} className="space-y-4">
                                    <h4 className="text-xl font-semibold font-['Abril_Fatface'] text-[#244262]">{office.city}</h4>

                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-blue-900 mt-1 flex-shrink-0" />
                                        <div className='w-50'>
                                            <a
                                                href={`https://www.google.com/maps?q=${encodeURIComponent(office.address)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-700 hover:text-blue-900 transition-colors"
                                            >
                                                {office.address}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Mail className="w-5 h-5 text-blue-900 flex-shrink-0" />
                                        <div>
                                            <a
                                                href={`mailto:${office.email}`}
                                                className="text-gray-700 hover:text-blue-900 transition-colors"
                                            >
                                                {office.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-gradient-to-br bg-[#244262] rounded-2xl p-8 h-120 w-130 mt-5 shadow-2xl">
                        <h4 className="text-2xl text-white font-['Abril_Fatface'] mb-8 text-left">
                            Send us a message
                        </h4>

                        <div className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                    className="w-full px-4 py-3 bg-white border border-white/20 rounded-lg text-gray-500 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    className="w-full px-4 py-3 bg-white border border-white/20 rounded-lg text-gray-500 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white border border-white/20 rounded-lg text-gray-500 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-blue-300 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue transform hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-[#f9f9f9] py-12 shadow-inner">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-">
                    {features.map((item, index) => (
                        <div key={index} className="text-center space-y-4">
                            <a href={item.link} target="_self" rel="noopener noreferrer">
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    width={52}
                                    height={52}
                                    loading="lazy"
                                    className=""
                                />
                            </a>
                            <h6 className="text-lg -mt-15 -ml-10 ">
                                <a href={item.link} className="font-['Abril_Fatface'] text-[#244262] transition">
                                    {item.title}
                                </a>
                            </h6>
                            <p className="text-gray-600 -mt-3 -ml-10 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ContactPage;