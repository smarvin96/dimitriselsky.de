import Image from "next/image";
import data from "../data.json";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

interface LinkCardProps {
  href: string;
  title: string;
  image?: string;
  maxWidth?: number;
}

const LinkCard = ({ href, title, image, maxWidth }: LinkCardProps) => {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full md:w-9/12 rounded-md hover:scale-105 transition-all bg-gray-100 mb-3"
    >
      <div className="flex text-center w-full">
        <div className="">
          {image && (
            <Image
              className="rounded-md"
              alt={title}
              src={image}
              width={69}
              height={69}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 m-1">
          {title}
        </h2>
      </div>
    </a>
  );
};



export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-4 md:px-8 ">
      <Image
        className="rounded-full hover:scale-105 transition-all"
        alt={data.name}
        src={data.avatar}
        width={120}
        height={120}
      />

      <h1 className="font-bold text-3xl md:text-4xl mt-4 mb-8 text-white text-center">
        {data.name}
      </h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} maxWidth={100} />
      ))}

      <div className="gap-4 flex justify-center items-center mt-6 ">
        {data.socials.map((link, index) => {
          if (link.title.includes("Youtube")) {
            return (
              <div key={index} className="hover:scale-150 transition-all">
              <a key={index} href={link.href}>
                <YouTubeIcon fontSize="large" />
              </a>
              </div>
            );
          }
          if (link.title.includes("Instagram")) {
            return (
              <div key={index} className="hover:scale-150 transition-all">
              <a key={index} href={link.href}>
                <InstagramIcon fontSize="large" />
              </a>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
