import React from 'react';

export const InputQuery = () => {
  return (
    <div className="w-full mb-5 lg:mb-10 px-4 sm:px-8 py-4 lg:py-6 bg-black/40 rounded-3xl shadow-2xl shadow-black/50 order-3 lg:order-2 ring-4 ring-gray-600/10">
      <textarea
        className="rounded-xl py-1 px-3 my-2 outline-0 w-full text-white bg-[#17153a] ring-white/5 hover:ring-[#cb6ce6] focus:ring-[#cb6ce6] ring-4"
        rows={5}
        placeholder="SELECT * FROM users WHERE state='CA' AND credits > 1000;"
        aria-label="SELECT * FROM users WHERE state='CA' AND credits > 1000;"
      ></textarea>
      <button
        className="mt-4 disabled:ring-none  disabled:bg-gray-800 bg-gray-900 hover:bg-gray-800 ring-4 ring-white/5 hover:ring-[#cb6ce6] 
                  text-lg rounded-xl py-1 px-3 w-full flex items-center gap-x-3 justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
          ></path>
        </svg>
        Translate to SQL
      </button>
    </div>
  );
};
