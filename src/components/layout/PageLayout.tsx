import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <motion.main
      className="max-w-7xl mx-auto px-5 md:px-8 pt-13 pb-16"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 0.68, 0, 1.2] }}
    >
      {children}
    </motion.main>
  );
}
