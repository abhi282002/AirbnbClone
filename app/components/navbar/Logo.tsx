"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import airbnb from "../../../public/static/images/logo.png";
const Logo = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => router.push("/")}
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height={"100"}
        width={"100"}
        src={airbnb}
      />
    </div>
  );
};

export default Logo;
