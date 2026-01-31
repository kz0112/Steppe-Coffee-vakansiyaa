import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const FinalImage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative w-full px-4 md:px-8 py-8 md:py-12">
      <div
        className={`relative w-full h-[400px] md:h-[700px] lg:h-[925px] rounded-[30px] md:rounded-[40px] overflow-hidden transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          className="w-full h-full object-cover"
          alt="Final"
          src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/file-001.png"
        />
      </div>
    </section>
  );
};
