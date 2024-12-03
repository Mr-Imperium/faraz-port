import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-2xl font-bold text-white"
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="border border-gray-800 rounded-lg p-6 space-y-4"
      >
        <div className="flex items-start space-x-4">
          <GraduationCap className="text-gray-400 mt-1" size={24} />
          <div>
            <h3 className="text-xl font-semibold text-white">MBBS</h3>
            <p className="text-gray-400">KIST Medical College & Teaching Hospital</p>
            <p className="text-gray-400">Lalitpur, Nepal | 2022-Present</p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Relevant Courses</h4>
          <div className="grid grid-cols-2 gap-2">
            {[
              'Anatomy',
              'Physiology',
              'Pharmacology',
              'Pathology',
              'Biochemistry',
              'Microbiology',
              'Medical Research Methods',
              'Clinical Medicine',
              'Public Health',
              'Medical Ethics'
            ].map((course) => (
              <span
                key={course}
                className="text-gray-300 text-sm"
              >
                • {course}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;