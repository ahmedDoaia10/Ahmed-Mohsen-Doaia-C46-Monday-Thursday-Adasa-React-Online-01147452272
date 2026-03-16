import React from "react";
import { Link } from "react-router";
import { FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import apiResponse from "../../response";

export default function Footer() {
  const { siteInfo, categories } = apiResponse;

  return (
    <footer dir="rtl" className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                style={{ boxShadow: "rgba(249, 115, 22, 0.3) 0px 4px 20px" }}>
                <span className="text-white font-bold text-xl">ع</span>
              </div>
              <span className="text-xl font-bold text-white">عدسة</span>
            </Link>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="flex gap-2">
              {[
                { href: siteInfo.social.twitter, icon: <FaXTwitter className="w-5 h-5" /> },
                { href: siteInfo.social.github, icon: <FaGithub className="w-5 h-5" /> },
                { href: siteInfo.social.linkedin, icon: <FaLinkedinIn className="w-5 h-5" /> },
                { href: siteInfo.social.youtube, icon: <FaYoutube className="w-5 h-5" /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/*  Explore */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
              استكشف
            </h3>
            <ul className="space-y-4">
              {[
                { name: "الرئيسية", path: "/" },
                { name: "المدونة", path: "/blog" },
                { name: "من نحن", path: "/aboutus" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path}
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                    <svg className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
              التصنيفات
            </h3>
            <ul className="space-y-4">
              {categories.map((c) => (
                <li key={c.name}>
                  <Link to={`/blog?category=${c.name}`}
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                    <svg className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Informed */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
              ابقى على اطلاع
            </h3>
            <p className="text-sm text-neutral-500 mb-4">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-3 group bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder:text-neutral-600 text-right"
              />
              <button className="btn-primary text-white! w-full text-sm group-hover:-translate-x-1 transition-transform font-semibold  bg-linear-to-r from-orange-500 to-orange-600  duration-300 ">
                اشترك
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-600 flex items-center gap-1">
              © 2026 عدسة. صنع بكل <span className="text-orange-500">🧡</span> جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300">سياسة الخصوصية</Link>
              <Link to="/terms" className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300">شروط الخدمة</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}