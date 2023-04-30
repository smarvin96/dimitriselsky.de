import Image from "next/image";
import data from "../data.json";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "../components/TikTokIcon";
import SpotifyIcon from "../components/SpotifyIcon";

interface LinkCardProps {
  href: string;
  title: string;
  image?: string;
  maxWidth?: number;
}

const LinkCard = ({ href, title, image }: LinkCardProps) => {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full md:w-9/12 rounded-md hover:scale-105 transition-all bg-gray-100 mb-3"
    >
      <div className="flex text-center w-full">
        <div className="">
          {image && (
            <Image
              className="rounded-md object-cover"
              style={{ width: "5rem", height: "5rem" }}
              alt={title}
              src={image}
              height={69}
              width={100}
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
        className="shadow-xl rounded-full hover:scale-110 transition-all"
        alt={data.name}
        src={data.avatar}
        width={150}
        height={150}
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
              <div key={index} className="hover:scale-125 transition-all">
                <a key={index} href={link.href}>
                  <YouTubeIcon fontSize="large" style={{ fontSize: 60 }} />
                </a>
              </div>
            );
          }
          if (link.title.includes("Instagram")) {
            return (
              <div key={index} className="hover:scale-125 transition-all">
                <a key={index} href={link.href}>
                  <InstagramIcon fontSize="large" style={{ fontSize: 60 }} />
                </a>
              </div>
            );
          }
          if (link.title.includes("Tiktok")) {
            return (
              <div key={index} className="hover:scale-125 transition-all">
                <a key={index} href={link.href}>
                  <TikTokIcon />
                </a>
              </div>
            );
          }
          if (link.title.includes("Spotify")) {
            return (
              <div key={index} className="hover:scale-125 transition-all">
                <a key={index} href={link.href}>
                  <SpotifyIcon />
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
