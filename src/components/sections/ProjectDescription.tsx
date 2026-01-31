import { Card, CardContent } from "../ui/card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const ProjectDescription = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative w-full px-4 md:px-8 lg:px-20 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <Card
          ref={ref}
          className={`bg-[#ffffff33] rounded-[20px] border border-solid border-white shadow-[0px_4px_140.7px_#c0c6f7] backdrop-blur-sm transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <CardContent className="flex flex-col items-start justify-center gap-4 px-4 md:px-6 py-8 md:py-[60px]">
            <h2 className="font-h4 font-[number:var(--h4-font-weight)] text-[#393939] text-[28px] md:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[1.2] md:leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] transition-all duration-300 hover:text-[#fa4c19]">
              Steppe Coffee
            </h2>

            <p className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[1.4] md:leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
              Steppe Coffee – городской кофейный проект с сильным
              комьюнити-потенциалом и фокусом на живое общение. В рамках первого
              этапа мы пересобрали визуальный язык бренда, усилили характер и
              атмосферу Steppe Coffee, а также заложили единую логику для
              дальнейшего развития контента и коммуникаций. Это позволило бренду
              выглядеть цельно и узнаваемо во всех точках контакта с аудиторией.
            </p>
          </CardContent>
        </Card>

        <div
          className={`relative w-full h-[400px] md:h-[500px] lg:h-[671px] rounded-[20px] overflow-hidden transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            alt="Steppe Coffee Interior"
            src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/img-6657-1.png"
          />
        </div>
      </div>
    </section>
  );
};
