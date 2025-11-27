import { DitherLink } from "./components/DitherLink";

export default function App() {
  return (
    <div className="min-h-screen bg-[#2b2b2b] text-[#b8b8b8] px-6 py-8 md:px-12 md:py-12 lg:px-20 lg:py-16">
      {/* Logo */}
      <a 
        href="https://www.instagram.com/ohmdreams/#" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed top-6 left-6 md:top-8 md:left-12 lg:top-12 lg:left-20 text-white hover:opacity-70 transition-opacity duration-300 z-10"
        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
      >
        Ohm.
      </a>

      {/* Content */}
      <div className="max-w-3xl pt-16 md:pt-20 animate-fadeIn">
        <p className="mb-8 md:mb-10 text-lg md:text-xl lg:text-2xl leading-relaxed">
          20, awake and figuring it out.
        </p>

        <p className="mb-8 md:mb-10 text-base md:text-lg lg:text-xl leading-relaxed">
          hi. i'm ohm. a second year maths and computing student at{" "}
          <DitherLink href="https://www.msruas.ac.in/">ruas</DitherLink>, trying to build a life around startups.
        </p>

        <p className="mb-8 md:mb-10 text-base md:text-lg lg:text-xl leading-relaxed">
          i spend my days in classes and problem sets, and my nights building small internet projects that solves my problem, writing raw notes about money, work, things i know / i dont, and the tools that keep me going.
        </p>

        <p className="mb-8 md:mb-10 text-base md:text-lg lg:text-xl leading-relaxed">
          last year i worked with{" "}
          <DitherLink href="https://portmessenger.com/">port, by numberless</DitherLink>{" "}
          on marketing, design, copy, and early stage mess. now i'm slowly learning/helping founders and creators with landing pages, systems, and words that actually sound like them.
        </p>

        <p className="mb-8 md:mb-10 text-base md:text-lg lg:text-xl leading-relaxed">
          i like minimal interfaces, tasteful designs, and music. i shoot photos when i need to breathe and i write when i need to understand.
        </p>

        <p className="mb-8 md:mb-10 text-base md:text-lg lg:text-xl leading-relaxed">
          right now i'm: building in public across{" "}
          <DitherLink href="https://x.com/ohmdreams">twitter</DitherLink>,{" "}
          <DitherLink href="https://farcaster.xyz/ohmdreams">farcaster</DitherLink>, and{" "}
          <DitherLink href="https://www.linkedin.com/in/ohmdreams/">linkedin</DitherLink>. learning how to edit videos+photos. sometimes learning/helping{" "}
          <DitherLink href="https://dayadzn.in/">daya</DitherLink>,{" "}
          <DitherLink href="https://www.instagram.com/cultureghalib/?hl=en">divyansh</DitherLink> and{" "}
          <DitherLink href="https://www.instagram.com/charan.ex3/?hl=en">charan</DitherLink>{" "}
          in creating tasteful product videos ({" "}
          <DitherLink href="https://x.com/runable_hq/status/1986092697464234053?s=20">last cooking session</DitherLink>
          ).
        </p>
      </div>
    </div>
  );
}
