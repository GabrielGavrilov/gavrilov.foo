interface Props {
  banner?: any;
  title: string;
  description: string;
  languages: string;
  url: string;
}

export default function ProjectCard({
  banner,
  title,
  description,
  languages,
  url,
}: Props) {
  function extractLanguages() {
    return languages?.split(',');
  }

  return (
    <div className="w-[330px] h-[425px] shadow-lg bg-white">
      <a href={url} target="_blank">
        <div className="w-full h-1/2 bg-gray-300">
          <img src={banner} className="h-full w-full object-cover" />
        </div>
        <div className="my-2 p-2">
          <p className="text-2xl">{title}</p>
          <p className="mt-2">{description}</p>
          <span className="flex mt-4">
            {extractLanguages().map((language) => (
              <p className="px-3 mr-2 bg-gray-200 rounded-xl">{language}</p>
            ))}
          </span>
        </div>
      </a>
    </div>
  );
}
