import ProjectCard from './project-card';
import mocha from '../../assets/mocha.png';
import macchiato from '../../assets/macchiato.jpg';
import kumi from '../../assets/kumi.png';

export default function Projects() {
  return (
    <>
      <title>Projects - Gabriel Gavrilov</title>
      <div className="w-full h-full flex justify-center">
        <div className="w-9/12 p-6 grid gap-6 xl:grid-cols-3 xl:w-9/12 lg:grid-cols-2 lg:w-9/12 md:grid-cols-1 md:w-1/2">
          <ProjectCard
            banner={kumi}
            title="Kumi"
            description="A Copilot-like AI agent orchestration platform with custom tool calling capabilities through the use of HTTP"
            languages="C#,.NET,TypeScript,React"
            url="https://github.com/GabrielGavrilov/Kumi"
          />
          <ProjectCard
            banner={macchiato}
            title="Macchiato"
            description="An object-relational mapping library with JPA-like syntax for Java"
            languages="Java"
            url="https://github.com/GabrielGavrilov/macchiato"
          />
          <ProjectCard
            banner={mocha}
            title="Mocha"
            description="A light-weight opinionated microservice framework built from scratch using TCP with a custom dependency management system"
            languages="Java"
            url="https://github.com/GabrielGavrilov/mocha"
          />
        </div>
      </div>
    </>
  );
}
