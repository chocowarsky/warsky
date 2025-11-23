"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projectData = {
  starfield: {
    title: "Starfield Fanbase Portal",
    category: "HTML & CSS",
    description: "Platform komunitas interaktif untuk game RPG Bethesda.",
    heroTitle: "Starfield Portal",
    heroSubtitle: "Fanbase community platform & immersive hub.",
    challengeText: "Tantangan utama adalah menciptakan atmosfer luar angkasa 'NASA-punk' yang otentik hanya dengan menggunakan CSS murni, tanpa bantuan framework UI berat, sambil menjaga performa tetap ringan.",
    solutionText: "Menerapkan struktur HTML semantik dan CSS Flexbox untuk menciptakan layout adaptif yang rapi. Fokus visual diarahkan pada estetika 'NASA-Punk' (fungsional & minimalis) untuk menjaga hierarki informasi yang jelas dan performa web yang ringan.",
    featureTitle: "Immersive Experience",
    featureSubtitle: "Deep dive into the universe.",
  },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const projectFadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex bg-black text-white overflow-hidden font-sans">

      <Sidebar
        activeSection={activeSection}
        setActiveSection={(section) => {
          setActiveSection(section);
          setSelectedProject(null);
        }}
      />

      <main className="flex-1 flex items-center justify-center p-8 lg:pr-32 min-h-screen w-full relative">

        <AnimatePresence mode="wait">

          {/* --- HOME SECTION --- */}
          {activeSection === "home" && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="max-w-4xl absolute"
            >
              <h1 className="font-serif text-6xl lg:text-8xl font-medium mb-6 text-white">
                Bagus Wijaya
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-10">
                Future AI & Business Strategist. Menggabungkan skill teknis software engineering dengan insting bisnis dan automasi AI.
              </p>
              <div className="flex gap-6 text-sm font-bold tracking-widest uppercase text-white">
                 <a href="https://github.com/chocowarsky" target="_blank" className="border-b border-white/20 pb-1 cursor-pointer hover:border-white">GitHub</a>
                 {/* UPDATE: Link LinkedIn sudah aktif */}
                 <a href="https://www.linkedin.com/in/bagussuhita/" target="_blank" className="border-b border-white/20 pb-1 cursor-pointer hover:border-white">LinkedIn</a>
              </div>
            </motion.div>
          )}

          {/* --- PROJECTS SECTION --- */}
          {activeSection === "projects" && (
            <div className="max-w-5xl w-full absolute h-[85vh] overflow-y-auto pr-4 scrollbar-hide">

              <AnimatePresence mode="wait">

                {/* === LIST PROYEK === */}
                {selectedProject === null && (
                  <motion.div
                    key="project-list"
                    variants={projectFadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <h2 className="font-serif text-5xl mb-12 sticky top-0 bg-black pb-4 z-10">Selected Projects</h2>
                    <div className="grid grid-cols-1 gap-6">

                      {/* Project 1: Starfield */}
                      <div
                        onClick={() => setSelectedProject("starfield")}
                        className="border border-gray-800 p-8 hover:bg-gray-900 transition cursor-pointer group rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-3xl font-serif mb-2 group-hover:underline decoration-1 underline-offset-4">
                            {projectData.starfield.title}
                          </h3>
                          <span className="text-xs border border-gray-700 px-2 py-1 rounded text-gray-400">
                             {projectData.starfield.category}
                          </span>
                        </div>
                        <p className="text-gray-400 mt-4 leading-relaxed">
                           {projectData.starfield.description}
                        </p>
                      </div>

                      {/* Project 2: AI Workflow */}
                      <div className="border border-gray-800 p-8 hover:bg-gray-900 transition cursor-pointer group rounded-lg opacity-50">
                         <div className="flex justify-between items-start">
                          <h3 className="text-3xl font-serif mb-2">AI Content Automation</h3>
                          <span className="text-xs border border-gray-700 px-2 py-1 rounded text-gray-400">LLM & Prompt Engineering</span>
                        </div>
                        <p className="text-gray-400 mt-4 leading-relaxed">
                          (Project Detail Coming Soon)
                        </p>
                      </div>

                       {/* Project 3: Robotics */}
                       <div className="border border-gray-800 p-8 hover:bg-gray-900 transition cursor-pointer group rounded-lg opacity-50">
                         <div className="flex justify-between items-start">
                          <h3 className="text-3xl font-serif mb-2">Line Follower Robot</h3>
                          <span className="text-xs border border-gray-700 px-2 py-1 rounded text-gray-400">Robotics & IoT</span>
                        </div>
                         <p className="text-gray-400 mt-4 leading-relaxed">
                          (Project Detail Coming Soon)
                        </p>
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* === DETAIL PROYEK === */}
                {selectedProject === "starfield" && (
                  <motion.div
                    key="project-detail-starfield"
                    variants={projectFadeVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="pb-20"
                  >
                    <button
                      onClick={handleBackToProjects}
                      className="mb-8 text-sm text-gray-400 hover:text-white transition flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
                    </button>

                    <h1 className="font-serif text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                      {projectData.starfield.heroTitle}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mb-12">
                       {projectData.starfield.heroSubtitle}
                    </p>

                    {/* HERO IMAGE */}
                    <div className="relative w-full h-[300px] lg:h-[500px] mb-20 rounded-xl overflow-hidden group">
                      <Image
                        src="/projects/starfield-ss-1.png"
                        alt="Starfield Hero"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                      <div>
                        <h3 className="font-serif text-3xl mb-6">The Challenge</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                          {projectData.starfield.challengeText}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-serif text-3xl mb-6">The Solution</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                           {projectData.starfield.solutionText}
                        </p>
                      </div>
                    </div>

                    <div className="text-center mb-12">
                       <h3 className="font-serif text-4xl lg:text-5xl mb-6">
                         {projectData.starfield.featureTitle}
                       </h3>
                       <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                         {projectData.starfield.featureSubtitle}
                       </p>
                    </div>

                    {/* FEATURE IMAGE */}
                    <div className="relative w-full h-[400px] lg:h-[600px] rounded-xl overflow-hidden border border-gray-800">
                       <Image
                        src="/projects/starfield-ss-2.png"
                        alt="Starfield Feature"
                        fill
                        className="object-cover"
                      />
                    </div>

                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          )}

          {/* --- EXPERIENCE SECTION --- */}
          {activeSection === "experience" && (
            <motion.div
              key="experience"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="max-w-3xl w-full absolute h-[80vh] overflow-y-auto pr-4 scrollbar-hide"
            >
              <h2 className="font-serif text-5xl mb-12 sticky top-0 bg-black pb-4 z-10">Experience</h2>
              <div className="border-l border-gray-800 ml-4 space-y-16 pb-20">

                {/* Item 1: Robotics (Current) */}
                <div className="relative pl-10 group">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white group-hover:bg-blue-500 transition-colors"></span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">2024 - Present</span>
                  <h3 className="text-2xl font-serif mt-1 text-white">GRED Robotics Team</h3>
                  <p className="text-sm text-gray-500 font-mono mt-1">Line Follower Division</p>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    Memilih divisi Line Follower berdasarkan analisis data kompetisi untuk memaksimalkan peluang prestasi (High ROI Strategy). Menguasai logika navigasi robot Ichibot Ultimate 5 Max (PID Algorithm & Calibration). Juara 1 Maze Solving ELCOM (Electrical Competition) 2025.
                  </p>
                </div>

                {/* Item 2: SMK (Current Education) */}
                <div className="relative pl-10 group">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white group-hover:bg-blue-500 transition-colors"></span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">2024 - Present</span>
                  <h3 className="text-2xl font-serif mt-1 text-white">SMK TI Bali Global Denpasar</h3>
                  <p className="text-sm text-gray-500 font-mono mt-1">Software Engineering (RPL)</p>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    Fokus mendalami Rekayasa Perangkat Lunak, logika pemrograman, dan pengembangan sistem.
                  </p>
                </div>

                {/* Item 3: AI Service (Dari CV) */}
                <div className="relative pl-10 group">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">2024</span>
                  <h3 className="text-2xl font-serif mt-1 text-white">AI-Assisted Academic Service</h3>
                  <p className="text-sm text-gray-500 font-mono mt-1">Founder & Operator</p>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    Memanfaatkan tools AI untuk mempercepat pengerjaan 30+ makalah akademis secara efisien dalam waktu singkat (<i>High Volume Production</i>). Menerapkan strategi parafrase dan variasi materi (<i>content randomization</i>) untuk memastikan setiap dokumen memiliki isi yang unik.
                  </p>
                </div>

                {/* Item 4: Gaming Commerce (Dari CV) */}
                <div className="relative pl-10 group">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">2022</span>
                  <h3 className="text-2xl font-serif mt-1 text-white">Niche Gaming Commerce</h3>
                  <p className="text-sm text-gray-500 font-mono mt-1">Micro-Business Owner</p>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    Mengidentifikasi <i>pain point</i> pasar spesifik (masalah gesekan layar bagi gamer) dan mengeksekusi penjualan sarung jempol (finger sleeves) dengan tingkat konversi tinggi berkat <i>Product-Market Fit</i> dan timing yang tepat.
                  </p>
                </div>

                {/* Item 5: Cash Exchange (Dari CV) */}
                <div className="relative pl-10 group">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">2022</span>
                  <h3 className="text-2xl font-serif mt-1 text-white">Cash Exchange Venture</h3>
                  <p className="text-sm text-gray-500 font-mono mt-1">Micro-Business Owner</p>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    Mengkapitalisasi momentum peluncuran uang emisi baru untuk mendapatkan profit margin langsung (<i>Markup Pricing</i>). Menerapkan <i>Emotional Selling Strategy</i> dengan menjual "Gengsi/Prestige" kepada pelanggan yang bersedia membayar premium.
                  </p>
                </div>

              </div>
            </motion.div>
          )}

          {/* --- CONTACT SECTION --- */}
          {activeSection === "contact" && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="max-w-2xl w-full text-center absolute"
            >
              <h2 className="font-serif text-5xl mb-8">Get in Touch</h2>
              <p className="text-gray-400 mb-8 text-xl">
                Siap belajar dan berkontribusi. Tertarik diskusi tentang AI, Web Dev, atau Gaming Industry?
              </p>
              {/* UPDATE: Email sudah mengarah ke alamat asli */}
              <a href="mailto:bagus27wijaya@gmail.com" className="bg-white text-black px-8 py-4 rounded font-bold hover:bg-gray-200 transition inline-block">
                Email Saya
              </a>
            </motion.div>
          )}

        </AnimatePresence>

      </main>
    </div>
  );
}
