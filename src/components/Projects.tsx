import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Lumbar Spine MRI Degenerative Classification Web Application',
    description: 'Developed a deep learning model using PyTorch and the TIMM library to diagnose and classify the severity of lumbar spine conditions from MRI scans, employing a ResNet18 backbone for feature extraction. Implemented image preprocessing and augmentation strategies to enhance model training and performance, supporting various image formats including DICOM, JPG, and PNG.',
    skills: [
      { name: 'PyTorch', color: 'bg-orange-600' },
      { name: 'TIMM', color: 'bg-green-600' },
      { name: 'Deep Learning', color: 'bg-purple-600' }
    ],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Deep Learning Model for Abdominal CT Scan Trauma Detection',
    description: 'Developed a multi-label deep learning model using ResNet50 to detect abdominal trauma from CT scan images, achieving accurate classification across multiple injury types. Implemented advanced medical image preprocessing techniques and custom data generators to handle complex DICOM image formats, overcoming challenges in medical imaging dataset preparation.',
    skills: [
      { name: 'TensorFlow', color: 'bg-orange-600' },
      { name: 'Deep Learning', color: 'bg-purple-600' },
      { name: 'ResNet', color: 'bg-blue-600' }
    ],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Breast Cancer Detection Web Application',
    description: 'Designed and implemented a ResNet18-based deep learning model for binary classification of histopathological breast cancer images, with custom preprocessing pipelines and augmentation techniques. Achieved comprehensive evaluation using confusion matrices, accuracy metrics, and visualization of loss trends.',
    skills: [
      { name: 'PyTorch', color: 'bg-orange-600' },
      { name: 'ResNet', color: 'bg-blue-600' },
      { name: 'Deep Learning', color: 'bg-purple-600' }
    ],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: "Parkinson's Disease Prediction Web Application",
    description: 'Developed a Python-based analysis pipeline to predict Parkinson\'s disease using machine learning models like Random Forest, Logistic Regression, and KNN, leveraging GridSearchCV for hyperparameter tuning. Implemented t-SNE for data visualization and correlation heatmaps to identify significant features.',
    skills: [
      { name: 'Python', color: 'bg-red-600' },
      { name: 'Scikit-learn', color: 'bg-green-600' },
      { name: 'Machine Learning', color: 'bg-yellow-600' }
    ],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Cancer Detection Web Application',
    description: 'Developed a deep learning pipeline for cancer detection using a fine-tuned ResNet-34 model on histopathological images. Implemented custom PyTorch datasets, data augmentation, and GPU-accelerated training to achieve high accuracy.',
    skills: [
      { name: 'PyTorch', color: 'bg-orange-600' },
      { name: 'Deep Learning', color: 'bg-purple-600' },
      { name: 'ResNet', color: 'bg-blue-600' }
    ],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Pneumonia Detection Web Application',
    description: 'Built a CNN-based deep learning model to classify chest X-ray images for pneumonia detection using TensorFlow and Keras. Utilized data augmentation, custom data generators, and early stopping to enhance model performance and prevent overfitting.',
    skills: [
      { name: 'TensorFlow', color: 'bg-orange-600' },
      { name: 'Keras', color: 'bg-red-600' },
      { name: 'Deep Learning', color: 'bg-purple-600' }
    ],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Malaria Cell Detection Using Deep Learning Web Application',
    description: 'Developed a deep learning ResNet model for automated malaria cell detection using TensorFlow, achieving high accuracy in binary classification of microscopic blood cell images. Implemented end-to-end machine learning pipeline including data preprocessing, augmentation, model training, and web deployment with Streamlit.',
    skills: [
      { name: 'TensorFlow', color: 'bg-orange-600' },
      { name: 'Streamlit', color: 'bg-red-600' },
      { name: 'ResNet', color: 'bg-blue-600' }
    ],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Autism Spectrum Disorder Prediction Web Application',
    description: 'Developed a machine learning solution for Autism Spectrum Disorder prediction using ensemble techniques, achieving 85% accuracy across multiple classification algorithms (Logistic Regression, XGBoost, SVM). Created an interactive Streamlit web application for real-time ASD screening.',
    skills: [
      { name: 'SVM', color: 'bg-blue-600' },
      { name: 'XGBoost', color: 'bg-green-600' },
      { name: 'Streamlit', color: 'bg-red-600' }
    ],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Color Evolving Game of Life Simulation Web Application',
    description: 'Developed an interactive, color-evolving Conway\'s Game of Life simulation using Python, NumPy, and Streamlit, featuring dynamic cellular automaton mechanics and a modern, responsive web interface. Implemented advanced visualization techniques with real-time color mutation and toroidal grid dynamics.',
    skills: [
      { name: 'Python', color: 'bg-blue-600' },
      { name: 'NumPy', color: 'bg-yellow-600' },
      { name: 'Streamlit', color: 'bg-red-600' }
    ],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  }
];

const Projects = () => {
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
        Selected Projects
      </motion.h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;