import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import './index.css';

const projects = [
  {
    title: "AI-Quizify",
    description: "AI-powered Shopify product recommendation quiz.",
    github: "https://github.com/hicham753/AI-Quizify",
  },
  {
    title: "candyTap",
    description: "A Candy-themed Android tapping game built in Java.",
    github: "https://github.com/yucf7/candyTap",
  },
  {
    title: "legends",
    description: "Full-stack football memorabilia site.",
    github: "https://github.com/hicham753/legends",
  },
  {
    title: "shopping_cart_css",
    description: "CSS-only shopping cart UI design.",
    github: "https://github.com/hicham753/shopping_cart_css",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-700 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Hicham 👋</h1>
        <p className="text-lg md:text-xl mb-10">
          Full-stack developer from Morocco 🇲🇦. Passionate about web and mobile app development.
        </p>

        <h2 className="text-2xl font-semibold mb-4">🚀 Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4 text-white/80">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/20 hover:bg-white/30 transition"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">📫 Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:your.email@example.com" className="underline">
            your.email@example.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>
      </div>
    </main>
  );
}
