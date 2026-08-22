import ProjectCard from './project-card';

export default function Projects() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-8/12 p-6 grid grid-cols-3 gap-3">
        <ProjectCard title="Kumi" description="Lorem Ipsum Dolor" />
        <ProjectCard
          title="Mocha"
          description="A light-weight opinionated microservice framework built from scratch using TCP"
        />
        <ProjectCard
          title="Macchiato"
          description="An object-relational mapping library for Java with JPA-like syntax"
        />
      </div>
    </div>
  );
}
