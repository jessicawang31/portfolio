import Header from './components/Header';
import Footer from './components/Footer';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';
import { projects } from './data/projects';
import { skills } from './data/skills';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="flex-1">
        <ProjectGrid projects={projects} />
        <Skills groups={skills} />
      </main>
      <Footer />
    </div>
  );
}
