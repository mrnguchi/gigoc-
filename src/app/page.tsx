import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ overflow: 'hidden' }}>
      <Navbar />
      <Hero />
      <ProjectsShowcase />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  );
}
