import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const FinalShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative w-full px-4 md:px-8 lg:px-20 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div
          className={`flex items-center justify-center bg-[#ecda74] rounded-[30px] md:rounded-[40px] p-4 md:p-8 min-h-[400px] md:min-h-[600px] lg:min-h-[710px] overflow-hidden transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <img
            className="w-full h-auto max-w-[400px] rounded-[30px] md:rounded-[40px] object-cover transition-transform duration-700 hover:scale-105"
            alt="Gallery Image"
            src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/63c06fec-758a-458e-b9b2-62a07a245378.png"
          />
        </div>

        <div
          className={`flex flex-col items-center justify-center bg-[#fbe400] rounded-[30px] md:rounded-[40px] p-8 md:p-14 min-h-[400px] md:min-h-[600px] lg:min-h-[710px] overflow-hidden transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <img
            className="w-full h-auto max-w-[433px] transition-transform duration-700 hover:scale-105"
            alt="Design Element"
            src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/66-2.png"
          />
        </div>
      </div>
    </section>
  );
};
