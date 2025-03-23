const jobs = [{
    title: "Software Engineer",
    company: "TechNova",
    location: "Bangalore, India",
    description: "Develop scalable applications, debug code, and collaborate with cross-functional teams to enhance system performance.",
    salary: "80k - 100k",
    type: "Full-Time",
    positions: "5"
},
{
    title: "Frontend Developer",
    company: "InnoSoft",
    location: "Remote",
    description: "Build modern, responsive UIs using React and Tailwind CSS, ensuring seamless user experience across devices.",
    salary: "60k - 90k",
    type: "Full-Time",
    positions: "3"
},
{
    title: "Data Analyst",
    company: "DataBridge",
    location: "Mumbai, India",
    description: "Analyze large datasets, create visual reports, and provide actionable insights to improve business decisions.",
    salary: "70k - 95k",
    type: "Full-Time",
    positions: "4"
},
{
    title: "Backend Developer",
    company: "CodeCraft",
    location: "Hyderabad, India",
    description: "Develop and maintain RESTful APIs, optimize database performance, and ensure secure backend architecture.",
    salary: "85k - 110k",
    type: "Full-Time",
    positions: "6"
},
{
    title: "UI/UX Designer",
    company: "PixelWorks",
    location: "Delhi, India",
    description: "Design intuitive user interfaces, conduct user research, and improve accessibility and aesthetics of web and mobile apps.",
    salary: "55k - 80k",
    type: "Full-Time",
    positions: "2"
},
{
    title: "DevOps Engineer",
    company: "CloudSphere",
    location: "Pune, India",
    description: "Manage cloud infrastructure, automate CI/CD pipelines, and improve system scalability and reliability.",
    salary: "90k - 120k",
    type: "Full-Time",
    positions: "3"
},
{
    title: "Mobile Developer",
    company: "AppTech",
    location: "Chennai, India",
    description: "Develop mobile applications using Flutter and React Native, ensuring high performance and responsiveness.",
    salary: "75k - 100k",
    type: "Full-Time",
    positions: "4"
},
{
    title: "Machine Learning Engineer",
    company: "AI Solutions",
    location: "Bangalore, India",
    description: "Build machine learning models, analyze data, and implement AI algorithms to improve business processes.",
    salary: "100k - 130k",
    type: "Full-Time",
    positions: "2"
},
{
    title: "Product Manager",
    company: "InnovateTech",
    location: "Remote",
    description: "Lead product development teams, define product roadmaps, and ensure successful launch of new products.",
    salary: "110k - 150k",
    type: "Full-Time",
    positions: "3"
},
{
    title: "Quality Assurance Engineer",
    company: "TestPro",
    location: "Hyderabad, India",
    description: "Create test plans, execute tests, and identify bugs to ensure high-quality software products.",
    salary: "60k - 85k",
    type: "Full-Time",
    positions: "5"
},
{
    title: "Marketing Manager",
    company: "BrandVision",
    location: "Mumbai, India",
    description: "Develop and implement marketing strategies to increase brand awareness and drive sales.",
    salary: "80k - 110k",
    type: "Full-Time",
    positions: "3"
},
{
    title: "System Administrator",
    company: "SecureNet",
    location: "Delhi, India",
    description: "Manage IT infrastructure, troubleshoot server issues, and ensure the security of network systems.",
    salary: "70k - 95k",
    type: "Full-Time",
    positions: "4"
},
{
    title: "Sales Executive",
    company: "TechGear",
    location: "Bangalore, India",
    description: "Drive sales through client outreach, presentations, and negotiations to meet targets.",
    salary: "40k - 60k",
    type: "Full-Time",
    positions: "7"
},
{
    title: "Cloud Architect",
    company: "SkyTech",
    location: "Pune, India",
    description: "Design cloud infrastructure, migrate services to the cloud, and optimize resource usage.",
    salary: "120k - 150k",
    type: "Full-Time",
    positions: "3"
},
{
    title: "Game Developer",
    company: "PixelPlay",
    location: "Chennai, India",
    description: "Design and develop interactive games for mobile and console platforms.",
    salary: "80k - 100k",
    type: "Full-Time",
    positions: "2"
},
{
    title: "Full Stack Developer",
    company: "DevSolution",
    location: "Remote",
    description: "Develop both frontend and backend for scalable web applications using modern frameworks.",
    salary: "95k - 125k",
    type: "Full-Time",
    positions: "4"
},
{
    title: "Security Analyst",
    company: "CyberGuard",
    location: "Bangalore, India",
    description: "Monitor networks for security breaches, conduct risk assessments, and improve security measures.",
    salary: "90k - 110k",
    type: "Full-Time",
    positions: "3"
},
{
    title: "Operations Manager",
    company: "LogiTech",
    location: "Hyderabad, India",
    description: "Oversee day-to-day operations, improve processes, and ensure efficient workflow across departments.",
    salary: "100k - 130k",
    type: "Full-Time",
    positions: "2"
},
{
    title: "Content Writer",
    company: "CreativeWrite",
    location: "Mumbai, India",
    description: "Write blog posts, articles, and other content to promote company products and services.",
    salary: "40k - 60k",
    type: "Full-Time",
    positions: "5"
},
{
    title: "HR Manager",
    company: "PeopleFirst",
    location: "Remote",
    description: "Oversee hiring processes, employee engagement, and company policies to maintain a positive work culture.",
    salary: "80k - 100k",
    type: "Full-Time",
    positions: "2"
},
{
    title: "SEO Specialist",
    company: "Rankify",
    location: "Delhi, India",
    description: "Optimize website content for search engines and improve online visibility.",
    salary: "60k - 85k",
    type: "Full-Time",
    positions: "3"
},
{
    title: "Business Analyst",
    company: "FinTech Solutions",
    location: "Bangalore, India",
    description: "Analyze business data, create reports, and propose improvements to business operations.",
    salary: "75k - 95k",
    type: "Full-Time",
    positions: "4"
},
{
    title: "Research Scientist",
    company: "BioTech Labs",
    location: "Hyderabad, India",
    description: "Conduct research in biotechnology to develop innovative products and solutions.",
    salary: "85k - 110k",
    type: "Full-Time",
    positions: "2"
},
{
    title: "Customer Support Specialist",
    company: "SupportHub",
    location: "Remote",
    description: "Assist customers with inquiries, resolve issues, and provide excellent customer service.",
    salary: "40k - 55k",
    type: "Full-Time",
    positions: "5"
},
{
    title: "Network Engineer",
    company: "ConnectNet",
    location: "Delhi, India",
    description: "Design, implement, and maintain computer networks to ensure high performance and security.",
    salary: "80k - 100k",
    type: "Full-Time",
    positions: "4"
},
{
    title: "Cloud Consultant",
    company: "CloudSphere",
    location: "Pune, India",
    description: "Provide expertise in cloud infrastructure design, migration, and optimization for businesses.",
    salary: "95k - 120k",
    type: "Full-Time",
    positions: "3"
},
{
    title: "Salesforce Developer",
    company: "SalesForceTech",
    location: "Chennai, India",
    description: "Develop customized solutions on the Salesforce platform to enhance business processes.",
    salary: "90k - 120k",
    type: "Full-Time",
    positions: "3"
},
{
    title: "Customer Success Manager",
    company: "CustomerCare",
    location: "Remote",
    description: "Oversee customer satisfaction, resolve issues, and drive customer retention strategies.",
    salary: "70k - 90k",
    type: "Full-Time",
    positions: "2"
},
{
    title: "Embedded Systems Engineer",
    company: "Circuitry",
    location: "Bangalore, India",
    description: "Design and develop embedded systems for industrial and consumer products.",
    salary: "85k - 110k",
    type: "Full-Time",
    positions: "3"
},
{
    title: "Blockchain Developer",
    company: "BlockChainX",
    location: "Remote",
    description: "Develop and implement blockchain-based applications, ensuring secure and efficient systems.",
    salary: "100k - 130k",
    type: "Full-Time",
    positions: "2"
},
{
    title: "Android Developer",
    company: "AppWorld",
    location: "Mumbai, India",
    description: "Develop mobile applications for the Android platform, ensuring seamless user experience.",
    salary: "75k - 95k",
    type: "Full-Time",
    positions: "4"
},
{
    title: "Cloud Operations Engineer",
    company: "SkyOps",
    location: "Pune, India",
    description: "Manage cloud services, monitor performance, and automate cloud-based infrastructure.",
    salary: "100k - 130k",
    type: "Full-Time",
    positions: "3"
},
{
    title: "Technical Support Engineer",
    company: "TechFix",
    location: "Delhi, India",
    description: "Provide technical support and troubleshooting assistance to customers and internal teams.",
    salary: "50k - 70k",
    type: "Full-Time",
    positions: "5"
},
{
    title: "Web Developer",
    company: "WebDev Solutions",
    location: "Bangalore, India",
    description: "Build and maintain websites using modern frameworks and ensure mobile responsiveness.",
    salary: "60k - 80k",
    type: "Full-Time",
    positions: "6"
},
{
    title: "iOS Developer",
    company: "AppDev",
    location: "Chennai, India",
    description: "Develop mobile applications for the iOS platform, focusing on performance and design.",
    salary: "80k - 110k",
    type: "Full-Time",
    positions: "2"
}
];

export default jobs;