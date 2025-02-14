import React, { useEffect, useRef } from "react";
import { Heart } from "lucide-react";
import { FaChevronUp } from "react-icons/fa";
import { gsap } from "gsap";

export const Footer = () => {
  const footerRef = useRef(null);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={footerRef}>
      <div
        className="flex flex-col items-center bg-[#f78cbf] text-[#fce4ee] py-10 px-5"
        style={{
          borderTopRightRadius: "40px",
          borderTopLeftRadius: "40px",
          position: "relative",
        }}
      >
        {/* Back to Top Button */}
        <button
          onClick={handleBackToTop}
          className="absolute bottom-3 right-5 bg-secondary text-[#fce4ee] p-2 rounded-full shadow-lg hover:bg-[#f78cbf] flex items-center justify-center"
        >
          <FaChevronUp className="h-5 w-5" />
        </button>

        <div className="flex flex-col lg:flex-row items-center w-full max-w-screen-lg">
          {/* Logo Section */}
          <div className="text-center pb-5 mb-10 lg:mr-20 md:mb-4">
            <img
              src="https://res.cloudinary.com/ddnp4px7u/image/upload/v1739544482/logo_spmcos.png"
              alt="Eco Store Logo"
              className="h-24 w-24 mx-auto"
            />
            <p className="mt-3 text-sm">
              {/* Eco-friendly place, */}
              Fbric-products place, 
              <br />
              where sustainability
              <br />
              meets style!
            </p>
          </div>

          {/* Other Sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Menu Section */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg pb-3">Menu</h4>
              <a href="/shop/listing" className="block text-sm hover:underline">
                Catalog
              </a>
              <a href="/shop/about" className="block text-sm hover:underline">
                About Us
              </a>
              <a href="#" className="block text-sm hover:underline">
                Partners
              </a>
              <a
                href="/shop/terms-and-conditions"
                className="block text-sm hover:underline"
              >
                Terms and Condition
              </a>
            </div>

            {/* Catalog Section */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg pb-3">Catalog</h4>
              <a
                href="listing?category=cushions"
                className="block text-sm hover:underline"
              >
                Cushions
              </a>
              <a
                href="listing?category=tablecloths"
                className="block text-sm hover:underline"
              >
                Tablecloths
              </a>
              <a
                href="listing?category=natural_fabrics"
                className="block text-sm hover:underline"
              >
                Natural Fabrics
              </a>
              <a
                href="listing?category=embroidery"
                className="block text-sm hover:underline"
              >
                Embroidery
              </a>
              <a
                href="listing?category=curtains"
                className="block text-sm hover:underline"
              >
                Curtains
              </a>
              <a
                href="listing?category=home_essentials"
                className="block text-sm hover:underline"
              >
                Home Essentials
              </a>
              <a
                href="listing?category=synthetic_fabrics"
                className="block text-sm hover:underline"
              >
               Synthetic Fabrics
              </a>
            </div>

            {/* Contact Section */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg pb-3">Contacts</h4>
              <a href="#" className="block text-sm hover:underline">
                Support
              </a>
              <a href="#" className="block text-sm hover:underline">
                FAQs
              </a>
              <a href="#" className="block text-sm hover:underline">
                Privacy Policy
              </a>
            </div>

            {/* Social Media Section */}
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg pb-3">Social Media</h4>
              <a
                href="https://www.facebook.com/TheInnocentAlive"
                target="_blank"
                className="block text-sm hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/innocent_alive/"
                target="_blank"
                className="block text-sm hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://x.com/Innocent_Alive_"
                target="_blank"
                className="block text-sm hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://www.reddit.com/user/Effective-Arrival335/"
                target="_blank"
                className="block text-sm hover:underline"
              >
                Reddit
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-[#32848e] text-[#f4e8da] border-t border-[#f4e8da]">
        <p className="text-sm">&copy; 2024 EcoFabric. All rights reserved.</p>

        <p className="text-sm flex items-center gap-1 mt-2 md:mt-0">
          Created with
          <Heart size={16} fill="#f78cbf" className="text-red-500" />
          by{" "}
          <a
            href="https://github.com/Innocent-Alive"
            target="_blank"
            className="hover:underline font-bold underline-offset-2 transition-all duration-300 hover:[text-shadow:0_0_2px_#ba9659] hover:[-webkit-text-stroke:0.05px_#ef4444]"
          >
            {/* Abhay Kumar Das */}

            Harshika Vichare
          </a>
        </p>
      </div>
    </div>
  );
};
