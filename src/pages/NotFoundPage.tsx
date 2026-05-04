import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useTheme } from '../context/ThemeContext';

export function NotFoundPage() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 min-h-[calc(100vh-140px)] flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 0.68, 0, 1.1] }}
      >
        <motion.p
          className="font-syne text-[120px] md:text-[160px] font-extrabold leading-none text-brand-orange opacity-20 select-none"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          404
        </motion.p>
        <h1 className={`font-syne text-[28px] md:text-[36px] font-extrabold -mt-6 mb-3 ${isDark ? 'text-dm-text' : 'text-brand-dark'}`}>
          Page Not Found
        </h1>
        <p className="text-brand-muted dark:text-dm-muted text-[15px] mb-8 max-w-[380px] mx-auto">
          Looks like this page doesn't exist. Let's get you back on track.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button onClick={() => navigate('/')} size="lg">← Go Home</Button>
          <Button variant="outline" onClick={() => navigate('/projects')} size="lg">View Projects</Button>
        </div>
      </motion.div>
    </div>
  );
}
