import { Card, CardContent } from "../ui/card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface StatsData {
  title: string;
  period: string;
  views: string;
  nonFollowers: string;
  followers: string;
  accounts: string;
  change: string;
  chartRotation: string;
}

interface StatisticsCardProps {
  data: StatsData;
  delay?: number;
}

export const StatisticsCard = ({ data, delay = 0 }: StatisticsCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Card
      ref={ref}
      className={`bg-[#ffffff33] rounded-[20px] border border-solid border-white shadow-[0px_4px_140.7px_#c0c6f7] backdrop-blur-sm transition-all duration-700 hover:shadow-[0px_8px_180px_#c0c6f7] hover:scale-[1.02] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardContent className="flex flex-col items-center justify-center gap-6 md:gap-[25px] p-4 md:p-5">
        <div className="flex flex-col items-center gap-5 w-full">
          <h3 className="font-h4 font-[number:var(--h4-font-weight)] text-[#393939] text-[28px] md:text-[length:var(--h4-font-size)] text-center tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] transition-all duration-300 hover:text-[#fa4c19]">
            {data.title}
          </h3>

          <div className="flex flex-col items-center gap-5 w-full">
            <p className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] text-center tracking-[var(--h9-letter-spacing)] leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
              {data.period}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full">
              <div className="relative w-[220px] h-[220px] md:w-[264px] md:h-[260px] group">
                <div className="absolute top-[85px] md:top-[95px] left-1/2 -translate-x-1/2 font-h4 font-[number:var(--h4-font-weight)] text-[#393939] text-[28px] md:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] transition-all duration-300 group-hover:scale-110">
                  {data.views}
                </div>

                <div className="absolute top-[125px] md:top-[143px] left-1/2 -translate-x-1/2 font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
                  Просмотры
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-[url(https://c.animaapp.com/ml2pgwpiJnCvAs/img/ellipse-2.svg)] bg-[100%_100%] transition-transform duration-500 group-hover:rotate-12">
                </div>
              </div>

              <div className="flex flex-col w-full md:w-[170px] items-start gap-5">
                <div className="flex items-center gap-2 w-full group">
                  <img
                    className="w-6 h-6 object-cover transition-transform duration-300 group-hover:scale-110"
                    alt="Indicator"
                    src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/ellipse-68-1.png"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
                      {data.nonFollowers}
                    </div>
                    <div className="font-b3 font-[number:var(--b3-font-weight)] text-[#393939] text-[length:var(--b3-font-size)] tracking-[var(--b3-letter-spacing)] leading-[var(--b3-line-height)] [font-style:var(--b3-font-style)]">
                      Неподписчики
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full group">
                  <div className="w-6 h-6 bg-[#ac8eef4c] rounded-xl transition-transform duration-300 group-hover:scale-110" />
                  <div className="flex flex-col flex-1">
                    <div className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
                      {data.followers}
                    </div>
                    <div className="font-b3 font-[number:var(--b3-font-weight)] text-[#393939] text-[length:var(--b3-font-size)] tracking-[var(--b3-letter-spacing)] leading-[var(--b3-line-height)] [font-style:var(--b3-font-style)]">
                      Подписчики
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full px-2">
          <div className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
            Охваченные аккаунты
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="font-h9 font-[number:var(--h9-font-weight)] text-[#393939] text-[16px] md:text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
              {data.accounts}
            </div>
            <div className="font-b3 font-[number:var(--b3-font-weight)] text-[#919191] text-[length:var(--b3-font-size)] tracking-[var(--b3-letter-spacing)] leading-[var(--b3-line-height)] [font-style:var(--b3-font-style)]">
              {data.change}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
