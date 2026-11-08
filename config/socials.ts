import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@PutriTajudin",
    icon: Icons.gitHub,
    link: "https://github.com/PutriTajudin",
  },
  {
    name: "LinkedIn",
    username: "Putri Tajudin",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/putritajudin",
  },
  {
    name: "Gmail",
    username: "putritajudin5@gmail.com",
    icon: Icons.gmail,
    link: "mailto:putritajudin5@gmail.com",
  },
];
