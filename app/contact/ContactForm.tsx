"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "Architecture",
    message: "",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-[var(--color-line)] p-8 reveal">
        <p className="eyebrow text-accent">Reçu</p>
        <h3 className="text-2xl md:text-3xl font-medium tracking-tight mt-3">Merci.</h3>
        <p className="mt-3 text-muted">
          On revient vers vous dans les 48 heures ouvrées. Pour les
          urgences, le téléphone reste le plus rapide.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 reveal" aria-label="Formulaire de contact A'IDA">
      <Field label="Nom" required>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border-b border-ink/20 bg-transparent py-3 text-base focus:border-ink outline-none"
          autoComplete="name"
        />
      </Field>
      <Field label="E-mail" required>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border-b border-ink/20 bg-transparent py-3 text-base focus:border-ink outline-none"
          autoComplete="email"
        />
      </Field>
      <Field label="Type de projet">
        <select
          value={form.project}
          onChange={(e) => setForm({ ...form, project: e.target.value })}
          className="w-full border-b border-ink/20 bg-transparent py-3 text-base focus:border-ink outline-none"
        >
          <option>Architecture</option>
          <option>Design</option>
          <option>Ingénierie</option>
          <option>Autre</option>
        </select>
      </Field>
      <Field label="Message" required>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border-b border-ink/20 bg-transparent py-3 text-base focus:border-ink outline-none resize-none"
        />
      </Field>
      <button type="submit" className="btn-pill mt-4">
        Envoyer →
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow">
        {label}
        {required && <span className="text-accent" aria-hidden="true"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
