"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ContactFormData, FormStatus } from "@/lib/types";
import { SERVICES } from "@/lib/constants";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  serviceNeeded: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  function validate(data: ContactFormData) {
    const nextErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!data.name.trim()) nextErrors.name = "Please enter your name.";
    if (!data.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!data.serviceNeeded) nextErrors.serviceNeeded = "Please select a service.";
    if (!data.message.trim()) nextErrors.message = "Please add a short message.";
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    try {
      // ---------------------------------------------------------------
      // BACKEND INTEGRATION POINT
      // ---------------------------------------------------------------
      // This is currently a frontend-only simulation. To send real
      // submissions, replace the block below with a call to your chosen
      // integration, for example:
      //
      //   const response = await fetch("/api/contact", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData),
      //   });
      //   if (!response.ok) throw new Error("Failed to send message");
      //
      // See .env.local.example for backend/email service options
      // (Resend, EmailJS, Formspree, or a custom API route).
      // ---------------------------------------------------------------
      await new Promise((resolve) => setTimeout(resolve, 900));

      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
    }
  }

  function updateField<K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  const inputClasses =
    "w-full rounded-md border border-navy-900/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-light/60 focus:border-brand dark:border-white/15 dark:bg-navy-950 dark:text-sky-100/90 dark:placeholder:text-sky-100/30";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
            Phone <span className="text-ink-light font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="serviceNeeded" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
            Service Needed
          </label>
          <select
            id="serviceNeeded"
            name="serviceNeeded"
            value={formData.serviceNeeded}
            onChange={(e) => updateField("serviceNeeded", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.serviceNeeded)}
            aria-describedby={errors.serviceNeeded ? "service-error" : undefined}
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {errors.serviceNeeded && (
            <p id="service-error" className="mt-1.5 text-xs text-red-600">
              {errors.serviceNeeded}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900 dark:text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClasses}
          placeholder="Tell us a little about what you need help with."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="text-sm font-medium text-teal">
            Thanks — your message has been received. We'll get back to you
            within one business day.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-600">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
