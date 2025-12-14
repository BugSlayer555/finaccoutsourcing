export interface TeamMember {
    id: string;
    name: string;
    role: string;
    initials: string;
    image?: string;
    bio: string;
    expertise: string[];
    education: string;
    email: string;
    phone: string;
    isMain?: boolean;
}

import AdityaImg from "../assests/img/Aditya.jpg";
import AjayImg from "../assests/img/Ajay.jpg";
import AjeetImg from "../assests/img/Ajeet Kumar.png";
import DipenderImg from "../assests/img/Dipendra.jpg";
import DeepakImg from "../assests/img/Deepak Kumar Chauebey.png";
import HimanshuImg from "../assests/img/Himanshu.jpg";
import RahulImg from "../assests/img/Rahul.jpg";
import SukhpalImg from "../assests/img/Sukhpal Mathur.png";

export const teamMembers: TeamMember[] = [
    {
        id: "ajay",
        name: "Ajay Kumar Chaubey",
        role: "Founder/Operation Head",
        initials: "AJ",
        image: AjayImg,
        bio: "Ajay started his accountancy career in 2018. He holds a Post Graduate degree in Commerce and Started his Career as an ACCA Student in 2023. He has over 7 years experience in the field of Accounting and Taxations which includes working with various clients and specialized in managing work with the processing team.",
        expertise: ["Accounting", "Bookkeeping", "VAT Compliances", "Account Finalising"],
        education: "B.COM, MCOM, ACCA Student",
        email: "ajay@finaccoutsourcings.com",
        phone: "+91 7011701023",
        isMain: true
    },
    {
        id: "deepak-kumar",
        name: "Deepak Kumar Chaubey",
        role: "Partner (Co Founder/Operation Head)",
        initials: "DK",
        image: DeepakImg,
        bio: "Deepak started his accountancy career in 2014. He holds a Post Graduate degree in Commerce and Started his Career as a CA Aspirant in 2022. He has over 10 years experience in the field of Accounting and Taxations which includes working with various clients and specialized in managing work with the processing team.",
        expertise: ["Accounts Finalisation", "Tax Compliances", "Team Management"],
        education: "B.COM, MCOM, CA Student",
        email: "deepak@finaccoutsourcings.com",
        phone: "+91 7011701023",
        isMain: true
    },
    {
        id: "himanshu-kumar",
        name: "Himanshu Pandey",
        role: "Partner (Co Founder/Marketing Head)",
        initials: "HK",
        image: HimanshuImg,
        bio: "Himanshu is our Marketing head who is involved in all our marketing activities at FinAcc. He is an expert in managing administrative strategies and driving brand growth.",
        expertise: ["Marketing Strategy", "Administrative Management", "Brand Development"],
        education: "B.COM, MBA Marketing (Pursuing)",
        email: "himanshu@finaccoutsourcings.com",
        phone: "+91 7011701023",
        isMain: true
    },
    {
        id: "rahul-aggarwal",
        name: "Rahul Aggarwal",
        role: "Partner (Co Founder/HR)",
        initials: "RA",
        image: RahulImg,
        bio: "Rahul is our HR head who manages all our team and other activities at FinAcc. He has the ability to manage a team of 15-20 members to minimize the workload and ensure operational efficiency.",
        expertise: ["Human Resources", "Team Management", "Operations"],
        education: "B.COM, MBA Finance (Pursuing)",
        email: "rahul@finaccoutsourcings.com",
        phone: "+91 7011701023",
        isMain: true
    },
    {
        id: "sukhpal-mathur",
        name: "Sukhpal Mathur",
        role: "Legal Advisor",
        initials: "SM",
        image: SukhpalImg,
        bio: "Sukhpal started his career as Company Secretary in 2021. He holds a Post Graduate degree in Commerce. Previously he has worked as a trainee Company Secretary for 5 years with a reputed Company and has knowledge of various Tax Compliances and companies financial Knowledge. Currently he is handling the Legal Compliances of Bank. Sukhpal Mathur is handling all the Legal Activities of FinAcc.",
        expertise: ["Legal Compliances", "Corporate Law", "financial Regulations"],
        education: "B.COM, MCOM, CS (ICSI)",
        email: "sukhpal@finaccoutsourcings.com",
        phone: "+91 7011701023"
    },
    {
        id: "ajeet-kumar",
        name: "Ajeet Kumar",
        role: "Financial Advisor",
        initials: "AK",
        image: AjeetImg,
        bio: "Ajeet started his career in the field of Finance in the year 2018. He has completed his MBA from IIM Pune also he holds a Post Graduate degree in Commerce. After completing his MBA he worked with companies like Tata Finance, Art Finance and currently he is working as a Financial advisor in ICICI Bank. Ajeet Kumar is advisor in all the Financial decisions and handling all the critical financial activities of FinAcc. He also holds many achievement awards in his ongoing career as Financial Advisor.",
        expertise: ["Financial Strategy", "Investment Advisory", "Corporate Finance"],
        education: "B.COM, M.COM, MBA from IIM Pune",
        email: "ajeet@finaccoutsourcings.com",
        phone: "+91 7011701023"
    },
    {
        id: "dipender-sharma",
        name: "Dipender Sharma",
        role: "IT Management",
        initials: "DS",
        image: DipenderImg,
        bio: "Dipender is responsible for maintaining client servers and ensuring the safety and security of data/information received from clients through various exchange methods, including emails and cloud storage.",
        expertise: ["Server Maintenance", "Data Security", "Cloud Infrastructure", "Network Administration"],
        education: "B.com, MCA, MCSA, CCNA",
        email: "it@finaccoutsourcings.com",
        phone: "+91 7011701023"
    },
    {
        id: "aditya-verma",
        name: "Aditya Verma",
        role: "Software Developer",
        initials: "AV",
        image: AdityaImg,
        bio: "Aditya is our Software Developer specializing in full-stack web development and cloud infrastructure. He manages the technical systems that support FinAcc's operations, ensuring reliability and security across our digital platforms.",
        expertise: ["Web Development", "Cloud Infrastructure", "DevOps", "System Design"],
        education: "B.Tech in Computer Science",
        email: "adityaverma4769@gmail.com",
        phone: "+91 7011701023"
    }
];
