
"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F3EEE5] text-[#242321]">

      {/* NAVIGATION */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex items-center justify-between px-6 py-7 md:px-16"
      >
        <a
          href="#home"
          className="font-editorial text-4xl font-medium"
        >
          R<span className="text-[#9B6974]">.</span>
        </a>

        <div className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.22em] md:flex">
          <a href="#about" className="transition-colors hover:text-[#9B6974]">
            About
          </a>
          <a href="#work" className="transition-colors hover:text-[#9B6974]">
            Selected Work
          </a>
          <a href="#experience" className="transition-colors hover:text-[#9B6974]">
            Journey
          </a>
          <a href="#contact" className="transition-colors hover:text-[#9B6974]">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="border-b border-[#242321] pb-1 text-[10px] uppercase tracking-[0.2em] transition-colors hover:border-[#9B6974] hover:text-[#9B6974]"
        >
          Let's Connect ↗
        </a>
      </motion.nav>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto grid min-h-[82vh] max-w-[1600px] items-center gap-16 px-6 pb-24 pt-12 md:grid-cols-[1.15fr_0.85fr] md:px-16 md:pt-8"
      >

        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute left-[45%] top-[12%] hidden h-64 w-64 rounded-full border border-[#D8CFC2] md:block" />

        <div className="pointer-events-none absolute bottom-[15%] left-[12%] hidden h-24 w-24 rounded-full bg-[#E8DFD2]/60 blur-2xl md:block" />

        {/* LEFT CONTENT */}
        <div className="relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-9 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#9B6974]" />
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#9B6974]">
              A little introduction
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="font-editorial text-[clamp(5rem,11vw,10.5rem)] leading-[0.78] tracking-[-0.065em]"
          >
            Rajshree
            <span className="text-[#9B6974]">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-9 max-w-lg"
          >
            <p className="text-lg leading-[1.9] text-[#6F6A63] md:text-xl">
              Curious mind. Creative soul.
              <span className="text-[#242321]">
                {" "}Building meaningful things with technology.
              </span>
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#8C8175]">
              Exploring the world of AI, development and ideas —
              one experiment, one project and one chapter at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex flex-wrap items-center gap-7"
          >
            <a
              href="#work"
              className="group flex items-center gap-4 bg-[#242321] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-[#F3EEE5] transition-all duration-300 hover:bg-[#9B6974]"
            >
              Explore my work
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <span className="font-handwritten text-2xl text-[#9B6974]">
              Still learning, still building.
            </span>
          </motion.div>

        </div>

        {/* RIGHT VISUAL — SCRAPBOOK COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="relative mx-auto w-full max-w-430p] py-8"
        >

          {/* Background paper */}
          <div className="absolute -right-3 top-3 h-full w-full rotate-[5deg] bg-[#D8CBB9]" />

          {/* Main frame */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative aspect-4/5 bg-[#E8DFD2] p-5 shadow-[0_20px_60px_rgba(36,35,33,0.10)]"
          >

            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden border border-[#A58A76]/50 bg-[#F3EEE5]">

              <div className="absolute left-5 top-5 flex items-center gap-2 text-[#A58A76]">
                <Sparkles size={14} />
                <span className="text-[9px] uppercase tracking-[0.25em]">
                  The beginning
                </span>
              </div>

              {/* Decorative rings */}
              <div className="absolute h-64 w-64 rounded-full border border-[#D8CBB9]" />
              <div className="absolute h-48 w-48 rounded-full border border-[#D8CBB9]" />
              <div className="absolute h-32 w-32 rounded-full border border-[#D8CBB9]" />

              <span className="relative z-10 font-editorial text-[150px] leading-none text-[#9B6974]">
                R.
              </span>

              <p className="relative z-10 mt-5 text-[9px] uppercase tracking-[0.4em] text-[#8C8175]">
                A story in progress
              </p>

              <div className="absolute bottom-5 right-5 font-handwritten text-2xl text-[#9B6974]">
                Chapter 01
              </div>

            </div>
          </motion.div>

          {/* Handwritten note */}
          <motion.div
            initial={{ opacity: 0, rotate: -12 }}
            animate={{ opacity: 1, rotate: -8 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute -bottom-5 -left-9 z-10 rotate-[-8deg] bg-[#F3EEE5] px-5 py-3 shadow-md"
          >
            <p className="font-handwritten text-xl text-[#9B6974]">
              Made of ideas & curiosity
            </p>
          </motion.div>

          {/* Small side annotation */}
          <div className="absolute -right-8 top-16 hidden rotate-90 font-handwritten text-lg text-[#A58A76] md:block">
            A creative mind at work
          </div>

          {/* Floating icon */}
          <motion.div
            animate={{ rotate: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -right-5 -top-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#D8CBB9] bg-[#F3EEE5] text-[#9B6974]"
          >
            <Sparkles size={20} />
          </motion.div>

        </motion.div>

      </section>

      {/* BOTTOM INTRODUCTION STRIP */}
      <section className="border-y border-[#D8CFC2] px-6 py-7 md:px-16">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#A58A76]">
              Location
            </p>
            <p className="mt-2 text-xs tracking-wider">
              India
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#A58A76]">
              Exploring
            </p>
            <p className="mt-2 text-xs tracking-wider">
              AI · Development · Creativity
            </p>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:text-[#9B6974]"
          >
            Turn the page
            <ArrowDownRight
              size={15}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>

        </div>
      </section>

      {/* SCROLL INDICATOR */}
      <div className="flex justify-center py-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[#A58A76]"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">
            Keep exploring
          </span>
          <ArrowDown size={15} />
        </motion.div>
      </div>

    </main>
  );
}
