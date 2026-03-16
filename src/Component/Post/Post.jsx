import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function Post({ post }) {
  const {
    id,
    title,
    content,
    image,
    slug,
    excerpt,
    category,
    author,
    date,
    readTime,
    featured,
    tags,
  } = post;

  return (
    <>
      <div className="bg-[#161616] group border border-[#262626] hover:border-[#333] hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-55 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute border border-[#333333] top-3.5 right-3 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {category}
          </span>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-[#737373] text-[14px] font-normal mb-3">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{readTime}</span>
            </div>
            <span>•</span>
            <span>
              {new Date(date).toLocaleDateString("ar-EG", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h2 className="text-white font-bold text-[20px] leading-snug mb-2 transition-colors duration-300 group-hover:text-[#ff6900]">
            {title}
          </h2>

          <p className="text-[#a1a1a1] text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {excerpt}
          </p>

         
          <div className="border-t border-[#262626] pt-4 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-9 h-9 rounded-full object-cover ring-2 shadow-md ring-[#161616] border-2 border-[#262626]"
                />
                <div>
                  <p className="text-white text-sm font-medium leading-tight">
                    {author.name}
                  </p>
                  <p className="text-[#737373] text-xs font-normal">
                    {author.role}
                  </p>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent cursor-pointer">
                <RiArrowLeftSLine className="text-[#ff6900] group-hover:text-white transition-colors duration-300 text-lg w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
