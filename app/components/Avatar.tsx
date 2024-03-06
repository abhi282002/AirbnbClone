"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <div>
      <Image
        className="rounded-full"
        width={30}
        height={30}
        alt="Avatar"
        src={"/images/placeholder.jpg"}
      />
    </div>
  );
};

export default Avatar;
