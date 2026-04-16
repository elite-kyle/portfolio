"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <div className="max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hello, World! I am Kyle Larsen — a passionate Full Stack Developer & UI/UX enthusiast
          dedicated to creating high-performance, user-centric software solutions with intuitive and engaging designs.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Senior Full-stack Engineer with 10+ years of experience building and scaling production-grade systems at companies like Target Corporation, Apple Inc., and Walmart Inc., delivering high-impact, customer-facing platforms under heavy traffic.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Designs and owns full-stack and AI-powered systems that operate reliably at scale, including real-time applications and data-intensive platforms. Drives measurable impact through performance optimization and system scalability, achieving 25% faster load times, 15% higher user engagement, and significant improvements in responsiveness.
        </p>
      </div>
    </motion.section>
  );
} 