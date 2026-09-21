'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HeartIcon, EyeIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  if (!product) return null;

  const { title, price, image } = product;

  const handleLike = (e) => {
    setLiked(!liked);
  };

  return (
    <div className="group relative w-full max-w-[260px] mx-auto bg-gradient-to-b from-white via-main-1000/20 to-main-900/10 border border-main-300/15 rounded-2xl overflow-hidden shadow-md shadow-main-300/10 hover:shadow-2xl hover:shadow-main-400/25 hover:border-main-500/40 hover:-translate-y-1.5 transition-all duration-500 ease-out cursor-pointer">

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-main-900/20 via-main-800/10 to-main-700/20">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 260px"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Navy gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-main-100/50 via-main-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Shine sweep */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* ❤️ Like Button - top left corner */}
        <button
          onClick={handleLike}
          aria-label="افزودن به علاقه‌مندی‌ها"
          className={`absolute top-2.5 left-2.5 z-20 w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-md border transition-all duration-300 cursor-pointer active:scale-90 ${
            liked
              ? 'bg-main-500 border-main-500 text-white shadow-lg shadow-main-500/40'
              : 'bg-white/80 border-white/60 text-main-500 hover:bg-white hover:border-main-300 hover:scale-110'
          }`}
        >
          {liked ? (
            <HeartSolid className="w-3.5 h-3.5" />
          ) : (
            <HeartIcon className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Info */}
      <div className="relative p-3 sm:p-3.5 text-center bg-gradient-to-b from-transparent to-main-1000/30">
        {/* Divider accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-main-500 to-transparent group-hover:w-16 transition-all duration-500" />

        <h3 className="text-xs sm:text-sm font-bold text-main-100 mb-1.5 line-clamp-1 group-hover:text-main-500 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm sm:text-base font-persianNumber font-black text-transparent bg-clip-text bg-gradient-to-l from-main-100 via-main-400 to-main-700 mb-3">
          {price}
          <span className="text-[10px] font-semibold text-main-400 mr-1">تومان</span>
        </p>

        {/* 👁 مشاهده Button */}
        <Link 
          href={'/products'}
          className="group/btn relative w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-l from-main-100 to-main-400 text-white text-xs font-bold rounded-lg shadow-md shadow-main-400/25 hover:shadow-lg hover:shadow-main-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-1.5">
            <EyeIcon className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform duration-300" />
            مشاهده
          </span>
          <div className="absolute inset-0 bg-gradient-to-l from-main-300 to-main-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>

      {/* Colored inner ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-main-500/0 group-hover:ring-main-500/30 transition-all duration-500" />
    </div>
  );
}