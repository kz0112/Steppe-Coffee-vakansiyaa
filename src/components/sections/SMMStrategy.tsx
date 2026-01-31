import { Card, CardContent } from "../ui/card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const SMMStrategy = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative w-full px-4 md:px-8 lg:px-20 py-8 md:py-12">
      <Card
        className={`bg-[#ffffff33] rounded-[20px] border border-solid border-white shadow-[0px_4px_140.7px_#c0c6f7] backdrop-blur-sm transition-all duration-700 hover:shadow-[0px_8px_180px_#c0c6f7] hover:scale-[1.02] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <CardContent className="flex flex-col items-start justify-center gap-4 px-4 md:px-6 py-6 md:py-10">
          <p className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[1.4] md:leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
            В рамках SMM мы выстроили регулярное присутствие бренда в Instagram и
            TikTok, переработали подачу контента и сделали акцент на живые
            форматы. В сентябре, несмотря на просадку охватов относительно
            предыдущего периода, нам удалось сохранить активность аудитории и
            зафиксировать рост подписчиков на 9% по сравнению с августом. Этот
            этап стал диагностическим: мы протестировали форматы и выявили, что
            наибольшую вовлеченность дают визуальные посты и контент с
            офлайн-жизнью кофейни.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
