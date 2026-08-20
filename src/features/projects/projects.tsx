import ProjectCard from './project-card';

export default function Projects() {
  return (
    <div className="w-full h-full bg-slate-50 flex justify-center">
      <div className="w-8/12 p-6 grid grid-cols-3 gap-3">
        <ProjectCard title="Mocha" description="Lorem Ipsum Dolor" />
        <ProjectCard title="Mocha" description="Lorem Ipsum Dolor" />
        <ProjectCard title="Mocha" description="Lorem Ipsum Dolor" />
        <ProjectCard title="Mocha" description="Lorem Ipsum Dolor" />
        <ProjectCard title="Mocha" description="Lorem Ipsum Dolor" />
        <ProjectCard title="Mocha" description="Lorem Ipsum Dolor" />
      </div>
    </div>
  );
}
