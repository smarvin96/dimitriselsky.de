import Image from "next/image";
import data from "../data.json";

const LinkCard = ({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) => {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md  hover:scale-105 transition-all border border-gray-300 mb-3"
    >
      <div className="flex text-center w-full">
       { image && (
         <Image
         className="rounded-sm"
         alt={title}
         src={image}
         width={40}
         height={40}
       />
       )}
        <h2 className="font-semibold w-full tex-center">{title}</h2>
      </div>
    </a>
  );
};

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 text-xl mb-8">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}
