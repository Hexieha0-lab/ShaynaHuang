import React from "react";

export default function ResearchSection() {
  return (
    <section className="w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6 display-script">About My Research</h2>
      <div className="md:flex md:gap-10">
        <div className="md:w-1/2 mb-6 md:mb-0 text-lg text-gray-900 leading-relaxed">
          My research explores <span className="font-bold text-accent">human-computer interaction</span> and the design of <span className="font-bold text-accent">intuitive experiences</span>. I focus on bridging technology and people, creating prototypes and tools that empower users and promote <span className="font-bold">well-being</span>.
        </div>
        <ul className="md:w-1/2 md:pl-8 space-y-4 text-md text-gray-900">
          <li><span className="font-bold text-accent">Core Areas:</span></li>
          <li><span className="font-bold">Human-Computer Interaction (HCI)</span></li>
          <li><span className="font-bold">Interaction Design </span>（Product & Tool Prototyping)</li>
          <li><span className="font-bold">Calm Technology, Assistive UX, Embodied Interfaces</span></li>
          <li><span className="font-bold">Visualization & Creative Coding</span></li>
          <li className="mt-3">
            <a href="#" className="text-accent hover:underline font-semibold">See my full publications →</a>
          </li>
        </ul>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="https://scholar.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-white text-accent rounded-lg shadow-soft hover:bg-accent/5 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
          </svg>
          Google Scholar
        </a>
        <a
          href="/pdfs/CV_Huang.pdf"
          className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-lg shadow-soft hover:bg-accent-dark transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download CV
        </a>
      </div>
    </section>
  );
}
