export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[700px] lg:min-h-[850px] flex flex-col gap-4 md:gap-[19px] bg-[#faf100] rounded-[30px] md:rounded-[40px] px-4 md:px-8 pt-24 md:pt-32 lg:pt-0 translate-y-[-1rem] animate-fade-in opacity-0 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full lg:min-h-[850px] gap-4 md:gap-[19px]">
        <img
          className="w-[200px] md:w-[250px] lg:w-[292px] h-auto mt-0 lg:mt-[275px] animate-fade-in opacity-0 [--animation-delay:300ms] transition-transform duration-500 hover:scale-105"
          alt="Steppe coffee"
          src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/steppe-coffee-guidebook-compressed-9-7.png"
        />

        <img
          className="w-[280px] md:w-[500px] lg:w-[635px] h-auto animate-fade-in opacity-0 [--animation-delay:500ms] transition-transform duration-500 hover:scale-105"
          alt="Steppe coffee"
          src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/steppe-coffee-guidebook-compressed-9-1.png"
        />
      </div>
    </section>
  );
};
