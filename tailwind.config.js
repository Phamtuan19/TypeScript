/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         boxShadow: {
            button:
               "inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075)",
            modal: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;",
         },
         colors: {
            modalThem: "rgba(0, 0, 0, 0.5)",
         },
         height: {
            input: "2.5rem",
         },
         padding: {
            input: "8.5px 14px",
         },
         backgroundColor: {
            btnDisabled: "rgba(0, 0, 0, 0.12)",
         },
      },
   },
   plugins: [],
}
