import React from "react";

const FloatingInput = () => {
  return (
    <div>
      <div
        className={
          "min-h-[97px] bg-[#EEEEEE] rounded-2xl w-full flex flex-col justify-center px-6"
        }
      >
        <div class="relative ">
          <input
            type="text"
            id="floating_outlined"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:secondary_text_color dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_outlined"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-nutral-900 px-2 peer-focus:px-2   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Floating outlined
          </label>
        </div>
      </div>
    </div>
  );
};

export default FloatingInput;
