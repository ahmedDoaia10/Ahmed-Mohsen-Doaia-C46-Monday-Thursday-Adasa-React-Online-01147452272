import React from "react";
import { useParams, Link } from "react-router";
import apiResponse from "../../response";
import { PiHouseBold, PiCameraLight, PiTagLight } from "react-icons/pi";
import { RiArrowLeftSLine, RiShareLine, RiFileCopyLine } from "react-icons/ri";
import { LuClock, LuCalendar } from "react-icons/lu";
import { FaWhatsapp, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { RiArrowLeftLongLine } from "react-icons/ri";

export default function BlogDetails() {
  const payload = apiResponse;
  let { slug } = useParams();
  const element = payload.posts.find((e) => e.slug === slug);
  const {
    id,
    title,
    content,
    image,
    category,
    author,
    date,
    readTime,
    tags,
    excerpt,
  } = element;

  const sections = content.split("\n\n").filter(Boolean);
  const headings = sections
    .filter((s) => s.startsWith("## "))
    .map((s, i) => ({ id: `section-${i}`, title: s.replace("## ", "") }));

  const related = payload.posts
    .filter((p) => p.category === category && p.id !== id)
    .slice(0, 3);

  return (
    <div dir="rtl" className="w-full bg-[#0a0a0a]">
      {/* Hero Section */}
      <div className="relative w-full h-screen max-h-137.5 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute top-8 right-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
            <Link
              to="/"
              className="text-white/85 hover:text-white transition-colors"
            >
              <PiHouseBold className="w-4 h-4" />
            </Link>
            <RiArrowLeftSLine className="text-white/40 w-5 h-5" />
            <Link
              to="/blog"
              className="text-white/85 hover:text-white transition-colors font-normal text-sm"
            >
              المدونة
            </Link>
            <RiArrowLeftSLine className="text-white/40 w-5 h-5" />
            <span className="text-orange-400 font-medium text-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 items-start">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-4">
              <Link to={`/blog?category=${category}`}>
                <span className="bg-orange-500 hover:bg-orange-600 transition-colors cursor-pointer text-white text-[14px] font-bold py-2 px-4 rounded-full">
                  {category}
                </span>
              </Link>
              <div className="flex items-center gap-1.5 text-white/80 text-sm">
                <LuCalendar className="w-4 h-4" />
                <span>
                  {new Date(date).toLocaleDateString("ar-EG", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-white/80 text-sm">
                <LuClock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
            <h1 className="text-white text-[60px] font-bold leading-tight mb-6 max-w-4xl">
              {title}
            </h1>
            <div className="flex items-center gap-4 p-5 bg-[#252626]/50 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
              />
              <div>
                <p className="text-white font-bold text-[16px]">
                  {author.name}
                </p>
                <p className="text-white/60 text-[14px] font-normal">
                  {author.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-6xl mx-auto px-6 py-12">
  
        <div className="flex gap-8 items-start">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Excerpt */}
            <div className="bg-linear-to-r from-orange-500/10 to-yellow-500/5 border border-orange-500/20 rounded-2xl p-6 mb-10">
              <p className="text-[#e5e5e5] text-[18px] italic leading-relaxed text-right">
                "{excerpt}"
              </p>
            </div>

            {/* Content Sections */}
            <div className="flex flex-col gap-8">
              {sections.map((section, i) => {
                if (section.startsWith("## ")) {
                  const headingTitle = section.replace("## ", "");
                  const headingIndex = headings.findIndex(
                    (h) => h.title === headingTitle,
                  );
                  return (
                    <h2
                      key={i}
                      id={
                        headingIndex >= 0
                          ? headings[headingIndex].id
                          : undefined
                      }
                      className="flex items-center justify-start gap-3 text-white text-3xl font-bold mt-4 scroll-mt-28"
                    >
                      <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center shrink-0">
                        <PiCameraLight className="w-9 h-9 text-[#ff6900]" />
                      </div>
                      {headingTitle}
                    </h2>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-[#d4d4d4] text-[18px] font-normal leading-relaxed text-right"
                  >
                    {section}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-14 bg-[#111111] border border-[#262626] rounded-2xl px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-[16px] shrink-0">
                  <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center">
                    <PiTagLight className="w-6 h-6 text-orange-500" />
                  </div>
                  <span>الوسوم</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#1a1a1a] hover:border-orange-500/50 border border-[#262626] text-[#a1a1a1] hover:text-[#ff6900] cursor-pointer transition-all text-sm font-normal px-4 py-2 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="mt-6 bg-[#111111] border border-[#262626] rounded-2xl px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-[16px] shrink-0">
                  <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center">
                    <RiShareLine className="w-6 h-6 text-orange-500" />
                  </div>
                  <span>شارك المقال</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-11 h-11 bg-[#1a1a1a] hover:bg-[#1da1f2] border border-[#262626] hover:border-transparent rounded-xl flex items-center justify-center text-[#a1a1a1] hover:text-white transition-all cursor-pointer">
                    <FaXTwitter className="w-4 h-4" />
                  </button>
                  <button className="w-11 h-11 bg-[#1a1a1a] hover:bg-[#0077B5] border border-[#262626] hover:border-transparent rounded-xl flex items-center justify-center text-[#a1a1a1] hover:text-white transition-all cursor-pointer">
                    <FaLinkedinIn className="w-4 h-4" />
                  </button>
                  <button className="w-11 h-11 bg-[#1a1a1a] hover:bg-[#25d366] border border-[#262626] hover:border-transparent rounded-xl flex items-center justify-center text-[#a1a1a1] hover:text-white transition-all cursor-pointer">
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                  <button className="w-11 h-11 bg-[#1a1a1a] hover:bg-[#ff6900] border border-[#262626] hover:border-transparent rounded-xl flex items-center justify-center text-[#a1a1a1] hover:text-white transition-all cursor-pointer">
                    <RiFileCopyLine className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Author Card */}
            <div className="mt-6 bg-linear-to-br to-[#111111] from-[#161616] border border-[#262626] rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20 shrink-0"
                />
                <div className="text-right">
                  <p className="text-[#f97200] text-xs font-semibold mb-1">
                    كاتب المقال
                  </p>
                  <p className="text-white font-bold text-[20px]">
                    {author.name}
                  </p>
                  <p className="text-[#737373] text-sm mb-3">{author.role}</p>
                  <p className="text-[#a1a1a1] text-sm leading-relaxed">
                    مصور محترف بشغوف بمشاركة المعرفة والخبرات في عالم التصوير
                    الفوتوغرافي.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  Main Content */}

          {/* Sidebar */}
          <div className="hidden lg:flex flex-col gap-4 w-72 shrink-0 sticky top-24 self-start">
            {/* Table of Contents */}
            <div className="bg-[#111111] border border-[#262626] rounded-2xl p-5">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <IoBookOutline className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-white font-bold text-[17px]">
                  محتويات المقال
                </h3>
              </div>

              {/* List */}
              <ul className="flex flex-col gap-2">
                {headings.map((h, i) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(h.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#a1a1a1] bg-linear-to-r hover:bg-orange-500/5 hover:text-orange-600 transition-all text-sm group"
                    >
                      <span className="w-8 h-8 bg-[#1a1a1a] group-hover:bg-orange-500/5 border border-[#262626] group-hover:border-orange-500/20 rounded-lg flex items-center justify-center text-xs text-[#737373] group-hover:text-orange-600 font-bold shrink-0 transition-all">
                        {i + 1}
                      </span>
                      <span className="text-right flex-1">{h.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Date + Read Time */}
            <div className="bg-[#111111] border border-[#262626] rounded-2xl p-5 grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2 bg-[#0a0a0a]   rounded-xl p-4">
                <LuClock className="w-5 h-5 text-orange-500" />
                <p className="text-white font-semibold text-sm text-center -mb-2">
                  {readTime}
                </p>
                <p className="text-[#737373] text-xs font-normal">
                  وقت القراءة
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-[#0a0a0a]   rounded-xl p-4">
                <LuCalendar className="w-5 h-5 text-orange-500  " />
                <p className="text-white font-semibold text-sm text-center -mb-2">
                  {new Date(date).toLocaleDateString("ar-EG", {
                    day: "numeric",
                    month: "long",
                  })}
                </p>
                <p className="text-[#737373] text-xs font-normal">
                  تاريخ النشر
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-linear-to-br from-orange-500/10 to-yellow-500/5 border border-orange-500/20 rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                <MdOutlineEmail className="w-6 h-6 text-[#ff6900]" />
              </div>
              <h3 className="text-white font-bold text-[16px] -mb-1">
                لا تفوّت جديدنا
              </h3>
              <p className="text-[#a1a1a1] text-sm font-normal mb-1">
                اشترك للحصول على أحدث المقالات
              </p>
              <Link
                to="/blog"
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white text-[16px] font-semibold py-3 rounded-xl w-full text-center"
              >
                تصفح المزيد
              </Link>
            </div>
          </div>
          
        </div>
        

        {/* Separator + Related Posts */}
        {related.length > 0 && (
          <div>
            <div className="mt-14 mb-14 border-t border-[#262626]" />
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center">
                  <AiOutlinePicture className="w-7 h-7 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-[24px] text-right">
                    مقالات قد تعجبك
                  </h2>
                  <p className="text-[#737373] text-sm font-normal text-right">
                    استكشف المزيد من المحتوى المميز
                  </p>
                </div>
              </div>
              <Link
                to="/blog"
                className="flex items-center gap-1 text-orange-500 hover:text-orange-400 text-sm transition-colors"
              >
                <span>عرض الكل</span>
                <RiArrowLeftLongLine className="w-5 h-5 " />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4">
              {related.map((post) => (
                <Link
                  key={post.id}
                  to={`/blogdetails/${post.slug}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <div className="bg-[#111] group border border-[#262626] hover:border-orange-500/20 hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-45 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-[#0a0a0a]/50 to-transparent opacity-100  transition-opacity duration-500" />

                      <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-white font-bold text-[17px] leading-snug mb-4 group-hover:text-orange-500 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-[#a1a1a1] text-sm">
                            {post.author.name}
                          </span>
                        </div>
                        <span className="text-[#737373] text-sm">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
