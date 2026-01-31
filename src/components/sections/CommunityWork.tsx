import { Card, CardContent } from "../ui/card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const CommunityWork = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative w-full px-4 md:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div
          className={`relative w-full h-[400px] md:h-[500px] lg:h-[636px] rounded-[20px] md:rounded-[30px] overflow-hidden transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="absolute inset-0 bg-[url(https://c.animaapp.com/ml2pgwpiJnCvAs/img/file-007.png)] bg-cover bg-center transition-transform duration-700 hover:scale-110" />
        </div>

        <Card
          className={`bg-[#ffffff33] rounded-[20px] border border-solid border-white shadow-[0px_4px_140.7px_#c0c6f7] backdrop-blur-sm transition-all duration-700 delay-200 hover:shadow-[0px_8px_180px_#c0c6f7] hover:scale-[1.02] ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <CardContent className="flex flex-col items-start justify-center gap-4 px-4 md:px-6 py-6 md:py-10">
            <p className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[1.4] md:leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
              Отдельным направлением стала работа с комьюнити. Мы не просто
              анонсировали мероприятия, а выстраивали вокруг Steppe Coffee точки
              притяжения. За период сотрудничества были восстановлены связи с уже
              существующими сообществами и привлечены новые – SpacED, Language
              Mixer, Bookclub Almaty. В кофейне прошёл арт-мастер-класс, который
              усилил офлайн-трафик и стал контентной опорой для социальных сетей.
              Такой формат позволил бренду выйти за рамки «кофейни» и закрепиться
              как городское пространство для встреч и идей.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
