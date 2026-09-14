import ProjectCard from './project-card';

export default function Projects() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-8/12 p-6 grid grid-cols-3 gap-3">
        <ProjectCard
          title="Kumi"
          description="An AI agent orchestration platform with custom tool calling capabilities through the use of HTTP"
          languages="C#,.NET,TypeScript,React"
        />
        <ProjectCard
          title="Mocha"
          description="A light-weight opinionated microservice framework built from scratch using TCP"
          languages="Java"
        />
        <ProjectCard
          title="Macchiato"
          description="An object-relational mapping library with JPA-like syntax for Java"
          languages="Java"
        />
      </div>
    </div>
  );
}
