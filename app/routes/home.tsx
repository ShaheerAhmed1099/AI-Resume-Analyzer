import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "AI-based Resume Analyzer" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    
    <section className="main-section">
      <div className="page-heading">
        <h1>Track your Job Applications and Resume Ratings</h1>
        <h2>Review your submissions and get AI-powered feedback</h2>
      </div>
    </section>

  </main>;
}
