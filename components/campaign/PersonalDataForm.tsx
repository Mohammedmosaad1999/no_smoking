"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Cigarette,
  Mail,
  MessageSquare,
  User,
  Users,
  Venus,
  Mars,
} from "lucide-react";
import { DEFAULT_CIGARETTE_PRICE } from "@/lib/calculator";
import { campaignContent, ct } from "@/lib/campaign-content";
import type { Locale } from "@/lib/i18n";
import { getUserProfile, saveUserProfile } from "@/lib/user-storage";

type PersonalDataFormProps = {
  locale: Locale;
};

const emptyForm = {
  email: "",
  name: "",
  age: "",
  gender: "",
  smokingSince: "",
  cigarettesPerDay: "20",
  whyStarted: "",
  quitDate: new Date().toISOString().split("T")[0],
  costPerCigarette: String(DEFAULT_CIGARETTE_PRICE),
};

const genderConfig = [
  { value: "male", labelKey: "male" as const, icon: Mars },
  { value: "female", labelKey: "female" as const, icon: Venus },
];

export function PersonalDataForm({ locale }: PersonalDataFormProps) {
  const router = useRouter();
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    const existing = getUserProfile();
    if (existing) {
      setForm({
        email: existing.email ?? "",
        name: existing.name ?? "",
        age: existing.age ?? "",
        gender: existing.gender ?? "",
        smokingSince: existing.smokingSince ?? "",
        cigarettesPerDay: existing.cigarettesPerDay ?? "20",
        whyStarted: existing.whyStarted ?? "",
        quitDate: existing.quitDate ?? emptyForm.quitDate,
        costPerCigarette:
          existing.costPerCigarette ?? String(DEFAULT_CIGARETTE_PRICE),
      });
    }
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    saveUserProfile(form);
    router.push(`/${locale}/campaign/assessment`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-premium mx-auto w-full max-w-3xl overflow-hidden"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-800 to-emerald-900 px-5 py-6 text-white sm:px-10 sm:py-10">
        <div className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
        <div className="absolute -bottom-8 -start-8 h-32 w-32 rounded-full bg-emerald-400/10" />

        <div className="relative">
          <div className="mb-5 flex items-center gap-2">
            <span className="step-dot step-dot-active" />
            <span className="step-dot" />
            <span className="step-dot" />
          </div>
          <p className="text-sm font-bold uppercase tracking-wider text-teal-200">
            {locale === "en" ? "Step 1 of 3" : "الخطوة 1 من 3"}
          </p>
          <h2 className="mt-2 text-xl font-extrabold sm:text-2xl lg:text-3xl">
            {ct(campaignContent.signup.title, locale)}
          </h2>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-teal-100/90">
            {ct(campaignContent.signup.subtitle, locale)}
          </p>
        </div>
      </div>

      <div className="space-y-6 p-5 sm:space-y-8 sm:p-10">
        <fieldset className="form-section">
          <legend className="form-section-title">
            {ct(campaignContent.signup.sections.personal, locale)}
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="input-label flex items-center gap-2">
                <Mail className="h-5 w-5 text-teal-600" />
                {ct(campaignContent.signup.email, locale)}
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@gmail.com"
                className="input-field"
                dir="ltr"
              />
            </label>

            <label className="block">
              <span className="input-label flex items-center gap-2">
                <User className="h-5 w-5 text-teal-600" />
                {ct(campaignContent.signup.name, locale)}
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="input-field"
              />
            </label>

            <label className="block">
              <span className="input-label flex items-center gap-2">
                <Users className="h-5 w-5 text-teal-600" />
                {ct(campaignContent.signup.age, locale)}
              </span>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
                min={1}
                className="input-field"
              />
            </label>

            <div className="sm:col-span-2">
              <span className="input-label">
                {ct(campaignContent.signup.gender, locale)}
              </span>
              <div className="grid grid-cols-2 gap-3">
                {genderConfig.map(({ value, labelKey, icon: Icon }) => (
                  <label
                    key={value}
                    className={`gender-option ${
                      form.gender === value ? "gender-option-selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={value}
                      checked={form.gender === value}
                      onChange={handleChange}
                      className="sr-only"
                      required
                    />
                    <Icon className="h-5 w-5" />
                    {ct(campaignContent.signup.genderOptions[labelKey], locale)}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="form-section">
          <legend className="form-section-title">
            {ct(campaignContent.signup.sections.smoking, locale)}
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="input-label flex items-center gap-2">
                <Calendar className="h-5 w-5 text-teal-600" />
                {ct(campaignContent.signup.smokingSince, locale)}
              </span>
              <input
                type="text"
                name="smokingSince"
                value={form.smokingSince}
                onChange={handleChange}
                required
                placeholder={locale === "en" ? "e.g. 2018" : "مثال: 2018"}
                className="input-field"
              />
            </label>

            <label className="block">
              <span className="input-label flex items-center gap-2">
                <Cigarette className="h-5 w-5 text-teal-600" />
                {ct(campaignContent.signup.cigarettesPerDay, locale)}
              </span>
              <input
                type="number"
                name="cigarettesPerDay"
                value={form.cigarettesPerDay}
                onChange={handleChange}
                required
                min={1}
                className="input-field"
              />
            </label>

            <label className="block">
              <span className="input-label">
                {ct(campaignContent.signup.costPerCigarette, locale)}
              </span>
              <input
                type="number"
                name="costPerCigarette"
                value={form.costPerCigarette}
                onChange={handleChange}
                min={1}
                step={0.5}
                className="input-field"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="input-label">
                {ct(campaignContent.signup.quitDate, locale)}
              </span>
              <input
                type="date"
                name="quitDate"
                value={form.quitDate}
                onChange={handleChange}
                required
                className="input-field"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="input-label flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-teal-600" />
                {ct(campaignContent.signup.whyStarted, locale)}
              </span>
              <textarea
                name="whyStarted"
                value={form.whyStarted}
                onChange={handleChange}
                required
                rows={4}
                className="input-field min-h-[120px] resize-y"
              />
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="btn-primary flex w-full items-center justify-center py-4 text-lg"
        >
          {ct(campaignContent.signup.submit, locale)}
        </button>
      </div>
    </form>
  );
}
