import React from "react";
import { EMAIL } from "@/constants/config";
import ContactForm from "@/components/ui/ContactForm";
import Link from "next/link";

export const CONTACT_SECTION_ID = "home-view-contact-section";

export default function ContactSection() {
  return (
    <section id={CONTACT_SECTION_ID} className="home-view-section">
      <div className="flex flex-col text-primary items-center">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <section className="contact-info w-full md:w-4/5 lg:w-3/5">
      <h2 className="text-3xl font-semibold mb-8">Contact info</h2>
      <p className="text-lg mb-4 text-secondary dark:text-secondary-dark">
        XXX Studio
      </p>
      <p className="text-lg mb-4 text-secondary dark:text-secondary-dark">
        Email :{" "}
        <Link
          href={`mailto:${EMAIL}`}
          className="hover:underline"
        >
          {EMAIL}
        </Link>
      </p>
    </section>
  );
}
