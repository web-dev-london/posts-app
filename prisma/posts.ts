import { Prisma } from "@prisma/client";


export const posts: Prisma.PostCreateInput[] = [
  {
    title: "The Future of Artificial Intelligence in Healthcare",
    description: "Artificial Intelligence (AI) is rapidly transforming the healthcare industry. From predictive diagnostics to personalized treatment plans, AI offers unprecedented possibilities to improve patient outcomes and reduce costs. This post explores the current trends and future potential of AI in healthcare, highlighting key innovations and challenges.",
    status: "OPEN",
    createdAt: new Date('2024-01-12T10:15:30Z'),
    updatedAt: new Date('2024-01-12T10:15:30Z')
  },
  {
    title: "Building a Sustainable Business Model in E-Commerce",
    description: "E-commerce is experiencing exponential growth, but with it comes challenges in sustainability. This post discusses strategies for creating eco-friendly, financially viable business models in the e-commerce industry. Topics include sustainable sourcing, packaging, and the role of consumer behavior in driving change.",
    status: "IN_PROGRESS",
    createdAt: new Date('2023-11-20T08:45:00Z'),
    updatedAt: new Date('2024-03-01T15:22:10Z')
  },
  {
    title: "The Impact of Remote Work on Employee Productivity",
    description: "Since the global shift to remote work, businesses and employees alike have been navigating its pros and cons. This post examines the effects of remote work on productivity, team collaboration, and work-life balance, based on recent studies and expert insights.",
    status: "CLOSED",
    createdAt: new Date('2023-08-15T14:30:50Z'),
    updatedAt: new Date('2023-10-01T12:10:30Z')
  },
  {
    title: "Cybersecurity Trends to Watch in 2024",
    description: "As cyber threats evolve, businesses must stay ahead of emerging trends in cybersecurity. This article dives into the latest strategies and technologies companies are using to protect their data, including AI-driven security systems, zero-trust architecture, and cloud security advancements.",
    status: "OPEN",
    createdAt: new Date('2024-02-10T09:20:45Z'),
    updatedAt: new Date('2024-02-10T09:20:45Z')
  },
  {
    title: "The Role of Blockchain in Financial Services",
    description: "Blockchain technology is revolutionizing financial services by enabling more secure, transparent, and efficient transactions. This post explores the ways in which blockchain is being integrated into banking, cross-border payments, and smart contracts, as well as the regulatory and technical challenges facing the industry.",
    status: "IN_PROGRESS",
    createdAt: new Date('2023-06-05T13:55:00Z'),
    updatedAt: new Date('2023-09-18T17:45:15Z')
  },
  {
    title: "Advancements in Renewable Energy Technologies",
    description: "The transition to renewable energy sources is critical for addressing climate change. This post reviews the latest advancements in renewable energy technologies, including solar, wind, and hydroelectric power, and how they are shaping the future of global energy consumption.",
    status: "CLOSED",
    createdAt: new Date('2023-04-22T07:30:20Z'),
    updatedAt: new Date('2023-07-30T16:12:55Z')
  },
  {
    title: "How Social Media is Shaping Consumer Behavior",
    description: "Social media platforms are powerful tools for influencing consumer decisions. This article explores how companies are leveraging platforms like Instagram, TikTok, and Facebook to shape purchasing habits, create brand loyalty, and engage with consumers in innovative ways.",
    status: "OPEN",
    createdAt: new Date('2024-03-11T11:45:00Z'),
    updatedAt: new Date('2024-03-11T11:45:00Z')
  },
  {
    title: "5G Networks: What They Mean for the Future of Connectivity",
    description: "5G technology is the next frontier in mobile connectivity, promising faster speeds, lower latency, and the potential for new innovations in industries such as autonomous driving, smart cities, and virtual reality. This post delves into the practical applications and future impact of 5G.",
    status: "IN_PROGRESS",
    createdAt: new Date('2023-09-25T15:30:00Z'),
    updatedAt: new Date('2024-01-30T12:50:15Z')
  },
  {
    title: "The Challenges of Urbanization in the 21st Century",
    description: "Urbanization is a global phenomenon, with more than half of the world's population now living in cities. This post examines the social, economic, and environmental challenges of rapid urban growth, including housing shortages, traffic congestion, and air pollution, and offers potential solutions for sustainable urban development.",
    status: "CLOSED",
    createdAt: new Date('2023-07-10T09:40:30Z'),
    updatedAt: new Date('2023-09-12T14:55:45Z')
  },
  {
    title: "Exploring the Intersection of Art and Technology",
    description: "Technology is redefining the art world, from digital installations to NFTs (Non-Fungible Tokens). This post explores how artists and technologists are collaborating to push the boundaries of creativity, and what this means for the future of artistic expression.",
    status: "OPEN",
    createdAt: new Date('2024-05-01T16:10:20Z'),
    updatedAt: new Date('2024-05-01T16:10:20Z')
  },
  {
    title: "The Evolution of Electric Vehicles",
    description: "Electric vehicles (EVs) are transforming the auto industry, offering cleaner, more efficient alternatives to traditional gasoline-powered cars. This article discusses the latest advancements in EV technology, the growing infrastructure of charging stations, and the impact of government policies on accelerating the adoption of electric cars.",
    status: "IN_PROGRESS",
    createdAt: new Date('2023-06-18T07:20:10Z'),
    updatedAt: new Date('2023-10-29T19:00:00Z')
  },
  {
    title: "Smart Cities: Innovations in Urban Living",
    description: "Smart cities integrate technology to improve the quality of life for their residents. From smart grids to autonomous public transport, this post examines how data-driven solutions are transforming urban spaces to be more efficient, sustainable, and livable.",
    status: "CLOSED",
    createdAt: new Date('2023-05-22T08:30:45Z'),
    updatedAt: new Date('2023-08-11T16:55:30Z')
  },
  {
    title: "AI in Education: Opportunities and Challenges",
    description: "Artificial Intelligence has begun to play a significant role in education, offering personalized learning experiences, automated grading systems, and data-driven insights for teachers. This post explores the opportunities and challenges of integrating AI into the classroom and its potential to reshape the future of education.",
    status: "OPEN",
    createdAt: new Date('2024-04-20T14:20:00Z'),
    updatedAt: new Date('2024-04-20T14:20:00Z')
  },
  {
    title: "Understanding Climate Change: A Global Crisis",
    description: "Climate change is one of the most pressing issues of our time. This post provides a comprehensive overview of the causes and consequences of global warming, the international response, and what individuals, governments, and businesses can do to mitigate its impact.",
    status: "IN_PROGRESS",
    createdAt: new Date('2023-10-01T09:50:25Z'),
    updatedAt: new Date('2024-02-14T18:22:50Z')
  },
  {
    title: "Mental Health in the Workplace: Breaking the Stigma",
    description: "Mental health is becoming a central focus in workplace culture as more companies recognize the importance of employee well-being. This article discusses the challenges of addressing mental health in a professional setting and provides insights into how businesses can foster a supportive environment.",
    status: "CLOSED",
    createdAt: new Date('2023-05-15T07:30:30Z'),
    updatedAt: new Date('2023-07-25T14:45:20Z')
  },
  {
    title: "The Gig Economy: Redefining Employment in the Digital Age",
    description: "The gig economy, fueled by platforms like Uber, Airbnb, and Upwork, is transforming how people work. This post examines the benefits and challenges of gig work, including flexibility, job insecurity, and the need for new labor policies in the face of a rapidly changing economy.",
    status: "OPEN",
    createdAt: new Date('2024-06-03T12:30:40Z'),
    updatedAt: new Date('2024-06-03T12:30:40Z')
  },
  {
    title: "The Ethics of Artificial Intelligence",
    description: "As AI becomes more integrated into daily life, ethical questions arise. This post discusses the moral implications of AI, including privacy concerns, bias in algorithms, and the potential for AI to be used in harmful ways. It also explores how governments and tech companies are addressing these issues.",
    status: "IN_PROGRESS",
    createdAt: new Date('2023-09-07T10:10:00Z'),
    updatedAt: new Date('2023-12-01T17:30:15Z'),
  },
  {
    title: "The Importance of Open Source Software",
    description: "Open source software is an important part of the software development lifecycle. This post explores the key factors that contribute to its success and its impact on the world.",
    status: "OPEN",
    createdAt: new Date('2024-01-12T10:15:30Z'),
    updatedAt: new Date('2024-01-12T10:15:30Z')
  },
  {
    title: "The Importance of Artificial Intelligence",
    description: "Artificial intelligence is an important part of the field of technology. This post explores the key factors that contribute to its success and its impact on the world.",
    status: "IN_PROGRESS",
    createdAt: new Date('2023-11-15T11:30:00Z'),
    updatedAt: new Date('2023-11-15T11:30:00Z'),
  },
  {
    title: "The Importance of Cloud Computing",
    description: "Cloud computing is an important part of the field of technology. This post explores the key factors that contribute to its success and its impact on the world.",
    status: "CLOSED",
    createdAt: new Date('2023-08-18T14:45:00Z'),
    updatedAt: new Date('2023-08-18T14:45:00Z'),
  },
  {
    title: "The Importance of Cybersecurity",
    description: "Cybersecurity is an important part of the field of technology. This post explores the key factors that contribute to its success and its impact on the world.",
    status: "OPEN",
    createdAt: new Date('2024-02-20T16:20:00Z'),
    updatedAt: new Date('2024-02-20T16:20:00Z'),
  },
  {
    title: "The Importance of Robotics",
    description: "Robotics is an important part of the field of technology. This post explores the key factors that contribute to its success and its impact on the world.",
    status: "IN_PROGRESS",
    createdAt: new Date('2023-12-25T18:30:00Z'),
    updatedAt: new Date('2023-12-25T18:30:00Z'),
  },
  {
    title: "The Importance of Quantum Computing",
    description: "Quantum computing is an important part of the field of technology. This post explores the key factors that contribute to its success and its impact on the world.",
    status: "CLOSED",
    createdAt: new Date('2023-07-30T19:45:00Z'),
    updatedAt: new Date('2023-07-30T19:45:00Z'),
  },
  {
    title: "The Importance of Quantum Computing",
    description: "Quantum computing is an important part of the field of technology. This post explores the key factors that contribute to its success and its impact on the world.",
    status: "OPEN",
    createdAt: new Date('2024-02-20T16:20:00Z'),
    updatedAt: new Date('2024-02-20T16:20:00Z'),
  }
]