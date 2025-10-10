"use client";
import { useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselImage {
  src: string;
  caption?: string;
}

export default function PlanCarousel({
  images = [],
  maxWidth = "1000px",
}: {
  images: CarouselImage[];
  maxWidth?: string;
}) {
  const slides = useMemo(() => images.filter(Boolean), [images]);

  return (
    <div
      className="rounded-2xl border border-gray-200 shadow-lg p-3 bg-white mx-auto"
      style={{ maxWidth }}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={16}
        slidesPerView={1}
        style={{ paddingBottom: 24 }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <figure className="overflow-hidden rounded-xl border bg-white">
              {/* 固定横屏 16:9 比例 */}
              <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                <Image
                  src={item.src}
                  alt={item.caption || `slide-${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}   // 👈 铺满容器，统一横屏
                  sizes="(max-width: 768px) 100vw, 1000px"
                  priority={i === 0}
                />
              </div>
              {item.caption && (
                <figcaption className="text-sm text-gray-600 px-3 py-2 border-t">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
