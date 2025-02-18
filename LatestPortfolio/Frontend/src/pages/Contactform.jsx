const ContactForm = ({ value }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={value}
    >
      <div
        className="relative w-[30rem] rounded-lg bg-white bg-gradient-to-tr from-yellow-300 to-black p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-2 top-2 text-2xl text-white"
          onClick={value}
        >
          X
        </button>
        <h3 className="mb-4 text-center text-3xl font-semibold text-white">
          CONTACT
        </h3>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4"
        >
          <input
            type="hidden"
            name="access_key"
            value="36763638-8fd7-44e8-94cb-3273243036ef"
          />

          <div>
            <label className="block text-sm font-medium text-white">
              Name:
            </label>
            <input
              name="first-name"
              type="text"
              id="nameText"
              required
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Email:
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Message:
            </label>
            <textarea
              name="message"
              id="text-area"
              required
              className="h-24 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="ml-50 z-20 cursor-pointer rounded-2xl bg-lime-400 from-lime-200 via-lime-400 to-lime-500 px-6 py-3 text-center text-2xl font-medium uppercase text-white shadow-lg shadow-lime-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:shadow-lg dark:shadow-lime-800/80 dark:focus:ring-lime-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
