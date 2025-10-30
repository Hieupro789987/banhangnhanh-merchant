// components/common/Carousel.tsx
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface CarouselProps {
  slides: React.ReactNode[];
  options?: {
    loop?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
    showDots?: boolean;
    showArrows?: boolean;
    slidesToScroll?: number;
  };
  className?: string;
}

export function Carousel({
  slides,
  options = {},
  className = "",
}: CarouselProps) {
  const {
    loop = true,
    autoplay = true,
    autoplayDelay = 4000,
    showDots = true,
    showArrows = true,
    slidesToScroll = 1,
  } = options;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      slidesToScroll,
    },
    autoplay ? [Autoplay({ delay: autoplayDelay })] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative ${className}`}>
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {showArrows && slides.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2
                       bg-white/80 hover:bg-white text-gray-800
                       rounded-full p-2 shadow-lg transition-all
                       z-10 disabled:opacity-50"
            onClick={scrollPrev}
            disabled={!loop && selectedIndex === 0}
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2
                       bg-white/80 hover:bg-white text-gray-800
                       rounded-full p-2 shadow-lg transition-all
                       z-10 disabled:opacity-50"
            onClick={scrollNext}
            disabled={!loop && selectedIndex === slides.length - 1}
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {showDots && slides.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-blue-500 w-4"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
