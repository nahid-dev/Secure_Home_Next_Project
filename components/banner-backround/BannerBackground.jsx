import Image from "next/image";
import React from "react";

const BannerBackground = ({ bannerImage, children }) => {
  return (
    <>
      <Image
        src={bannerImage}
        alt="Main banner image"
        quality={100}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
        }}
      ></Image>
      {children}
    </>
  );
};

export default BannerBackground;
