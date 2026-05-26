"use client";

/**
 * LeadFormDark - V2 dark-theme partnership lead form.
 * Same fields and POST endpoint as the V1 LeadForm but restyled for the
 * navy + gold landing page.
 */

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2, MessageCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import {
  INTEREST_CHIPS,
  COUNTRIES,
  BUSINESS_TYPES,
  WHATSAPP_URL,
} from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

type Status = "idle" | "loading" | "success" | "error";

export default function LeadFormDark({ id = "contact" }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [interests, setInterests] = useState<string[]>([]);

  const toggleChip = (chip: string) => {
    setInterests((curr) =>
      curr.includes(chip) ? curr.filter((c) => c !== chip) : [...curr, chip]
    );
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      phone: data.get("phone"),
      country: data.get("country"),
      business: data.get("business"),
      interests,
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setInterests([]);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id={id}
      className="relative bg-white py-12 md:py-24"
    >
      {/* Thin gold lines framing the section */}
      <div className="gold-line absolute inset-x-0 top-0" aria-hidden />
      <div className="gold-line absolute inset-x-0 bottom-0" aria-hidden />

      <div className="relative mx-auto max-w-[860px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-5 text-center md:mb-12"
        >
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold-deep)] md:text-[0.7rem]">
            Partnership desk
          </span>
          <h2 className="mt-2 font-display text-[1.7rem] md:mt-4 md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-[color:var(--royal-blue)]">
            Request your{" "}
            <em className="italic text-[color:var(--accent-gold-deep)]">
              Partnership Kit
            </em>
            .
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[0.84rem] font-light leading-relaxed text-[color:var(--text-on-light-muted)] md:mt-4 md:text-base">
            Our UAE desk responds within one working day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="relative overflow-hidden rounded-[20px] border border-[color:var(--royal-blue)]/15 bg-white p-4 shadow-[0_24px_60px_-30px_rgba(30,58,138,0.18)] md:rounded-[24px] md:p-10"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--border-gold)] bg-[color:var(--accent-gold)]/15"
                >
                  <Check
                    className="h-7 w-7 text-[color:var(--accent-gold)]"
                    strokeWidth={2.5}
                  />
                </motion.div>
                <h3 className="font-display text-2xl md:text-3xl font-light tracking-tight text-[color:var(--royal-blue)]">
                  Thank you. Received.
                </h3>
                <p className="max-w-sm text-base font-light text-[color:var(--text-on-light-muted)]">
                  Our UAE desk will be in touch within one working day. For urgent
                  inquiries, WhatsApp us directly.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-[color:var(--accent-gold-deep)] hover:underline"
                >
                  <MessageCircle className="h-4 w-4" />
                  Continue on WhatsApp
                </a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5"
              >
                <Field
                  label="Full Name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                />
                <Field
                  label="Company"
                  name="company"
                  type="text"
                  required
                  placeholder="Company / Brand"
                />
                <Field
                  label="Business Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
                <Field
                  label="WhatsApp / Phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="With country code"
                />
                <SelectField
                  label="Country"
                  name="country"
                  required
                  options={COUNTRIES}
                />
                <SelectField
                  label="Business Type"
                  name="business"
                  required
                  options={BUSINESS_TYPES}
                />

                <div className="md:col-span-2">
                  <label className="mb-2 block text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-gold-deep)] md:mb-3 md:text-[0.7rem] md:tracking-[0.2em]">
                    Interested in (select any)
                  </label>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {INTEREST_CHIPS.map((chip) => {
                      const active = interests.includes(chip);
                      return (
                        <motion.button
                          type="button"
                          key={chip}
                          onClick={() => toggleChip(chip)}
                          animate={{ scale: active ? 1.02 : 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 22,
                          }}
                          className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1.5 text-[0.72rem] font-medium transition-all md:gap-1.5 md:px-3.5 md:py-2 md:text-[0.82rem] ${
                            active
                              ? "border-[color:var(--accent-gold)] bg-[color:var(--accent-gold)] text-[color:var(--royal-blue-deep)]"
                              : "border-[color:var(--royal-blue)]/15 bg-[color:var(--off-white)] text-[color:var(--text-on-light-muted)] hover:border-[color:var(--accent-gold)] hover:text-[color:var(--royal-blue)]"
                          }`}
                        >
                          {active && (
                            <Check className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={3} />
                          )}
                          {chip}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-gold group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.88rem] font-semibold shadow-[0_14px_36px_-12px_rgba(201,169,97,0.5)] disabled:cursor-not-allowed disabled:opacity-70 md:px-6 md:py-4 md:text-[0.95rem]"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="mt-3 text-center text-[0.85rem] text-red-400">
                      Something went wrong. Please try again or WhatsApp us.
                    </p>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.92rem] font-medium text-[color:var(--text-on-light-muted)] transition-colors hover:text-[color:var(--accent-gold-deep)]"
          >
            <MessageCircle className="h-4 w-4" />
            Prefer to chat? WhatsApp our UAE desk
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <label
        htmlFor={name}
        className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--royal-blue)] md:text-[0.7rem] md:tracking-[0.2em]"
      >
        {label}
        {required && <span className="text-[color:var(--accent-gold-deep)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-10 rounded-lg border border-[color:var(--royal-blue)]/15 bg-transparent px-3 text-[0.88rem] text-[color:var(--royal-blue)] placeholder:text-[color:var(--text-on-light-muted)] transition-colors focus:border-[color:var(--accent-gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-gold)]/25 md:h-12 md:rounded-xl md:px-4 md:text-[0.95rem]"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <label
        htmlFor={name}
        className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--royal-blue)] md:text-[0.7rem] md:tracking-[0.2em]"
      >
        {label}
        {required && <span className="text-[color:var(--accent-gold-deep)]"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="h-10 appearance-none rounded-lg border border-[color:var(--royal-blue)]/15 bg-transparent bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%23B89653%22><path fill-rule=%22evenodd%22 d=%22M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z%22 clip-rule=%22evenodd%22/></svg>')] bg-[length:1.1rem_1.1rem] bg-[right_0.75rem_center] bg-no-repeat px-3 pr-9 text-[0.88rem] text-[color:var(--royal-blue)] transition-colors focus:border-[color:var(--accent-gold)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-gold)]/25 md:h-12 md:rounded-xl md:bg-[right_1rem_center] md:px-4 md:pr-10 md:text-[0.95rem]"
      >
        <option value="" disabled className="bg-white">
          Select...
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-white">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
