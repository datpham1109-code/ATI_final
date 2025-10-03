import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

const links = {
  twitter: "https://x.com/nguyeen3304",
  github: "https://github.com/nguyeeen/ATI_final",
  githubAccount: "https://github.com/nguyeeen",
};

export const siteConfig = {
  name: "Ielts Stimulation",
  description: "An open source Ielts Exam Online Test",
  url: "https://ieltstrek.vercel.app/",
  links,
  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Products",
          href: "/products",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Build a Board",
          href: "/build-a-board",
          description: "Build your own custom skateboard.",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Read our latest blog posts.",
          items: [],
        },
      ],
    },
    {
      title: "Account",
      href: "/dashboard/account",
      icon: "add",
    },
    {
      title: "Stores",
      href: "/dashboard/stores",
      icon: "store",
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "FreeCodeCamp",
          href: "https://www.freecodecamp.org/",
          external: true,
        },
        {
          title: "Cousera",
          href: "https://www.coursera.org/courseraplus?utm_medium=sem&utm_source=gg&utm_campaign=b2c_apac_x_coursera_ftcof_courseraplus_cx_dr_bau_gg_sem_bd-ex_s2_all_m_hyb_23-12_x&campaignid=20989858741&adgroupid=157016705446&device=c&keyword=coursera&matchtype=e&network=g&devicemodel=&creativeid=689547274242&assetgroupid=&targetid=kwd-36262515261&extensionid=&placement=&gad_source=1&gad_campaignid=20989858741&gbraid=0AAAAADdKX6aKCuJvnT7YqEV7RLelSCbXF&gclid=CjwKCAjw6P3GBhBVEiwAJPjmLlvSv5YgfhrCN-PQbhtfnza7dYM2_Kdc7Xwy-VqDw1SGmp6mswdl4xoCubAQAvD_BwE",
          external: true,
        },
        {
          title: "BuildYourOwn",
          href: "https://github.com/codecrafters-io/build-your-own-x",
          external: true,
        },
        {
          title: "Kaggle",
          href: "https://www.kaggle.com/datasets",
          external: true,
        },
        {
          title: "Google-AI-Studio",
          href: "https://ai.google.dev/aistudio",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/pages/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/pages/Contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/pages/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/pages/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Twitter",
          href: links.twitter,
          external: true,
        },
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
      ],
    },
    {
      title: "Lofi",
      items: [
        {
          title: "Beats to study to",
          href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
          external: true,
        },
        {
          title: "Beats to chill to",
          href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
          external: true,
        },
        {
          title: "A fresh start",
          href: "https://www.youtube.com/watch?v=rwionZbOryo",
          external: true,
        },
        {
          title: "Coffee to go",
          href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};
