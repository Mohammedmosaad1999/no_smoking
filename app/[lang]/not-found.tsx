"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function LocalizedNotFound() {
  const params = useParams();
  const lang = (params?.lang as string) || "en";
  const isAr = lang === "ar";

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center font-sans">
      <div className="max-w-md space-y-6">
        <h1 className="text-7xl font-extrabold text-teal-900">404</h1>
        <h2 className="text-2xl font-bold text-slate-800">
          {isAr ? "عذراً، الصفحة غير موجودة!" : "Oops! Page not found"}
        </h2>
        <p className="text-slate-600">
          {isAr
            ? "لم نتمكن من العثور على الصفحة التي تبحث عنها. قد تكون تم نقلها أو حذفها."
            : "We couldn't find the page you are looking for. It might have been moved or deleted."}
        </p>
        <Link href={`/${lang}`} className="btn-primary inline-flex mt-6">
          {isAr ? "العودة للرئيسية" : "Back to Home"}
        </Link>
      </div>
    </div>
  );
}
