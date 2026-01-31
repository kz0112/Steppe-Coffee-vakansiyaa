import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const contactInfo = [
  {
    icon: PhoneIcon,
    text: "+7 708 268 69 82",
    href: "tel:+77082686982",
  },
  {
    icon: MapPinIcon,
    text: "ул. Байзакова 280, Алматы",
    href: "https://maps.google.com",
  },
  {
    icon: MailIcon,
    text: "info@circleburo.kz",
    href: "mailto:info@circleburo.kz",
  },
];

export const Footer = () => {
  return (
    <footer className="relative w-full px-4 md:px-8 lg:px-[108px] py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between">
        <div className="flex flex-col gap-5 max-w-md">
          <img
            className="w-[180px] md:w-[233px] h-16 md:h-20 object-cover transition-transform duration-300 hover:scale-105"
            alt="Circle Logo"
            src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/------------1--3.png"
          />
          <p className="font-h9 font-[number:var(--h9-font-weight)] text-black text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)]">
            Circle Creative Buro – креативное бюро и рекламное агентство полного
            цикла в Алматы. Развиваем бренды в цифровом пространстве и за его
            пределами: стратегия, креатив, веб, моушн, интерьеры под ключ.
          </p>
        </div>

        <div className="flex flex-col w-full lg:w-[287px] items-start gap-5">
          <h3 className="font-h7 font-[number:var(--h7-font-weight)] text-black text-[length:var(--h7-font-size)] tracking-[var(--h7-letter-spacing)] leading-[var(--h7-line-height)] [font-style:var(--h7-font-style)]">
            Контакты
          </h3>

          <div className="flex flex-col items-start gap-4 w-full">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  className="inline-flex items-center gap-2 group transition-all duration-300 hover:translate-x-2"
                >
                  <IconComponent className="w-6 h-6 transition-all duration-300 group-hover:text-[#fa4c19] group-hover:scale-110" />
                  <span className="font-h9 font-[number:var(--h9-font-weight)] text-black text-[length:var(--h9-font-size)] tracking-[var(--h9-letter-spacing)] leading-[var(--h9-line-height)] [font-style:var(--h9-font-style)] transition-colors duration-300 group-hover:text-[#fa4c19]">
                    {contact.text}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
