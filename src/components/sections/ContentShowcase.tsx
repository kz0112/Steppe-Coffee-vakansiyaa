import { Card, CardContent } from "../ui/card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ContentCard = ({ children, className = "", delay = 0 }: ContentCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Card
      ref={ref}
      className={`bg-[#ffffff33] rounded-[20px] border border-solid border-white shadow-[0px_4px_140.7px_#c0c6f7] backdrop-blur-sm transition-all duration-700 hover:shadow-[0px_8px_180px_#c0c6f7] hover:scale-[1.02] ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Card>
  );
};

export const ContentShowcase = () => {
  return (
    <section className="relative w-full px-4 md:px-8 lg:px-20 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[792px] rounded-[30px] md:rounded-[40px] overflow-hidden group">
          <div className="absolute inset-0 bg-[url(https://c.animaapp.com/ml2pgwpiJnCvAs/img/90-1.png)] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
        </div>

        <div className="flex flex-col gap-6">
          <ContentCard>
            <CardContent className="flex flex-col items-start gap-4 px-4 md:px-6 py-6 md:py-10">
              <p className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[1.4] md:leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
                После завершения этого этапа клиент перешел на пакет Cycle –
                формат ежемесячного сопровождения, в рамках которого мы
                продолжаем развивать проект, усиливать комьюнити и
                последовательно масштабировать коммуникацию на базе обновленного
                визуального и смыслового фундамента.
              </p>
            </CardContent>
          </ContentCard>

          <ContentCard delay={200}>
            <CardContent className="flex flex-col items-start gap-4 px-4 md:px-6 py-6 md:py-10">
              <p className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[1.4] md:leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
                Мы взяли на себя работу с контентом, визуальной подачей,
                печатными материалами и офлайн-активностями, а также участвовали
                в оформлении интерьера кофейни, чтобы пространство и
                коммуникация работали как единое целое.
              </p>
            </CardContent>
          </ContentCard>

          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[396px] rounded-[20px] overflow-hidden group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Steppe"
              src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/steppe-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
