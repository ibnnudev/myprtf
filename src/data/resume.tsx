import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ibnnu",
  initials: "Ibnnu",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Web Developer. Let's see what we can build together.",
  summary:
    "A tech enthusiast from Indonesia with 3+ years experiences. I specialize in website development. I'm also experienced in Database Management and have worked on numerous projects. I'm eager to learn new technologies and am passionate about creating great user experiences. If you're looking for someone with an eye for detail, I'm your guy!",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "Tailwind CSS",
    "PostgreSQL",
    "MySQL",
    "API Development",
    "Database Management",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ibnnudev@gmail.com",
    tel: "+6281515144981",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ibnnudev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ibnnudev/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Medeva Multi Telenta",
      href: "https://medeva.tech/",
      badges: ['current'],
      location: "On Site",
      title: "Full Stack Web Developer",
      logoUrl: "/medeva.png",
      start: "May 2024",
      end: "Now",
      description:
        "I developed key features for a web platform, including landing pages and a CMS for managing resources. I structured the application using modular imports and built APIs to connect various modules. I optimized the queue interface for smoother operations and designed an analytics dashboard for the admin section. I also created an attendance feature to track schedules for doctors and staff and built a beauty medical record system for better patient management.",
    },
    {
      company: "Institute of Tropical Disease - UNAIR",
      badges: [],
      href: "https://itd.unair.ac.id/wp/com",
      location: "Surabaya, Indonesia",
      title: "Full Stack Web Developer",
      logoUrl: "/unair.png",
      start: "May 2023",
      end: "May 2024",
      description:
        "Accomplished the creation of Sivemo, a website for collecting and categorizing dengue virus data for research purposes, by implementing features such as sample management, morphotype and serotype master management, import/export capabilities for samples, and a GIS map for enhanced data visualization.",
    },
    {
      company: "Research Center on Global Emerging - UNAIR",
      href: "https://rc-gerid.unair.ac.id/id/",
      badges: [],
      location: "Surabaya, Indonesia",
      title: "Full Stack Web Developer",
      logoUrl: "/rcgerid.png",
      start: "May 2023",
      end: "May 2024",
      description:
        "Accomplished the development of a website to manage sample data on virus spread in Indonesia, aimed at tracing massive cases for future preventive actions, by utilizing JavaScript, Laravel, and database design to ensure effective data management and analysis",
    },
    {
      company: "NaZMa Office",
      href: "https://nazmaoffice.com/",
      badges: [],
      location: "Yogyakarta, Indonesia",
      title: "Full Stack Web Developer",
      logoUrl: "/nazma.png",
      start: "August 2023",
      end: "January 2024",
      description:
        "I've created a company profile, a Learning Management System (LMS), and a portfolio for the CEO. The company profile presents the business's core values and offerings, the LMS provides an organized platform for training and development, and the portfolio highlights the CEO's accomplishments and leadership experience.",
    },
    {
      company: "Personal Beauty Aesthetic Clinic",
      href: "https://personalbeauty.co.id/",
      badges: [],
      location: "Jember, Indonesia",
      title: "Full Stack Web Developer",
      logoUrl: "/pb.png",
      start: "July 2022",
      end: "April 2023",
      description:
        "Accomplished the development of a secure and efficient top- up system for Interect, as measured by enhanced user satisfaction and streamlined transactions, by utilizing Laravel and Tailwind CSS to implement user authentication, dynamic top- up options, payment gateway integration, transaction history, real-time notifications, an admin dashboard, and a responsive UI / UX design.",
    },
    {
      company: "UGT System Integrator Development",
      href: "https://usid.co.id/",
      badges: [],
      location: "Pasuruan, Indonesia",
      title: "Full Stack Web Developer",
      logoUrl: "/usid.png",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    }
  ],
  education: [
    {
      school: "SMKN 1 Gending",
      href: "https://www.smkn1gending.sch.id/",
      degree: "Majoring Information Technology",
      logoUrl: "/smk.jpeg",
      gpa: "",
      start: "2017",
      end: "2020",
    },
    {
      school: "Jember State Polytechnic",
      href: "https://polije.ac.id/",
      degree: "Bachelor's Degree of Information Technology",
      logoUrl: "/polije.png",
      gpa: "3.92 | Cum Laude",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  freelances: [
    {
      title: "Banoli",
      dates: "June 1th - 5th July, 2024",
      location: "Malang, Indonesia",
      description:
        `"I've developed an eCommerce website for vehicle parts stores, featuring a PoS system for in-store transactions, inventory and warehouse management, secure payment processing, and a delivery order system. This solution streamlines operations and enhances efficiency in managing vehicle parts sales.`,
      image:
        "",
      mlh: "#",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ibnnudev/posmotopart",
        },
      ],
    },
    {
      title: "Medical Record Media Transfer",
      dates: "May 3th - 6th, 2024",
      location: "Jember, Indonesia",
      description:
        `Electronic medical record (RME) destruction is an important step to protect patient privacy and reduce the risk of data misuse.`,
      image:
        "",
      mlh: "#",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ibnnudev/ci-alihmedia",
        },
      ],
    },
    {
      title: "Dapur Mami",
      dates: "May 9th - 19th, 2023",
      location: "Jember, Indonesia",
      description:
        `I've developed an eCommerce website with key business features, including a reservation system, integrated PoS for in-store transactions, inventory management, secure transaction processing, and a delivery order system. This all-in-one solution optimizes operations and improves the customer experience`,
      image:
        "https://github.com/ibnnudev/dapur-mami/blob/ca7bbd0fb0e38ed11bbf757e3923a69d98e27507/public/assets/images/logo.png?raw=true",
      mlh: "#",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ibnnudev/dapur-mami",
        },
      ],
    },
    {
      title: "HyKids",
      dates: "Mar 1th - 9th Apr, 2024",
      location: "Jember, Indonesia",
      description:
        `I created a company profile for a clothing store, highlighting its brand identity, product offerings, and key business information. The profile emphasizes the store's commitment to quality, style, and customer satisfaction, helping to build a strong online and offline presence`,
      image:
        "https://github.com/ibnnudev/hykids/blob/main/public/assets/logo.png?raw=true",
      mlh: "#",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ibnnudev/hykids",
        },
      ],
    },
    {
      title: "Yashinta Sekarwangi",
      dates: "Oct 10th - 1th Nov, 2023",
      location: "Yogyakarta, Indonesia",
      description:
        `I've developed a portfolio website for a DPD candidate (Caleg), showcasing their background, achievements, and campaign platform. The website is designed to enhance their visibility and engagement with the public, offering a clear and professional presentation of their political vision.`,
      image:
        "https://github.com/ibnnudev/yashinta-landing/blob/main/public/asset/logo-tab-red.png?raw=true",
      mlh: "#",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ibnnudev/yashinta-landing",
        },
      ],
    },
  ],
} as const;
