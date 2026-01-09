export const portfolioData = {
  personal: {
    name: "Rahul Kumar",
    tagline: "Full Stack Developer & DevOps Engineer",
    email: "rahul@cloudcoderhub.in",
    phone: "+91 9006308804",
    location: "Katauli, Bihar, India",
    github: "https://github.com/Rahulkumar6777",
    linkedin: "https://www.linkedin.com/in/rahul-kumar-003aa2316/",
    twitter: "",
    "picture": "https://api-devload.cloudcoderhub.in/public/695f91881242b7ee566ffeea/176787154576659db7e7e05eb043d7fee2d91.jpeg"
  },

  about: {
    title: "About Me",
    description:
      "I'm a passionate Backend Developer with strong expertise in building scalable, secure and high-performance server-side applications. I love designing efficient APIs, managing databases, and implementing authentication, authorization, background jobs, and cloud deployments. Along with backend, I also work on DevOps to automate workflows and ensure smooth deployments.",

    skills: [
      // Backend Core
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs & Microservices", level: 88 },

      // Security & Auth
      { name: "JWT / Authentication", level: 85 },

      // Database
      { name: "MongoDB", level: 88 },

      // DevOps
      { name: "Docker", level: 85 },
      { name: "CI/CD (GitHub Actions)", level: 82 },
      { name: "Linux", level: 80 },
      { name: "Nginx", level: 78 },

      // Tools
      { name: "Git & GitHub", level: 90 },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Social-Media Platform",
      description: "A modern social media platform with real-time messaging, live notifications, instant like updates, and interactive post sharing. It delivers a smooth, engaging experience with fast performance and real-time user interactions.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Docker", "GitHub Action", "Nginx"],
      type: "fullstack",
      image: "https://api-devload.cloudcoderhub.in/public/695f91881242b7ee566ffeea/1767977691765bcf60c01dd79cebc65535d87.png",
      github: "https://github.com/Rahulkumar6777/zapnet",
      live: "https://zapnet.cloudcoderhub.in"
    },
    {
      id: 2,
      title: "DevLoad - Developer File Hosting & Storage Platform",
      description:
        "A self-hosted alternative to S3 providing secure project-wise storage using MinIO. Supports file uploads, signed URLs, bucket isolation per project, email alerts, Redis-based job queueing, Dockerised workers, CI/CD automation, domain integration, and production-grade infrastructure. Built to offer affordable file hosting with 5 projects, 5GB storage, and 100GB bandwidth.",
      tech: [
        "Node.js",
        "MinIO",
        "Redis",
        "socket.io",
        "Docker",
        "Nginx",
        "Ubuntu",
        "CI/CD",
        "Cloudflare"
      ],
      type: "devops",
      image: "https://api-devload.cloudcoderhub.in/public/695f91881242b7ee566ffeea/176797767201909a04ed66600d34765d77694.png",
      github: "https://github.com/Rahulkumar6777/DevLoad",
      live: 'https://devload.cloudcoderhub.in'
    },
    {
      id: 3,
      title: "GalleryHub – Cloud Media Gallery Platform",
      description:
        "A cloud-based image & media gallery platform built on top of DevLoad storage infrastructure. Supports project-wise galleries, secure uploads via signed URLs, public/private media sharing, automatic bucket isolation, and optimized delivery with domain + SSL integration.",
      tech: [
        "React",
        "Node.js",
        "express",
        "DevLoad",
        "Docker",
        "CI/CD"
      ],
      type: "fullstack",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      github: "https://github.com/Rahulkumar6777/galleryhub",
      live: 'https://galleryhub.cloudcoderhub.in'
    }
  ]
};