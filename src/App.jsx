import React from 'react'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import PublicationCard from './components/PublicationCard'
import { projects } from './data/projects'
import { publications } from './data/publications'

export default function App(){
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* About */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About Me</h2>
          <p className="text-slate-700">
            I am a motivated and detail-oriented Computer Science student (B.Sc. in CSE, Sylhet Engineering College).
            I specialize in Python, machine learning, and computer vision with hands-on experience building deep learning models,
            deploying Streamlit demos, and contributing to research.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Applied Machine Learning Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map(p => <ProjectCard key={p.id} p={p} />)}
          </div>
        </section>

        {/* Publications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Publications</h2>
          <div className="grid sm:grid-cols-1 gap-4">
            {publications.map(pub => <PublicationCard key={pub.id} pub={pub} />)}
          </div>
        </section>

        {/* Research */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Research Experience</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold">Kidney Stone Classification (Ensemble-ASNet)</h3>
              <p className="text-slate-600">
                Weighted ensemble of InceptionV3, VGG16, MobileNetV2 with Grad-CAM++ for interpretability.
                Achieved 99.81% accuracy. (Submitted to IEEE EICT 2025)
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold">Pavement Crack Detection (YOLOv9)</h3>
              <p className="text-slate-600">
                Real-time detection of four crack types on custom dataset (1,200 images).
                F1-score 73.2%, mAP 70.4%. (Submitted to IEEE EICT 2025)
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold">Smoker Status Prediction (ML)</h3>
              <p className="text-slate-600">
                Predicted smoker status using demographic and health features.
                HEStacked model achieved 88.03% precision. (Accepted at ICERIE 2025)
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills & Problem Solving</h2>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="mb-2">Programming: C++, C, Python, Java, JavaScript, HTML, CSS</p>
            <p className="mb-2">ML & CV: PyTorch, TensorFlow, Keras, OpenCV, Scikit-learn</p>
            <p className="mb-2">Tools: Git, GitHub, VSCode, Jupyter, LaTeX</p>
            <p>
              Competitive programming: 2500+ problems solved across platforms (Codeforces, CodeChef, LeetCode).
              CodeChef rating: 1621, Codeforces solved: 2000+.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact & Links</h2>
          <div className="bg-white rounded-xl p-4 shadow-sm space-y-2">
            <p>Email: <a href="mailto:sabibahmed40@gmail.com" className="text-indigo-600">sabibahmed40@gmail.com</a></p>
            <p>Phone: +8801533364112</p>
            <p>LinkedIn: <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sabib-ahmed-147471251/" className="text-indigo-600">linkedin.com/in/sabib-ahmed</a></p>
            <p>GitHub: <a target="_blank" rel="noreferrer" href="https://github.com/Ahmedsabib" className="text-indigo-600">github.com/Ahmedsabib</a></p>
          </div>
        </section>
      </main>

      {/* Footer with social links */}
      <footer className="text-center py-6 text-slate-500">
        <p>© 2025 Sabib Ahmed — All Rights Reserved</p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a href="https://www.linkedin.com/in/sabib-ahmed-147471251/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/Ahmedsabib" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
            GitHub
          </a>
          <a href="https://codeforces.com/profile/Anchord" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
            Codeforces
          </a>
          <a href="https://www.codechef.com/users/ahmed_sabib" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
            CodeChef
          </a>
          <a href="https://leetcode.com/Anchord/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
            LeetCode
          </a>
        </div>
      </footer>
    </div>
  )
}
