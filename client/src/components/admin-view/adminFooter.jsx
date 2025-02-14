import React from "react";
import { Heart } from "lucide-react";

export const FooterAdmin = () => {
  return (
    <div className="text-center flex flex-col md:flex-row justify-between items-center px-6 py-2 bg-[#32848e] text-[#f4e8da] border-t border-[#f4e8da]">
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
          Harshika vichare
        </a>
      </p>
    </div>
  );
};
