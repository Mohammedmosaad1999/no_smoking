"use client";

import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-12 text-center font-sans">
      <div className="max-w-md space-y-6">
        <h1 className="text-8xl font-extrabold text-teal-800">404</h1>
        <h2 className="text-3xl font-bold text-slate-800">Page Not Found</h2>
        <h2 className="text-2xl font-bold text-slate-700">الصفحة غير موجودة</h2>
        <p className="text-slate-600">
          The page you are looking for does not exist. / الصفحة التي تبحث عنها غير موجودة.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Link href="/en" className="btn-primary">
            English Home
          </Link>
          <Link href="/ar" className="btn-secondary">
            الرئيسية بالعربية
          </Link>
        </div>
      </div>
    </div>
  );
}
