const jobs = [{
    title: "Software Engineer",
    company: "TechNova",
    location: "Bangalore, India",
    description: "Develop scalable applications, debug code, and collaborate with cross-functional teams to enhance system performance.",
    salary: 90,
    type: "Full-Time",
    positions: "5",
    time: "2 days ago"
},
{
    title: "Frontend Developer",
    company: "InnoSoft",
    location: "Remote",
    description: "Build modern, responsive UIs using React and Tailwind CSS, ensuring seamless user experience across devices.",
    salary: 75,
    type: "Full-Time",
    positions: "3",
    time: "1 week ago"
},
{
    title: "Data Analyst",
    company: "DataBridge",
    location: "Mumbai, India",
    description: "Analyze large datasets, create visual reports, and provide actionable insights to improve business decisions.",
    salary: 82,
    type: "Full-Time",
    positions: "4",
    time: "3 days ago"
},
{
    title: "Backend Developer",
    company: "CodeCraft",
    location: "Hyderabad, India",
    description: "Develop and maintain RESTful APIs, optimize database performance, and ensure secure backend architecture.",
    salary: 98,
    type: "Full-Time",
    positions: "6",
    time: "5 days ago"
},
{
    title: "UI/UX Designer",
    company: "PixelWorks",
    location: "Delhi, India",
    description: "Design intuitive user interfaces, conduct user research, and improve accessibility and aesthetics of web and mobile apps.",
    salary: 68,
    type: "Full-Time",
    positions: "2",
    time: "1 week ago"
},
{
    title: "DevOps Engineer",
    company: "CloudSphere",
    location: "Pune, India",
    description: "Manage cloud infrastructure, automate CI/CD pipelines, and improve system scalability and reliability.",
    salary: 105,
    type: "Full-Time",
    positions: "3",
    time: "4 days ago"
},
{
    title: "Mobile Developer",
    company: "AppTech",
    location: "Chennai, India",
    description: "Develop mobile applications using Flutter and React Native, ensuring high performance and responsiveness.",
    salary: 88,
    type: "Full-Time",
    positions: "4",
    time: "2 days ago"
},
{
    title: "Machine Learning Engineer",
    company: "AI Solutions",
    location: "Bangalore, India",
    description: "Build machine learning models, analyze data, and implement AI algorithms to improve business processes.",
    salary: 115,
    type: "Full-Time",
    positions: "2",
    time: "1 day ago"
},
{
    title: "Product Manager",
    company: "InnovateTech",
    location: "Remote",
    description: "Lead product development teams, define product roadmaps, and ensure successful launch of new products.",
    salary: 130,
    type: "Full-Time",
    positions: "3",
    time: "3 days ago"
},
{
    title: "Quality Assurance Engineer",
    company: "TestPro",
    location: "Hyderabad, India",
    description: "Create test plans, execute tests, and identify bugs to ensure high-quality software products.",
    salary: 72,
    type: "Full-Time",
    positions: "5",
    time: "6 days ago"
},
{
    title: "Marketing Manager",
    company: "BrandVision",
    location: "Mumbai, India",
    description: "Develop and implement marketing strategies to increase brand awareness and drive sales.",
    salary: 95,
    type: "Full-Time",
    positions: "3",
    time: "1 week ago"
},
{
    title: "System Administrator",
    company: "SecureNet",
    location: "Delhi, India",
    description: "Manage IT infrastructure, troubleshoot server issues, and ensure the security of network systems.",
    salary: 82,
    type: "Full-Time",
    positions: "4",
    time: "5 days ago"
},
{
    title: "Sales Executive",
    company: "TechGear",
    location: "Bangalore, India",
    description: "Drive sales through client outreach, presentations, and negotiations to meet targets.",
    salary: 50,
    type: "Full-Time",
    positions: "7",
    time: "2 days ago"
},
{
    title: "Cloud Architect",
    company: "SkyTech",
    location: "Pune, India",
    description: "Design cloud infrastructure, migrate services to the cloud, and optimize resource usage.",
    salary: 135,
    type: "Full-Time",
    positions: "3",
    time: "4 days ago"
},
{
    title: "Game Developer",
    company: "PixelPlay",
    location: "Chennai, India",
    description: "Design and develop interactive games for mobile and console platforms.",
    salary: 90,
    type: "Full-Time",
    positions: "2",
    time: "1 day ago"
},
{
    title: "Cybersecurity Analyst",
    company: "SecureX",
    location: "Hyderabad, India",
    description: "Monitor and secure networks, analyze threats, and implement security protocols to prevent breaches.",
    salary: 110,
    type: "Full-Time",
    positions: "3",
    time: "2 days ago"
},
{
    title: "AI Researcher",
    company: "DeepMindTech",
    location: "Bangalore, India",
    description: "Research and develop innovative AI models, pushing the boundaries of artificial intelligence.",
    salary: 140,
    type: "Full-Time",
    positions: "2",
    time: "3 days ago"
},
{
    title: "Blockchain Developer",
    company: "CryptoInnovate",
    location: "Remote",
    description: "Develop decentralized applications and smart contracts using blockchain technology.",
    salary: 125,
    type: "Full-Time",
    positions: "3",
    time: "4 days ago"
},
{
    title: "Embedded Systems Engineer",
    company: "MicroTech",
    location: "Pune, India",
    description: "Develop firmware and embedded software for IoT and hardware devices.",
    salary: 78,
    type: "Full-Time",
    positions: "4",
    time: "1 week ago"
},
{
    title: "Network Engineer",
    company: "ConnectNow",
    location: "Delhi, India",
    description: "Design and maintain network infrastructure, troubleshoot connectivity issues, and optimize performance.",
    salary: 85,
    type: "Full-Time",
    positions: "5",
    time: "5 days ago"
},
{
    title: "Database Administrator",
    company: "DataVault",
    location: "Mumbai, India",
    description: "Manage database performance, security, and backup procedures for high availability.",
    salary: 87,
    type: "Full-Time",
    positions: "4",
    time: "2 days ago"
},
{
    title: "IT Support Specialist",
    company: "TechAssist",
    location: "Hyderabad, India",
    description: "Provide technical assistance to users, troubleshoot software/hardware issues, and maintain systems.",
    salary: 60,
    type: "Full-Time",
    positions: "6",
    time: "3 days ago"
},
{
    title: "HR Manager",
    company: "PeopleFirst",
    location: "Bangalore, India",
    description: "Oversee HR policies, recruit top talent, and manage employee relations.",
    salary: 92,
    type: "Full-Time",
    positions: "3",
    time: "1 week ago"
},
{
    title: "Full Stack Developer",
    company: "WebGenius",
    location: "Remote",
    description: "Develop both frontend and backend applications with modern tech stacks.",
    salary: 102,
    type: "Full-Time",
    positions: "4",
    time: "4 days ago"
},
{
    title: "Business Analyst",
    company: "BizSolutions",
    location: "Delhi, India",
    description: "Analyze business processes, identify improvements, and bridge gaps between IT and business teams.",
    salary: 80,
    type: "Full-Time",
    positions: "5",
    time: "6 days ago"
},
{
    title: "SEO Specialist",
    company: "SearchBoost",
    location: "Mumbai, India",
    description: "Optimize websites for search engines, improve rankings, and drive organic traffic.",
    salary: 65,
    type: "Full-Time",
    positions: "3",
    time: "1 week ago"
},
{
    title: "Electrical Engineer",
    company: "PowerGrid",
    location: "Pune, India",
    description: "Design, test, and implement electrical systems for industrial applications.",
    salary: 88,
    type: "Full-Time",
    positions: "4",
    time: "5 days ago"
},
{
    title: "Content Writer",
    company: "WriteNow",
    location: "Remote",
    description: "Create compelling content for blogs, websites, and marketing materials.",
    salary: 55,
    type: "Full-Time",
    positions: "3",
    time: "2 days ago"
}
];

export default jobs;