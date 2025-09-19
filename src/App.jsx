import React from "react";
import { projects } from "./data/projects";
import { publications } from "./data/publications";
import { research } from "./data/research";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 text-center shadow-lg">
        <h1 className="text-4xl font-bold">Sabib Ahmed</h1>
        <p className="mt-2 text-lg">Computer Science Student | AI & ML Enthusiast</p>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* About */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">About Me</h2>
          <p>
            I am a Computer Science student (Sylhet Engineering College, affiliated with SUST).
            My interests include Machine Learning, Computer Vision, and Competitive Programming.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">Applied Machine Learning Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="mb-3">{p.description}</p>
                <a href={p.link} target="_blank" className="text-indigo-600 font-semibold">🔗 Live Demo</a>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">Publications</h2>
          <ul className="space-y-4">
            {publications.map((pub, idx) => (
              <li key={idx} className="bg-white p-4 rounded-xl shadow-sm">
                <p className="font-bold">{pub.title}</p>
                <p className="text-sm">{pub.conference}</p>
                <p className="text-xs text-gray-500">Status: {pub.status}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Research */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">Research Experience</h2>
          <ul className="space-y-4">
            {research.map((r, idx) => (
              <li key={idx} className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-bold">{r.title}</h3>
                <p>{r.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="text-center py-6 bg-gray-100 mt-10">
        <p>© 2025 Sabib Ahmed — All Rights Reserved</p>
      </footer>
    </div>
  );
}
