import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const PhotoGallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative w-full px-4 md:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div
          className={`relative w-full h-[400px] md:h-[600px] lg:h-[702px] rounded-[20px] md:rounded-[30px] overflow-hidden transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            alt="Gallery Image 1"
            src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/55.png"
          />
        </div>

        <div
          className={`relative w-full h-[400px] md:h-[600px] lg:h-[702px] rounded-[20px] md:rounded-[30px] overflow-hidden transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            alt="Gallery Image 2"
            src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/file-007-1.svg"
          />
        </div>
      </div>
    </section>
  );
};
