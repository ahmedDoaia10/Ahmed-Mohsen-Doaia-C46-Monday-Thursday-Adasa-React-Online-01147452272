import React, { useRef } from "react";
import apiResponse from "../../response";
import Post from "../../Component/Post/Post";
import { useState } from "react";
import {
  RiMenuLine,
  RiLayoutGridFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { TbRefresh } from "react-icons/tb";
import { PiBookOpenTextLight } from "react-icons/pi";
import { Link, useSearchParams } from "react-router";

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const payload = apiResponse;
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "all",
  );
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = payload.posts.filter((p) => {
    const matchCategory = category === "all" || p.category === category;
    const matchSearch = p.title.includes(search) || p.excerpt.includes(search);
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const postsRef = useRef(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setTimeout(() => {
      const offset =
        postsRef.current?.getBoundingClientRect().top + window.scrollY - 250;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }, 0);
  };
  return (
    <div dir="rtl" className="w-full">
      {/* Hero */}
      <div className="relative w-full py-20 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />
        
        <div className="absolute top-0 left-96 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="absolute bottom-0 right-96 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <div className="flex items-center gap-2 bg-[#f973161a] border border-[#f973164d] rounded-full px-4 py-2 text-sm text-[#f97316]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500" />
            </span>
            <PiBookOpenTextLight className="w-4 h-4" />
            <span>مدونتنا</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white ">
            <span className="text-white">استكشف </span>
            <span className="gradient-text">مقالاتنا</span>
          </h1>
          <p className="text-[#a1a1a1] text-xl font-normal max-w-xl">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>
      {/* Filter Bar + Sticky */}
      <div className="sticky top-20 z-30 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#222]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search */}
          <div className="input-dark flex items-center gap-2 bg-[#161616] border border-[#262626] rounded-xl py-3 px-4 w-full md:min-w-65 md:w-auto">
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-transparent text-white text-sm outline-none w-full placeholder:text-[#737373] text-right"
            />
            <IoIosSearch className="text-[#737373] w-5 h-5 shrink-0" />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => {
                setCategory("all");
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer
          ${
            category === "all"
              ? "bg-linear-to-r from-orange-500 to-orange-600 text-white border-transparent"
              : "bg-[#161616] text-[#a1a1a1] border-[#262626] hover:border-[#ff6900] hover:text-white"
          }`}
            >
              جميع المقالات
            </button>
            {payload.categories.map((c) => (
              <button
                key={c.name}
                onClick={() => {
                  setCategory(c.name);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer
            ${
              category === c.name
                ? "bg-linear-to-r from-orange-500 to-orange-600 text-white border-transparent"
                : "bg-[#161616] text-[#a1a1a1] border-[#262626] hover:border-[#ff6900]"
            }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts + Pagination */}
      <div className="max-w-6xl mx-auto px-6 py-10 w-full">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-[#a1a1a1] text-[16px] font-normal">
            عرض{" "}
            <span className="text-white font-extrabold">
              {filteredPosts.length}
            </span>{" "}
            مقالات
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 cursor-pointer
              ${view === "grid" ? "bg-[#FF6900] border-transparent text-white" : "bg-[#111] border-[#333] text-[#666] hover:text-white"}`}
            >
              <RiLayoutGridFill className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 cursor-pointer
              ${view === "list" ? "bg-orange-500 border-transparent text-white" : "bg-[#111] border-[#333] text-[#666] hover:text-white"}`}
            >
              <RiMenuLine className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Posts */}
        <div ref={postsRef}>
          {filteredPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <div className="w-24 h-24 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center mb-2">
                <HiOutlineEmojiSad className="text-4xl text-[#737373] w-12 h-12" />
              </div>
              <h3 className="text-white text-[24px] font-extrabold">
                لا توجد مقالات
              </h3>
              <p className="text-[#a1a1a1] text-[16px] font-normal">
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </p>
              <button
                onClick={() => {
                  setCategory("all");
                  setSearch("");
                  setCurrentPage(1);
                }}
                className="flex items-center gap-2 bg-linear-to-r from-[#f97316] to-[#ea580c] text-white px-10 py-4 rounded-full text-[16px] font-semibold transition-colors duration-200 mt-2 cursor-pointer"
              >
                <TbRefresh className="w-5 h-5" />
                <span>إعادة تعيين الفلاتر</span>
              </button>
            </div>
          ) : (
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
                  : "flex flex-col gap-4"
              }
            >
              {paginatedPosts.map((post) => (
                <Link key={post.id} to={`/blogdetails/${post.slug}`}>
                  <Post post={post} />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && filteredPosts.length > 0 && (
          <div className="flex flex-col items-center gap-4 mt-10">
            <div dir="ltr" className="flex items-center gap-2">
              <button
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#161616] border border-[#262626] text-white  hover:border-[#ff6900] transition-all disabled:opacity-30  disabled:cursor-not-allowed cursor-pointer"
              >
                <RiArrowLeftSLine className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .reverse()
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-11 h-11 rounded-xl cursor-pointer flex items-center justify-center text-sm font-semibold border transition-all duration-200
            ${
              currentPage === page
                ? "bg-linear-to-r from-orange-500 to-orange-600 border-transparent text-white"
                : "bg-[#161616] text-[#a1a1a1] border-[#262626] hover:border-[#ff6900] hover:text-white"
            }`}
                  >
                    {page}
                  </button>
                ))}

              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#161616] border border-[#262626] text-white   hover:border-[#ff6900]   transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <RiArrowRightSLine className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[#737373] text-sm">
              صفحة{" "}
              <span className="text-[#737373] font-normal">{currentPage}</span>{" "}
              من{" "}
              <span className="text-[#737373] font-normal">{totalPages}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
