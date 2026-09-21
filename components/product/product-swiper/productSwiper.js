"use client";

import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import ProductCard from "../productCart/productCart";

export default function ProductSwiper() {
  const products = [
    {
      id: 1,
      title: "عطر لوکس ولیوت",
      price: "۲,۴۵۰,۰۰۰",
      image: "/images/1.jpg",
    },
    {
      id: 2,
      title: "ساعت کلاسیک مردانه",
      price: "۸,۹۰۰,۰۰۰",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      title: "کیف چرم دست‌دوز",
      price: "۳,۲۰۰,۰۰۰",
      image: "/images/3.jpg",
    },
    {
      id: 4,
      title: "عینک آفتابی لوکس",
      price: "۱,۸۰۰,۰۰۰",
      image: "/images/4.jpg",
    },
    {
      id: 5,
      title: "دستبند طلا",
      price: "۵,۶۰۰,۰۰۰",
      image: "/images/5.jpg",
    },
    {
      id: 6,
      title: "گردنبند نقره",
      price: "۲,۹۰۰,۰۰۰",
      image: "/images/3.jpg",
    },
    {
      id: 7,
      title: "کفش چرم مردانه",
      price: "۴,۷۰۰,۰۰۰",
      image: "/images/5.jpg",
    },
    {
      id: 8,
      title: "شال ابریشم",
      price: "۱,۲۰۰,۰۰۰",
      image: "/images/2.jpg",
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-16">
      <Swiper
        dir="rtl"
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={16}
        slidesPerView={1.15}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 16,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 18,
          },

          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 22,
          },

          1280: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
        className="product-swiper !px-4 !pb-14 !pt-10 md:!px-8"
      >
        {/* Background Title */}
        <div className="swiper-background-title">
          <span>جدیدترین محصولات</span>
        </div>

        {products.map((product) => (
          <SwiperSlide key={product.id} className="!h-auto">
            <div className="overflow-hidden rounded-2xl bg-white w-65 mx-auto">
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* ================================
           Main Background
        ================================= */

        .product-swiper {
          position: relative;
          overflow: hidden;

          background: var(--color-main-100);

          border-radius: 24px;
        }

        /* ================================
           Moving Stars
        ================================= */

        .product-swiper::before {
          content: "";

          position: absolute;
          inset: 0;

          pointer-events: none;

          z-index: 0;

          background-image:
            radial-gradient(
              circle,
              var(--color-main-1000) 1px,
              transparent 1.5px
            ),
            radial-gradient(
              circle,
              var(--color-main-900) 1px,
              transparent 1.5px
            ),
            radial-gradient(
              circle,
              white 1px,
              transparent 1.5px
            );

          background-size:
            55px 55px,
            85px 85px,
            120px 120px;

          background-position:
            10px 20px,
            30px 5px,
            70px 40px;

          opacity: 0.65;

          animation: starsMove 22s linear infinite;
        }

        /* ================================
           Stars Movement
        ================================= */

        @keyframes starsMove {
          0% {
            background-position:
              10px 20px,
              30px 5px,
              70px 40px;
          }

          25% {
            background-position:
              30px 45px,
              55px 30px,
              95px 65px;
          }

          50% {
            background-position:
              55px 70px,
              85px 55px,
              125px 90px;
          }

          75% {
            background-position:
              80px 45px,
              110px 80px,
              155px 55px;
          }

          100% {
            background-position:
              105px 20px,
              140px 5px,
              185px 40px;
          }
        }

        /* ================================
           Glowing Stars
        ================================= */

        .product-swiper::after {
          content: "";

          position: absolute;
          inset: 0;

          pointer-events: none;

          z-index: 1;

          background-image:
            radial-gradient(
              circle at 12% 22%,
              white 0,
              white 2px,
              transparent 5px
            ),
            radial-gradient(
              circle at 35% 70%,
              var(--color-main-1000) 0,
              var(--color-main-1000) 2px,
              transparent 5px
            ),
            radial-gradient(
              circle at 62% 18%,
              white 0,
              white 2px,
              transparent 5px
            ),
            radial-gradient(
              circle at 88% 65%,
              var(--color-main-900) 0,
              var(--color-main-900) 2px,
              transparent 5px
            );

          animation: starsGlow 3.5s ease-in-out infinite alternate;
        }

        /* ================================
           Stars Glow
        ================================= */

        @keyframes starsGlow {
          0% {
            opacity: 0.3;
          }

          50% {
            opacity: 0.7;
          }

          100% {
            opacity: 1;
          }
        }

        /* ================================
           Title
        ================================= */

        .swiper-background-title {
          position: absolute;

          top: 25px;
          left: 0;
          right: 0;

          z-index: 2;

          display: flex;
          justify-content: center;

          pointer-events: none;
        }

        .swiper-background-title span {
          color: white;

          font-size: 24px;
          font-weight: 800;

          text-shadow:
            0 0 8px rgba(255, 255, 255, 0.35),
            0 0 20px color-mix(
              in srgb,
              var(--color-main-900) 45%,
              transparent
            );
        }

        /* ================================
           Slides
        ================================= */

        .product-swiper .swiper-wrapper {
          position: relative;

          z-index: 3;

          padding-top: 45px;
        }

        /* ================================
           Pagination
        ================================= */

        .swiper-pagination {
          bottom: 8px !important;

          z-index: 5;
        }

        .swiper-pagination-bullet {
          width: 7px;
          height: 7px;

          opacity: 1;

          background: var(--color-main-800);

          transition:
            width 0.3s ease,
            background 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 25px;

          border-radius: 9999px;

          background: var(--color-main-400);

          box-shadow:
            0 0 8px var(--color-main-700),
            0 0 15px var(--color-main-800);
        }

        /* ================================
           Mobile
        ================================= */

        @media (max-width: 640px) {
          .swiper-background-title {
            top: 18px;
          }

          .swiper-background-title span {
            font-size: 20px;
          }

          .product-swiper .swiper-wrapper {
            padding-top: 38px;
          }
        }

        /* ================================
           Reduced Motion
        ================================= */

        @media (prefers-reduced-motion: reduce) {
          .product-swiper::before,
          .product-swiper::after {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}