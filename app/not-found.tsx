import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-extrabold text-[#5C7A3E]">404</h1>
      <p className="text-gray-600 my-4 text-sm">Page Not Found / الصفحة غير موجودة</p>
      <Link href="/" className="px-6 py-2.5 bg-[#5C7A3E] text-white text-xs font-bold rounded-lg uppercase tracking-wider">Go Home / العودة للرئيسية</Link>
    </div>
  );
}
