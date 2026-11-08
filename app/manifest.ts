import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Putri Tajudin | Information Engineering Student",
    short_name: "Putri Tajudin",
    description:
      "Putri Tajudin is an Information Engineering undergraduate at Universitas Gadjah Mada with experience in event coordination and digital content.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFF2",
    theme_color: "#FFFFF2",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "information engineering",
      "event operations",
      "social media",
      "student",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
