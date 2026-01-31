import { Card, CardContent } from "../ui/card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const OctoberResults = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative w-full px-4 md:px-8 lg:px-20 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <Card
          className={`bg-[#ffffff33] rounded-[20px] border border-solid border-white shadow-[0px_4px_140.7px_#c0c6f7] backdrop-blur-sm transition-all duration-700 hover:shadow-[0px_8px_180px_#c0c6f7] hover:scale-[1.02] ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <CardContent className="flex flex-col items-start justify-center gap-4 px-4 md:px-6 py-8 md:py-[60px]">
            <h3 className="font-h4 text-[28px] md:text-[length:var(--h4-font-size)] leading-[var(--h4-line-height)] font-[number:var(--h4-font-weight)] text-[#393939] tracking-[var(--h4-letter-spacing)] [font-style:var(--h4-font-style)] transition-all duration-300 hover:text-[#fa4c19]">
              В октябре
            </h3>

            <p className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[1.4] md:leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
              Мы усилили стратегию и сместили фокус в сторону Reels и сторис, а
              также более плотной связки онлайна и офлайна. Результат – резкий
              рост ключевых метрик: охваты аккаунта выросли на 125,3%, действия в
              профиле – на 6,3%, посещения профиля – на 8,4%. Прирост подписчиков
              за месяц составил почти 12% по сравнению с концом сентября. Это
              подтвердило, что выбранная модель контента и темп публикаций начали
              работать системно.
            </p>
          </CardContent>
        </Card>

        <div
          className={`relative w-full h-[400px] md:h-[600px] lg:h-[792px] rounded-[30px] md:rounded-[40px] overflow-hidden transition-all duration-700 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 bg-[url(https://c.animaapp.com/ml2pgwpiJnCvAs/img/frame-29.png)] bg-cover bg-center transition-transform duration-700 hover:scale-105" />
        </div>
      </div>
    </section>
  );
};
