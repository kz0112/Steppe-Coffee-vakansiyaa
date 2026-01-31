import { Card, CardContent } from "../ui/card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const ProjectResults = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative w-full px-4 md:px-8 lg:px-[297px] py-8 md:py-12">
      <Card
        className={`bg-[#ffffff33] rounded-[20px] border border-solid border-white shadow-[0px_4px_140.7px_#c0c6f7] backdrop-blur-sm transition-all duration-700 hover:shadow-[0px_8px_180px_#c0c6f7] hover:scale-[1.02] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <CardContent className="flex flex-col items-center justify-center gap-4 px-4 md:px-6 py-8 md:py-[60px]">
          <h2 className="font-h4 font-[number:var(--h4-font-weight)] text-[#393939] text-[28px] md:text-[length:var(--h4-font-size)] text-center tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] transition-all duration-300 hover:text-[#fa4c19]">
            Итоги
          </h2>

          <p className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] text-center tracking-[var(--h9-letter-spacing)] leading-[1.4] md:leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)] max-w-[750px]">
            Итог работы с Steppe Coffee: Социальные сети стали отражением жизни
            кофейни, офлайн-мероприятия начали работать как инструмент
            привлечения и удержания аудитории, а бренд получил понятную и
            устойчивую коммуникационную модель, которую можно масштабировать
            дальше.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
