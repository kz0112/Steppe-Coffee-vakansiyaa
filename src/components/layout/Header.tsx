import { ChevronDownIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Проекты", href: "#projects" },
  { label: "Шоу кейсы", href: "#showcases" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 lg:px-8 animate-fade-in opacity-0 [--animation-delay:100ms]">
      <nav
        className={`flex h-14 md:h-[60px] items-center justify-between px-4 md:px-8 lg:px-[60px] py-3 md:py-4 bg-[#fffcf0] rounded-[30px] md:rounded-[40px] transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="flex items-center justify-between w-full lg:w-auto">
          <a href="#" className="inline-flex items-center group">
            <img
              className="relative w-10 h-9 md:w-[55px] md:h-[50px] transition-transform duration-300 group-hover:scale-110"
              alt="Circle Logo"
              src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/1-----------2.png"
            />
            <img
              className="relative w-10 h-4 md:w-[55px] md:h-5 object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Circle Text"
              src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/circletxt-1.png"
            />
          </a>

          <button
            className="lg:hidden p-2 hover:bg-[#39393910] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#393939] transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#393939] transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#393939] transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-b4 text-[length:var(--b4-font-size)] leading-[var(--b4-line-height)] font-[number:var(--b4-font-weight)] text-[#393939] tracking-[var(--b4-letter-spacing)] [font-style:var(--b4-font-style)] transition-all duration-300 hover:text-[#fa4c19] hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#fa4c19] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center gap-1 pl-4 pr-2 py-1 rounded-[26px] border border-solid border-[#393939] transition-all duration-300 hover:bg-[#39393910] hover:scale-105">
            <span className="font-b4 text-[length:var(--b4-font-size)] leading-[var(--b4-line-height)] font-[number:var(--b4-font-weight)] text-[#393939] tracking-[var(--b4-letter-spacing)] [font-style:var(--b4-font-style)]">
              рус
            </span>
            <ChevronDownIcon className="w-4 h-4 -rotate-90" />
          </button>

          <Button className="h-auto px-5 py-2 bg-[#fa4c19] rounded-[20px] font-b4 font-[number:var(--b4-font-weight)] text-[#fffcf0] text-[length:var(--b4-font-size)] tracking-[var(--b4-letter-spacing)] leading-[var(--b4-line-height)] [font-style:var(--b4-font-style)] transition-all duration-300 hover:bg-[#e03d0f] hover:scale-105 hover:shadow-lg">
            Связаться с нами
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 bg-[#fffcf0] rounded-[30px] p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-b4 text-[length:var(--b4-font-size)] leading-[var(--b4-line-height)] font-[number:var(--b4-font-weight)] text-[#393939] tracking-[var(--b4-letter-spacing)] [font-style:var(--b4-font-style)] transition-all duration-300 hover:text-[#fa4c19] hover:translate-x-2 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-3 border-t border-[#39393920]">
              <button className="flex items-center justify-center gap-1 px-4 py-2 rounded-[26px] border border-solid border-[#393939] transition-all duration-300 hover:bg-[#39393910]">
                <span className="font-b4 text-[length:var(--b4-font-size)] leading-[var(--b4-line-height)] font-[number:var(--b4-font-weight)] text-[#393939] tracking-[var(--b4-letter-spacing)] [font-style:var(--b4-font-style)]">
                  рус
                </span>
                <ChevronDownIcon className="w-4 h-4 -rotate-90" />
              </button>
              <Button className="w-full h-auto px-5 py-2 bg-[#fa4c19] rounded-[20px] font-b4 font-[number:var(--b4-font-weight)] text-[#fffcf0] text-[length:var(--b4-font-size)] tracking-[var(--b4-letter-spacing)] leading-[var(--b4-line-height)] [font-style:var(--b4-font-style)] transition-all duration-300 hover:bg-[#e03d0f]">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
