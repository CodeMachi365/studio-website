export const formAction = "https://formspree.io/f/xovjozar";

export default function ContactForm() {
  return (
    <section className="contact-form w-full md:w-4/5 lg:w-3/5 mb-10">
      <h2 className="text-3xl font-semibold mb-8 text-on-primary dark:text-on-primary-dark">
        Send us a message
      </h2>
      <form action={formAction} method="POST" className="space-y-6">
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
        className="block text-sm font-medium text-secondary dark:text-secondary-dark mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="w-full p-3 border-2 border-surface-variant dark:border-surface-variant-dark rounded-md bg-surface dark:bg-surface-dark text-on-surface dark:text-on-surface-dark focus:outline-none focus:ring-2 focus:ring-surface-variant dark:focus:ring-surface-variant-dark focus:border-surface-variant dark:focus:border-surface-variant-dark shadow-sm"
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
        className="block text-sm font-medium text-secondary dark:text-secondary-dark mb-2"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        style={{ resize: "none" }}
        className={[
          "shadow-sm h-[30vh] w-full p-3 bg-surface dark:bg-surface-dark text-on-surface dark:text-on-surface-dark border-2 border-surface-variant dark:border-surface-variant-dark rounded-md",
          "focus:outline-none focus:ring-2 focus:ring-surface-variant dark:focus:ring-surface-variant-dark focus:border-surface-variant dark:focus:border-surface-variant-dark",
        ]
          .join(" ")
          .trim()}
        name="message"
        rows={8}
        placeholder="Write your message here..."
        required
      />
    </div>
  );
}

function SubmitButton() {
  return (
    <button className="btn w-full" type="submit">
      Send Message
    </button>
  );
}
