"use client";

export function ContactInquiryForm() {
  return (
    <form
      className="grid gap-3 md:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label className="sr-only" htmlFor="contact-name">
        Name
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        placeholder="Your name"
        className="min-h-12 rounded-full border-0 bg-white px-5 py-3 text-[#151515] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a3aff]"
      />

      <label className="sr-only" htmlFor="contact-email">
        Email
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        placeholder="Your email"
        className="min-h-12 rounded-full border-0 bg-white px-5 py-3 text-[#151515] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a3aff]"
      />

      <label className="sr-only" htmlFor="contact-message">
        Message
      </label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Tell us about your project"
        rows={5}
        className="min-h-[148px] resize-y rounded-3xl border-0 bg-white px-5 py-4 text-[#151515] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4a3aff] md:col-span-2"
      />

      <div className="md:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#4a3aff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3d2fe0]"
        >
          Send inquiry
        </button>
      </div>
    </form>
  );
}
