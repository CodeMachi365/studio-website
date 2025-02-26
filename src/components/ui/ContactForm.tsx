export default function ContactForm() {
  return (
    <section className="contact-form w-full md:w-4/5 lg:w-3/5">
      <h2 className="text-3xl font-semibold mb-8">Send us a message</h2>
      <form
        // TODO: register a new formspree form and update the action
        action="https://formspree.io/f/xxxx"
        method="POST"
        className="space-y-6"
      >
        <EmailInput />
        <MessageInput />
        <SubmitButton />
      </form>
    </section>
  );
}

function EmailInput() {
  return (
    <div>
      <label
        className="block text-sm font-medium text-secondary mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="w-full p-3 border-2 border-primary rounded-md bg-secondary focus:outline-none focus:ring-black focus:border-black shadow-sm"
        name="email"
        type="email"
        required
      />
    </div>
  );
}

function MessageInput() {
  return (
    <div>
      <label
        className="block text-sm font-medium text-secondary mb-2"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        className={[
          "shadow-sm h-[30vh] w-full p-3 bg-secondary border-2 border-primary rounded-md",
          "focus:outline-none focus:ring-black focus:border-black",
        ]
          .join(" ")
          .trim()}
        name="message"
        required
      />
    </div>
  );
}

function SubmitButton() {
  return (
    <div>
      <button
        className="w-full px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75"
        type="submit"
      >
        Send Message
      </button>
    </div>
  );
}
