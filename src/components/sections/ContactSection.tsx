import { motion } from 'framer-motion';
import { CONTACT_CARDS, AVAILABILITY_INFO } from '../../constants';
import { SectionHeader, FormField, Button } from '../ui';
import { useContactForm } from '../../hooks';
import { useTheme } from '../../context/ThemeContext';

export function ContactSection() {
  const { formData, errors, status, handleChange, handleSubmit, resetForm } = useContactForm();
  const { isDark } = useTheme();


  return (
    <div>
      <SectionHeader title="Let's" accent="Connect" subtitle="Open to exciting opportunities — let's talk" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div
          className="bg-brand-dark rounded-[20px] p-7"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {status === 'success' ? (
            <motion.div
              className="text-center py-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-[56px] mb-4">✓</div>
              <h3 className="font-syne text-[24px] font-extrabold text-cream mb-2">Message Sent!</h3>
              <p className="text-[14px] text-brand-muted-2 mb-5">Thanks for reaching out. I'll reply within 24 hours.</p>
              <Button onClick={resetForm}>Send Another →</Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p className="font-syne text-[20px] font-bold text-cream mb-1">Send a Message</p>
              <p className="text-[13px] text-brand-muted-2 mb-5">I typically reply within 24 hours.</p>

              <div className="grid grid-cols-2 gap-3">
                <FormField label="First Name" name="firstName" placeholder="Your name" value={formData.firstName} error={errors.firstName} onChange={handleChange} />
                <FormField label="Last Name" name="lastName" placeholder="Last name" value={formData.lastName} error={errors.lastName} onChange={handleChange} />
              </div>
              <FormField label="Email" name="email" type="email" placeholder="you@company.com" value={formData.email} error={errors.email} onChange={handleChange} />
              <FormField label="Subject" name="subject" placeholder="Project Inquiry" value={formData.subject} error={errors.subject} onChange={handleChange} />
              <FormField label="Message" name="message" placeholder="Tell me about your project..." value={formData.message} error={errors.message} onChange={handleChange} textarea rows={4} />

              {status === 'error' && (
                <p className="text-[12px] text-red-400 mb-3">Something went wrong. Please try again.</p>
              )}

              <Button type="submit" loading={status === 'submitting'} className="w-full mt-2 rounded-full py-3 font-syne text-[15px] font-bold tracking-wide">
                Send Message →
              </Button>
            </form>
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {CONTACT_CARDS.map((card, i) => {
            const inner = (
              <>
                <div className="w-[42px] h-[42px] rounded-xl bg-[rgba(255,109,31,0.08)] flex items-center justify-center text-[19px] flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="text-[10px] text-brand-muted dark:text-dm-muted font-bold uppercase tracking-[0.4px]">{card.label}</p>
                  <p className={`text-[14px] font-medium mt-0.5 ${isDark ? 'text-dm-text' : 'text-brand-dark'}`}>{card.value}</p>
                </div>
              </>
            );

            return card.href ? (
              <motion.a
                key={card.id}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className={`flex items-center gap-3.5 border rounded-2xl px-5 py-4 transition-all hover:border-brand-orange hover:translate-x-1 ${isDark ? 'bg-dm-card border-white/10' : 'bg-white border-[rgba(34,34,34,0.1)]'}`}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className={`flex items-center gap-3.5 border rounded-2xl px-5 py-4 ${isDark ? 'bg-dm-card border-white/10' : 'bg-white border-[rgba(34,34,34,0.1)]'}`}
              >
                {inner}
              </motion.div>
            );
          })}

          {/* Availability banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.4 }}
            className="bg-brand-orange rounded-2xl px-5 py-5 flex items-center justify-between gap-4"
          >
            <div>
              <p className="font-syne text-[17px] font-extrabold text-white mb-1">{AVAILABILITY_INFO.heading}</p>
              <p className="text-[13px] text-white/75">{AVAILABILITY_INFO.subtext}</p>
            </div>
            <div className="flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-2 whitespace-nowrap">
              <span className="w-[7px] h-[7px] rounded-full bg-white animate-pulse_dot flex-shrink-0" />
              <span className="text-[13px] font-bold text-white">{AVAILABILITY_INFO.badge}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
