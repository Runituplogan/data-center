"use client";

import { useEffect, useRef, useState } from "react";
import { YDivMotion } from "./DivMotion";

const HeroCard = () => {
  const [videoUrl, setVideoUrl] = useState(null);
  const videoStream = "/video/hero-video.mp4";
  const videoRef = useRef(null);

  useEffect(() => {
    const makeURL = (object) => {
      return window.URL
        ? window.URL.createObjectURL(object)
        : window.webkitURL.createObjectURL(object);
    };

    const fetchVideo = async () => {
      try {
        let blob = await fetch(videoStream).then((r) => r.blob());
        setVideoUrl(makeURL(blob));
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    if (videoStream) {
      fetchVideo();
    }

    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl); // Cleanup URL object when component unmounts
      }
    };
  }, [videoStream]);

  // Play the video automatically when videoUrl is set
  useEffect(() => {
    if (videoUrl && videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.error("Auto-play failed:", error));
    }
  }, [videoUrl]);

  console.log(videoUrl);

  return (
    <div className="pt-20 pl-0 sm:px-10 md:px-20 lg:px-28 relative h-[100vh] flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-55 z-[2]"></div>
      <div className="relative z-10 self-start mt-0 md:mt-20">
        <YDivMotion>
          <h1 className="gilroy-bold pl-2 sm:pl-0 w-full text-left font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Datacenter Talent.
          </h1>
          <h1 className="w-full pl-2 sm:pl-0 text-left font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-3">
            <div className="px-2 inline-block relative overflow-hidden">
              <span className="relative z-10">Built for Scale.</span>
              <span className="animate-scale-in absolute"></span>
            </div>
          </h1>
        </YDivMotion>

        <YDivMotion delay={0.7}>
          <p className="text-left pl-2 sm:pl-0 gilroy-bold w-full text-white font-medium pb-40 text-[11px] whitespace-nowrap sm:text-base lg:text-lg xl:text-xl mt-5 md:mt-8">
            Engineering | Design | Tech | Build | Manufacturing | IT | Software
          </p>
        </YDivMotion>
      </div>
      {/* <h1 className="w-full text-center font-bold text-white text-3xl md:text-4xl lg:text-5xl md:leading-14">
        Connecting today's leading Talent to opportunities within the Datacenter
        Ecosystem
      </h1> */}

      <video
        playsInline
        autoPlay
        controls={false}
        muted
        loop
        // src={videoUrl}
        preload="auto"
        id="hero-video"
        ref={videoRef}
        className="object-cover w-full h-full absolute inset-0 z-0"
      >
        {/* <source src={videoUrl} type="video/mp4" /> */}
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* <img
        src={city}
        alt="city"
        className="absolute -bottom-1 right-[50%] translate-x-[50%] md:h-28 h-24"
      /> */}
    </div>
  );
};

export default HeroCard;
