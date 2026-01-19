import { div } from 'framer-motion/client';
import { GridScan } from '../components/GridScan';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <div>
    <div className="min-h-screen w-full relative font-sans">
      <div className="absolute inset-0 bg-[#071032]" />
      <div className="fixed inset-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#1f2937" /* slate/grey lines */
          gridScale={0.12}
          scanColor="#7dd3fc" /* light blue scan */
          scanOpacity={0.45}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          className="w-full h-full"
        />
      </div>

      <main className="relative z-10 flex min-h-screen w-full items-center justify-center pointer-events-none">
        <section className="container mx-auto px-6 py-32 max-w-4xl text-center pointer-events-auto">
          <h1 className="text-7xl sm:text-8xl font-extrabold leading-tight tracking-tight text-white">
            <span className="text-[#7dd3fc]">Cloudora</span>{' '}
            <span className="text-[#94a3b8]">Tech</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-zinc-200 max-w-3xl mx-auto">
            We build secure, scalable cloud-native software that accelerates your business.
          </p>
        </section>
      </main>


      
    </div>
    <ServicesSection/>
    </div>
  );
}
