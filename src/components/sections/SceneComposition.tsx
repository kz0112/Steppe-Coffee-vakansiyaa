import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const SceneComposition = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative w-full h-[400px] md:h-[600px] lg:h-[788px] overflow-hidden">
      <img
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-110"
        }`}
        alt="Scene"
        src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/scene-1-2--1.png"
      />
      <img
        className={`absolute top-0 right-0 w-[47.29%] h-full object-cover transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        alt="Element 1"
        src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/60-3.png"
      />
      <img
        className={`absolute top-0 left-0 w-[46.39%] h-full object-cover transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
        alt="Element 2"
        src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/60-4.png"
      />
    </section>
  );
};
