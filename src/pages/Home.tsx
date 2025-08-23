import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PhotoGallery } from '../components/PhotoGallery';
import { AboutSection } from '../components/AboutSection';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  usePageTitle('');

  return (
    <div>
      <FadeInSection>
        <motion.h1 className="text-3xl font-bold">
          Xiaoyang Xie
        </motion.h1>
        <motion.p className="text-sm sm:text-base leading-relaxed mb-6">
          Always Travel Lighter Than The Heart
        </motion.p>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <PhotoGallery isMobile={isMobile} />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <AboutSection />
      </FadeInSection>
    </div>
  );
};

export default Home; 