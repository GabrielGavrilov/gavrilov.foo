interface Props {
  title: string;
  description: string;
  languages?: string;
}

export default function ProjectCard({ title, description, languages }: Props) {
  function extractLanguages() {
    return languages?.split(',');
  }

  return (
    <div className="w-[330px] h-[425px] shadow-lg bg-white">
      <div className="w-full h-1/2 bg-gray-300"></div>
      <div className="my-2 p-2">
        <p className="text-2xl">{title}</p>
        <p className="mt-2">{description}</p>
      </div>
      <div></div>
    </div>
  );
}
