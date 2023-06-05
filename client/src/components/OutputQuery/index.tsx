import React from 'react';

export const OutputQuery = () => {
  return (
    <div className="max-w-3xl w-full flex flex-col mx-auto">
      <div className="font-extrabold relative w-full text-5xl font-mono text-center hidden lg:block mb-5 lg:-translate-x-8 transition-transform duration-500 ease-in-out">
        <span className="text-white">TEXT</span>
        <span className="text-[#cb6ce6]">2</span>
        <span className="text-[#5ce1e6]">SQL</span>
        <span className="text-[#e4e325]">.ONLINE</span>
      </div>
      <div className="relative w-full mb-5 px-4 sm:px-8 py-3 lg:py-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black lg:-translate-x-9 transition-transform duration-500 ease-in-out">
        <div className="relative">
          <textarea
            className="rounded-xl py-1 px-3 mt-2 w-full text-white bg-[#17153a] outline-0 hover:ring-4 focus:ring-4 ring-[#cb6ce6]
                    text-white"
            rows={8}
            placeholder="SELECT * FROM users WHERE state='CA' AND credits > 1000;"
            aria-label="SELECT * FROM users WHERE state='CA' AND credits > 1000;"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
