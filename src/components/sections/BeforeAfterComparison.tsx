import { Card, CardContent } from "../ui/card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const BeforeAfterComparison = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative w-full px-4 md:px-8 lg:px-6 py-8 md:py-12">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="font-h2 font-[number:var(--h2-font-weight)] text-[#393939] text-[32px] md:text-[48px] lg:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] mb-4 md:mb-6 text-center transition-all duration-300 hover:text-[#fa4c19]">
              До
            </h3>
            <Card className="bg-[#ffffff33] rounded-[20px] border border-solid border-white shadow-[0px_4px_140.7px_#c0c6f7] backdrop-blur-sm overflow-hidden group">
              <CardContent className="flex flex-col items-center gap-4 px-4 md:px-7 py-8 md:py-[60px]">
                <img
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Old design"
                  src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/old-and-new-design-1-1.png"
                />
              </CardContent>
            </Card>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="font-h2 font-[number:var(--h2-font-weight)] text-[#393939] text-[32px] md:text-[48px] lg:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] mb-4 md:mb-6 text-center transition-all duration-300 hover:text-[#fa4c19]">
              После
            </h3>
            <Card className="bg-[#ffffff33] rounded-[20px] border border-solid border-white shadow-[0px_4px_140.7px_#c0c6f7] backdrop-blur-sm overflow-hidden group">
              <CardContent className="flex flex-col items-center gap-4 px-4 md:px-7 py-8 md:py-[60px]">
                <img
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="New design"
                  src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/old-and-new-design-1-1-1.png"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
