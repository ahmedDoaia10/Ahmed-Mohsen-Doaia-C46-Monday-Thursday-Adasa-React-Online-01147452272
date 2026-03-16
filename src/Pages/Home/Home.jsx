import React from "react";
import { Link } from "react-router";
import apiResponse from "../../response";
import { RiArrowLeftLongLine, RiArrowLeftSLine } from "react-icons/ri";
import { LuClock, LuCalendar } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import {
  PiPenNibLight,
  PiStackLight,
  PiGearLight,
  PiMountainsLight,
  PiUserLight,
} from "react-icons/pi";
import { TbInfoCircle } from "react-icons/tb";
import { FaFolderOpen } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaNewspaper } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Home() {
  const { posts, categories } = apiResponse;
  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const categoryIcons = {
    إضاءة: <PiGearLight className="w-8 h-8 text-orange-500" />,
    بورتريه: <PiUserLight className="w-8 h-8 text-orange-500" />,
    "مناظر طبيعية": <PiMountainsLight className="w-8 h-8 text-orange-500" />,
    تقنيات: <PiStackLight className="w-8 h-8 text-orange-500" />,
    معدات: <PiGearLight className="w-8 h-8 text-orange-500" />,
  };

  return (
    <div dir="rtl" className="w-full bg-[#0a0a0a]">
      {/* ===== Hero ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-96 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#f973161a] border border-[#f973164d] rounded-full text-sm text-[#d4d4d4] mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-40" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-400/50" />
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            مرحباً بك في عدسة
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            اكتشف <span className="gradient-text">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 ">
            <Link
              to="/blog"
              className="btn-primary inline-flex items-center justify-center gap-2 group translate-y-0 hover:-translate-y-0.5 transition-transform text-[16px]! "
            >
              استكشف المقالات
              <RiArrowLeftLongLine className="w-5 h-5 group-hover:-translate-x-1 transition-transform  " />
            </Link>
            <Link
              to="/aboutus"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <TbInfoCircle className="w-5 h-5" />
              اعرف المزيد
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-8 mb-22 w-full max-w-2xl ">
            {[
              {
                icon: <FaNewspaper className="w-7 h-7 text-[#ff6900]" />,
                value: (
                  <span className="text-2xl md:text-3xl font-bold gradient-text">
                    +50
                  </span>
                ),
                label: <span className="text-neutral-500 text-sm">مقالة</span>,
              },
              {
                icon: <HiMiniUserGroup className="w-8 h-8 text-[#ff6900]" />,
                value: (
                  <span className="text-2xl md:text-3xl font-bold gradient-text">
                    +10ألف
                  </span>
                ),
                label: <span className="text-neutral-500 text-sm ">قارئ</span>,
              },
              {
                icon: <FaFolderOpen className="w-7 h-7 text-[#ff6900]" />,
                value: (
                  <span className="text-2xl md:text-3xl font-bold gradient-text">
                    4
                  </span>
                ),
                label: (
                  <span className="text-neutral-500 text-sm">تصنيفات</span>
                ),
              },
              {
                icon: <FaPenNib className="w-7 h-7 text-[#ff6900]" />,
                value: (
                  <span className="text-2xl md:text-3xl font-bold gradient-text">
                    6
                  </span>
                ),
                label: <span className="text-neutral-500 text-sm">كاتب</span>,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#161616cc] hover:scale-105 transition-transform border border-[#262626] rounded-3xl p-4 flex flex-col items-center gap-2"
              >
                {stat.icon}
                <p className="text-orange-500 font-black text-xl">
                  {stat.value}
                </p>
                <p className="text-[#555] text-xs ">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured Posts ===== */}
      <section className="w-full px-6 py-20 relative bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between mb-10">
            <div className="text-right">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center gap-2 px-4 py-2 bg-[#f973161a] border border-[#f973164d] rounded-full text-sm font-medium text-[#f97316]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-40" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-400/40" />
                  </span>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500" />
                  </span>
                  مميز
                </span>
              </div>
              <h2 className="text-white text-6xl font-bold">مقالات مختارة</h2>
              <p className="section-subtitle">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>

            <Link
              to="/blog"
              className="group inline-flex items-center mt-27 gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              عرض الكل
              <RiArrowLeftLongLine className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.id} to={`/blogdetails/${post.slug}`}>
                <div className="group bg-[#161616] min-h-100 border border-[#222] hover:border-orange-500/20 rounded-3xl overflow-hidden flex flex-row-reverse transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold px-3 py-1.5 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-[#737373] text-sm">
                          <LuClock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-white text-[30px] font-bold leading-snug mb-3 group-hover:text-orange-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[#a1a1a1] text-[16px] font-normal  leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full object-cover ring-2 shadow-md ring-[#161616] border-2 border-[#262626]"
                          />
                          <span className="w-4 h-4 absolute bottom-0 left-0 bg-orange-500 rounded-full border-2 border-[#161616]" />
                        </div>
                        <div className="text-right">
                          <p className="text-white text-sm font-semibold">
                            {post.author.name}
                          </p>
                          <p className="text-[#737373] text-xs flex items-center gap-1">
                            {new Date(post.date).toLocaleDateString("ar-EG", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>

                      <span className="flex items-center gap-2  text-orange-500 text-sm font-bold">
                        <span className="group-hover:translate-x-1 transition-transform ">
                          اقرأ المقال
                        </span>
                        <RiArrowLeftLongLine className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                  <div className="relative w-1/2 shrink-0 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    <span className="absolute top-4 right-4 flex items-center gap-1.5 px-4 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold    rounded-full">
                      <FaStar className="w-3 h-3 fill-white" />
                      مميز
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Categories ===== */}
      <section className="w-full py-20 border-y border-[#262626] bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-5">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#f973161a] border border-[#f973164d] rounded-full text-sm font-medium text-[#f97316]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-40" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-400/50" />
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <span className="mr-2">التصنيفات</span>
              </div>
            </div>
            <h2 className="text-white text-6xl font-bold mb-7">
              استكشف حسب الموضوع
            </h2>
            <p className="text-[#a1a1a1] font-normal text-[18px] ">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.name} to={`/blog?category=${cat.name}`}>
                <div className="bg-[#161616] border border-[#222] hover:border-transparent rounded-2xl p-6 flex flex-col items-start gap-3 text-right group transition-all hover:-translate-y-1 duration-300 cursor-pointer relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 w-14 h-14 bg-orange-500/10 border border-orange-500/20 group-hover:text-white group-hover:bg-white/20 group-hover:border-transparent rounded-xl flex items-center justify-center transition-colors">
                    {categoryIcons[cat.name] || (
                      <PiStackLight className="w-8 h-8 text-orange-500 group-hover:text-white " />
                    )}
                  </div>
                  <p className="relative z-10 text-white font-bold text-[18px] -mb-2 mt-1">
                    {cat.name}
                  </p>
                  <p className="relative z-10 text-[#737373] group-hover:text-white/80 text-sm font-normal">
                    {cat.count} مقالة
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Latest Posts ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-start justify-between mb-10">
          <div className="text-right">
            <div className="flex justify-start mb-5">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#f973161a] border border-[#f973164d] rounded-full text-sm font-medium text-[#f97316]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-40" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-400/50" />
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <span className="mr-2">الأحدث</span>
              </div>
            </div>
            <h2 className="text-white text-6xl font-bold">أحدث المقالات</h2>
            <p className="text-[#a1a1a1] text-[18px] font-normal mt-5">
              محتوى جديد طازج من المطبعة
            </p>
          </div>

          <Link
            to="/blog"
            className="flex items-center gap-2 mt-33 text-orange-500 hover:text-orange-400 transition-colors text-[16px] font-semibold  group"
          >
            عرض جميع المقالات
            <RiArrowLeftLongLine className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link key={post.id} to={`/blogdetails/${post.slug}`}>
              <div className="bg-[#161616] group border border-[#262626] hover:border-[#333] hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-55 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute border border-[#333333] top-3.5 right-3 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[#737373] text-[14px] font-normal mb-3">
                    <div className="flex items-center gap-1">
                      <LuClock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>•</span>
                    <span>
                      {new Date(post.date).toLocaleDateString("ar-EG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-white font-bold text-[20px] leading-snug mb-2 transition-colors duration-300 group-hover:text-[#ff6900]">
                    {post.title}
                  </h2>
                  <p className="text-[#a1a1a1] text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="border-t border-[#262626] pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-9 h-9 rounded-full object-cover ring-2 shadow-md ring-[#161616] border-2 border-[#262626]"
                        />
                        <div>
                          <p className="text-white text-sm font-medium leading-tight">
                            {post.author.name}
                          </p>
                          <p className="text-[#737373] text-xs font-normal">
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-transparent transition-all duration-300">
                        <RiArrowLeftSLine className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Newsletter ===== */}
      <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
            <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MdOutlineEmail className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في <span className="gradient-text">نشرتنا الإخبارية</span>
            </h2>

            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder:text-neutral-500 transition-colors text-right"
              />
              <button className="px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 cursor-pointer shrink-0">
                اشترك الآن
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 space-x-reverse">
                  {posts.slice(0, 3).map((p, i) => (
                    <img
                      key={i}
                      src={p.author.avatar}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover border-2 border-[#161616]"
                    />
                  ))}
                </div>
                <span>
                  انضم لـ{" "}
                  <span className="text-white font-medium">+10,000</span> مصور
                </span>
              </div>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>بدون ازعاج</span>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>الغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
