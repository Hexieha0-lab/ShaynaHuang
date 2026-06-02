import React from "react";

export default function AboutMeAcademic() {
  return (
    <section className="w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6 display-script">About Me</h2>
      <div className="fade-in-up space-y-4 text-lg text-gray-900 leading-relaxed">
        <p>
          🎓 I am Xuehan Huang (黄雪晗), a master's student graduated from the Department of Mechanical Engineering, <span className="text-black font-semibold">The University of Hong Kong</span>.
        </p>
        <p>
          📚 I received my B.Eng. from Nanjing University of Science and Technology. Subsequently, I collaborated with {' '}
          <a href="https://raylc.org/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Dr. RAY LC</a>
          {' '}and{' '}
          <a href="https://scholar.google.com/citations?hl=en&user=TuqWAMQAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Prof. Fiona Nah</a>
          {' '}on projects concerning <span className="text-black font-semibold">AI-mediated Communication</span>. Currently, I am a Research Assistant in Dept. of Computing at PolyU, working on <span className="text-black font-semibold">Web-based XR Applications</span> under the supervision of <a href="https://www.polyu.edu.hk/comp/people/academic-staff/prof-li-chen-richard/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Prof. Richard Li</a>. Concurrently, I am also a part-time intern at the Immersive Design Group, where I focus on <span className="text-black font-semibold">MR interactive systems</span> supervised by{' '}
          <a href="https://immersivedesignresearch.com/seungwoo" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Prof. Seungwoo Je</a>.
        </p>
        <p>
          In daily lives, I am a badminton lover🏸, a photo enthusiast📷, a professional thinker and a non-professional writer✍️.
        </p>
        <p>
        📢 I am currently seeking <span className="text-black font-semibold">PhD</span> opportunities in HCI-related fields. Please feel free to reach out if you are interested 😊.
        </p>
      </div>
    </section>
  )
}


