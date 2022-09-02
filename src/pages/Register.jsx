import React from 'react'

const Register = () => {
  return (
    <div>
       <div className="flex justify-center bg-[#f1a24c] mt-8">
      <form>
        <p className="text-[40px] uppercase font-bold p-6 text-white text-center mt-2 mb-4">
          Register
        </p>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-[#581664] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-[#ad1cc7] dark:focus:border-[#581664] focus:outline-none focus:ring-0 focus:border-[#581664] peer"
            placeholder=" "
            required=""
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#581664] peer-focus:dark:text-[#581664] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#581664] focus:outline-none focus:ring-0 focus:border-[#581664] peer"
            placeholder=" "
            required=""
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#581664] peer-focus:dark:text-[#581664] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#581664] focus:outline-none focus:ring-0 focus:border-[#581664] peer"
            placeholder=" "
            required=""
          />
          <label
            for="floating_repeat_password"
            class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#581664] peer-focus:dark:text-[#581664] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#581664] focus:outline-none focus:ring-0 focus:border-[581664] peer"
              placeholder=" "
              required=""
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#581664] peer-focus:dark:text-[#581664] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#581664] focus:outline-none focus:ring-0 focus:border-[#581664] peer"
              placeholder=" "
              required=""
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#581664] peer-focus:dark:text-[#581664] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#581664] focus:outline-none focus:ring-0 focus:border-[#581664] peer"
              placeholder=" "
              required=""
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#581664] peer-focus:dark:text-[#581664] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#581664] focus:outline-none focus:ring-0 focus:border-[#581664] peer"
              placeholder=" "
              required=""
            />
            <label
              for="floating_company"
              class="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#581664] peer-focus:dark:text-[#581664] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Other info
            </label>
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-[#581664] hover:bg-[#9e1db4] focus:ring-4 focus:outline-none focus:ring-[#581664] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-48 dark:bg-[#581664] dark:hover:bg-[#9e1db4] dark:focus:ring-[#9e1db4]"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default Register