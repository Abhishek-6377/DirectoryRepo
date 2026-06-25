import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Eye, Heart } from "lucide-react";

const TopDealsDiscount = () => {
    const products = [
        {
            title: "Bread",
            link: "https://mildhill.qodeinteractive.com/product/bread-3/",
            discount: 17,
            oldPrice: 12,
            newPrice: 10,
            pricePerKg: "$10 / kg",
            rating: 4,
            image: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/shop-9-img-1.jpg",
            cartLink: "?add-to-cart=1392",
            wishlistLink: "?add_to_wishlist=1392",
        },
        {
            title: "Honey",
            link: "https://mildhill.qodeinteractive.com/product/honey/",
            discount: 12,
            oldPrice: 25,
            newPrice: 22,
            pricePerKg: "$22 / kg",
            rating: 5,
            image: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/07/shop-img-2.jpg",
            cartLink: "?add-to-cart=829",
            wishlistLink: "?add_to_wishlist=829",
        },
        {
            title: "Penne-3",
            link: "https://mildhill.qodeinteractive.com/product/penne-3/",
            discount: 17,
            oldPrice: 18,
            newPrice: 15,
            pricePerKg: "$15 / kg",
            rating: 5,
            image: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/shop-9-img-2.jpg",
            cartLink: "?add-to-cart=829",
            wishlistLink: "?add_to_wishlist=829",
        },
        {
            title: "Chick-pea",
            link: "https://mildhill.qodeinteractive.com/product/chick-pea/",
            discount: 15,
            oldPrice: 13,
            newPrice: 11,
            pricePerKg: "$11 / kg",
            rating: 5,
            image: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/shop-2-img-2.jpg",
            cartLink: "?add-to-cart=829",
            wishlistLink: "?add_to_wishlist=829",
        },
    ];
     const images = [
    "https://mildhill.qodeinteractive.com/wp-content/uploads/2024/04/1.jpg",
    "https://mildhill.qodeinteractive.com/wp-content/uploads/2024/04/2.jpg",
    "https://mildhill.qodeinteractive.com/wp-content/uploads/2024/04/3.jpg",
    "https://mildhill.qodeinteractive.com/wp-content/uploads/2024/04/4.jpg",
    "https://mildhill.qodeinteractive.com/wp-content/uploads/2024/04/5.jpg",
    "https://mildhill.qodeinteractive.com/wp-content/uploads/2024/04/6.jpg",
    "https://mildhill.qodeinteractive.com/wp-content/uploads/2024/04/7.jpg"
  ];

    return (
        <div className="w-full px-4 bg-[#ebe1cf] py-32">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl font-bold font-['Abril_Fatface'] text-[#244262]">Top Deals Discount</h1>
                <p className="mt-6 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
            </div>
            <div className="min-h-screen bg-[#ebe1cf] flex justify-start items-start pt-10 pl-20">
    <div className="flex flex-nowrap gap-x-6 overflow-x-auto p-6">
        {products.map((product, idx) => (
            <motion.div
                key={idx}
                className="bg-[#e8f3ff] rounded-xl shadow-md p-4 w-full min-w-[300px] max-w-sm hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
                            <div className="relative">
                                {product.discount && (
                                    <span className="absolute items-center pt-4 h-18 w-18 -top-4 left-53 bg-[#244262] text-white text-center text-3xl  rounded">
                                        -{product.discount}%
                                    </span>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-64 object-cover  rounded"
                                />
                            </div>

                            <div className=" mt-4">
                                <h6 className="text-2xl -ml-20 font-semibold font-['Abril_Fatface'] text-center text-[#244262] hover:text-blue-[#244262] transition-colors duration-300">
                                    <a href={product.link} target="_blank" rel="noopener noreferrer">{product.title}</a>
                                </h6>
                                <div className="text-center ml-30 -mt-7">
                                    <div className="flex justify-center items-center space-x-2 text-xl font-medium">
                                        <del className="text-gray-400">
                                            <span className="woocommerce-Price-amount amount">
                                                <span className=" woocommerce-Price-currencySymbol">$</span>{product.oldPrice}
                                            </span>
                                        </del>
                                        <ins className="text-green-600 font-bold no-underline">
                                            <span className="woocommerce-Price-amount amount">
                                                <span className="woocommerce-Price-currencySymbol">$</span>{product.newPrice}
                                            </span>
                                        </ins>
                                    </div>
                                </div>

                                <div className="text-gray-600 ml-20 text-2xl mb-3">{product.pricePerKg}</div>




                                <div className="flex ml-23 mt-2">
                                    <div className="flex items-center text-yellow-400 text-sm">
                                        {Array(5)
                                            .fill(0)
                                            .map((_, i) => (
                                                <span key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"}>
                                                    ★
                                                </span>
                                            ))}
                                    </div>
                                </div>
                                {/* Action Buttons */}
                                <div className="flex flex-col ml-10 sm:flex-row gap-5 mt-4">
                                    {/* Add to Cart */}
                                    <a
                                        href={product.cartLink}
                                        data-quantity="1"
                                        className="bg-[#244262] text-white px-4 py-2 text-sm rounded flex items-center gap-2 transition duration-300"
                                        aria-label={`Add “${product.title}” to your cart`}
                                        rel="nofollow"
                                    >
                                        <ShoppingCart size={25}/>
                                    </a>

                                    {/* Quick View */}
                                    <a
                                        href="#"
                                        className="bg-blue-300 px-4 py-2 text-sm rounded flex items-center gap-2 transition duration-300"
                                    >
                                        <Eye size={25}/>
                                    </a>

                                    {/* Add to Wishlist */}
                                    <div className="flex items-center">
                                        <a
                                            href={product.wishlistLink}
                                            className="bg-green-300 px-4 py-2 text-sm rounded flex items-center gap-2 transition duration-300"
                                            rel="nofollow"
                                        >
                                            <Heart size={25}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
             <div className="w-full bg-[#ebe1cf] -mt-10 px-4 text-center">
      {/* Title and Text */}
      <div className="mb-10 bg-[#ebe1cf]">
        <h2 className="text-3xl md:text-4xl font-semibold font-['Abril_Fatface'] text-[#244262]">
          Follow Us and Shop on Instagram
        </h2>
        <p className="mt-4 text-[#919090] text-lg">
          It creates higher natural levels of resistance to pests and<br />
          disease. Best Smoothies ever lovely
        </p>
      </div>

      {/* Instagram Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-center">
        {images.map((src, index) => (
          <a
            key={index}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={src}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </a>
        ))}
      </div>
    </div>
        </div>
        
    );
};

export default TopDealsDiscount;
