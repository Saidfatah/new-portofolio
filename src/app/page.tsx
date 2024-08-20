
import "../styles/global.scss";
import SaidFatah_intro_3d_box from "./components/3d_box";
import ContactSection from "./sections/ContactSection";
import IntroSection from "./sections/IntroSection";
import SkillsSection from "./sections/SkillsSection";

export default function Home() {
  return (
    <main >
      <div>

        <IntroSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}
