"use client";
import Image from "next/image";

import placeholderImage from "../../public/static/images/placeholder.jpg";
interface AvatarProps {
  src: string | null | undefined;
}
const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div>
      <Image
        className="rounded-full"
        width={30}
        height={30}
        alt="Avatar"
        src={src || placeholderImage}
      />
    </div>
  );
};

export default Avatar;
