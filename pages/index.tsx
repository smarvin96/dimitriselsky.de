import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex justify-center mx-auto w-full mt-16">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={80}
        height={80}
      />
      <h1 className="font-semibold">{data.name}</h1>
    </div>
  );
}
