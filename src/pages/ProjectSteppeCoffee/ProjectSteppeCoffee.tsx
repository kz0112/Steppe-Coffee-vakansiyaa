import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { HeroSection } from "../../components/sections/HeroSection";
import { ProjectDescription } from "../../components/sections/ProjectDescription";
import { BeforeAfterComparison } from "../../components/sections/BeforeAfterComparison";
import { ContentShowcase } from "../../components/sections/ContentShowcase";
import { PhotoGallery } from "../../components/sections/PhotoGallery";
import { SMMStrategy } from "../../components/sections/SMMStrategy";
import { StatisticsCard } from "../../components/sections/StatisticsCard";
import { OctoberResults } from "../../components/sections/OctoberResults";
import { CommunityWork } from "../../components/sections/CommunityWork";
import { DesignMaterials } from "../../components/sections/DesignMaterials";
import { FinalShowcase } from "../../components/sections/FinalShowcase";
import { ProjectResults } from "../../components/sections/ProjectResults";
import { FinalImage } from "../../components/sections/FinalImage";
import { SceneComposition } from "../../components/sections/SceneComposition";
import { Card, CardContent } from "../../components/ui/card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const statsDataSeptember = {
  title: "ПРосмотры",
  period: "1 сен - 30 сен",
  views: "35,647",
  nonFollowers: "55,8%",
  followers: "44,2%",
  accounts: "2,190",
  change: "-65,5%",
  chartRotation: "14.90%",
};

const statsDataOctober = {
  title: "ПРосмотры",
  period: "1 окт - 30 окт",
  views: "41,982",
  nonFollowers: "54,0%",
  followers: "46,0%",
  accounts: "4,935",
  change: "+125,3%",
  chartRotation: "32.10%",
};

export const ProjectSteppeCoffee = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="relative w-full">
        <img
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[1440px] h-auto pointer-events-none"
          alt="Background Frame"
          src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/frame-64.svg"
        />

        <div className="relative z-10">
          <Header />

          <main className="pt-20 md:pt-24">
            <div className="px-4 md:px-8 lg:px-0 max-w-[1440px] mx-auto">
              <HeroSection />
            </div>

            <div className="relative">
              <img
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-auto -z-10 pointer-events-none"
                alt="Background"
                src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/rectangle-124.png"
              />

              <ProjectDescription />
              <BeforeAfterComparison />
              <ContentShowcase />
              <SceneComposition />
              <PhotoGallery />
              <SMMStrategy />

              <div className="px-4 md:px-8 lg:px-20 py-8 md:py-12">
                <StatisticsCard data={statsDataSeptember} />
              </div>

              <OctoberResults />

              <div className="px-4 md:px-8 lg:px-[515px] py-8 md:py-12">
                <StatisticsCard data={statsDataOctober} delay={200} />
              </div>

              <CommunityWork />
              <DesignMaterials />
              <FinalShowcase />
              <ProjectResults />
              <FinalImage />
            </div>
          </main>

          <div className="relative">
            <img
              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[1440px] h-auto pointer-events-none"
              alt="Footer Frame 1"
              src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/frame-239.svg"
            />
            <img
              className="absolute left-1/2 -translate-x-1/2 bottom-4 w-full max-w-[1440px] h-auto pointer-events-none"
              alt="Footer Frame 2"
              src="https://c.animaapp.com/ml2pgwpiJnCvAs/img/frame-240.svg"
            />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
