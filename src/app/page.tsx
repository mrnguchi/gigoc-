import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import NewsSection from '@/components/NewsSection';
import OurBusinesses from '@/components/OurBusinesses';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';
import Section2 from '@/components/Section2';
import { newsSectionData } from '@/data/news';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ overflow: 'hidden' }}>
      <Navbar />
      <Hero />
      <Section2 />
      <OurBusinesses />
      <ProjectsShowcase />
      <WhyChooseUs />
      <NewsSection data={newsSectionData} />
      <ContactSection />
      <Footer />
    </main>
  );
}
