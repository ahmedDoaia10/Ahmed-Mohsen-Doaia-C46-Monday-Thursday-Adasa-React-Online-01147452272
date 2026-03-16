import React from "react";
import { Link } from "react-router";
import apiResponse from "../../response";
import { FaLinkedinIn, FaGithub, FaPenNib } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  PiBookOpenTextLight,
  PiPenNibLight,
  PiNewspaperLight,
  PiUsersThreeLight,
  PiTargetLight,
  PiHandshakeLight,
  PiLightningLight,
  PiMedalLight,
} from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiSolidBookOpen } from "react-icons/bi";
import { FaNewspaper } from "react-icons/fa6";

export default function AboutUs() {
  const { posts, siteInfo } = apiResponse;

  const authors = [
    ...new Map(posts.map((p) => [p.author.name, p.author])).values(),
  ];

  const stats = [
    {
      icon: <HiMiniUserGroup className="w-8 h-8 text-[#ff6900]" />,
      value: (
        <span className="text-2xl md:text-3xl font-bold gradient-text">
          +2مليون
        </span>
      ),
      label: <span className="text-neutral-500 text-sm">قارئ شهرياً</span>,
    },
    {
      icon: <FaNewspaper className="w-6 h-6 text-[#ff6900]" />,
      value: (
        <span className="text-2xl md:text-3xl font-bold gradient-text">
          +500
        </span>
      ),
      label: <span className="text-neutral-500 text-sm">مقالة منشورة</span>,
    },
    {
      icon: <FaPenNib className="w-6 h-6 text-[#ff6900]" />,
      value: (
        <span className="text-2xl md:text-3xl font-bold gradient-text">
          +50
        </span>
      ),
      label: <span className="text-neutral-500 text-sm">كاتب خبير</span>,
    },
    {
      icon: <BiSolidBookOpen className="w-7 h-7 text-[#ff6900]" />,
      value: (
        <span className="text-2xl md:text-3xl font-bold gradient-text">
          +15
        </span>
      ),
      label: <span className="text-neutral-500 text-sm">تصنيف</span>,
    },
  ];

  const values = [
    {
      icon: <PiMedalLight className="w-11 h-11 text-orange-500" />,
      title: "الجودة أولاً",
      desc: "محتوى مدروس ومكتوب بخبرة",
    },
    {
      icon: <PiLightningLight className="w-11 h-11 text-orange-500" />,
      title: "تركيز عملي",
      desc: "أمثلة واقعية يمكنك تطبيقها اليوم",
    },
    {
      icon: <PiHandshakeLight className="w-11 h-11 text-orange-500" />,
      title: "المجتمع",
      desc: "تعلم مع آلاف المصورين",
    },
    {
      icon: <PiTargetLight className="w-11 h-11 text-orange-500" />,
      title: "دائماً محدث",
      desc: "أحدث الاتجاهات وأفضل الممارسات",
    },
  ];

  return (
    <div dir="rtl" className="w-full bg-[#0a0a0a]">
      {/* ===== Hero + Stats ===== */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-27 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#f973161a] border border-[#f973164d] rounded-full text-sm font-medium text-[#f97316]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-40" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-400/50" />
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              من نحن
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-[#161616cc] hover:scale-105 transition-transform border border-[#262626] rounded-3xl p-4 flex flex-col items-center gap-2"
              >
                {s.icon}
                <p className="text-orange-500 font-black text-3xl">{s.value}</p>
                <p className="text-neutral-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Values ===== */}
      <section className="py-20 bg-[#111111] border-y border-[#262626]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full" />
              قيمنا
              <span className="w-1.5 h-8 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full" />
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex justify-center mb-4">{v.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Teams ===== */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <span className="flex items-center gap-2 px-4 py-2 bg-[#f973161a] border border-[#f973164d] rounded-full text-sm text-[#f97316]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                فريقنا
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              تعرف على كتابنا
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author, i) => (
              <div
                key={i}
                className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="relative inline-block mb-4">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-white text-lg">{author.name}</h3>
                <p className="text-orange-500 text-sm font-medium mb-4">
                  {author.role}
                </p>
                <div className="flex justify-center gap-3">
                  <button className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
                    <FaXTwitter className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors cursor-pointer">
                    <FaGithub className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                    <FaLinkedinIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact Us ===== */}
      <section
        className="w-full bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden"
       
      >
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={`mailto:${siteInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MdOutlineEmail className="w-5 h-5" />
              تواصل معنا
            </a>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
