import HeroSection from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Impact from '@/components/Impact'
import FAQ from '@/components/FAQ'
export default function page() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Services/>
      <Impact/>
      <FAQ/>
    </div>
  )
}
