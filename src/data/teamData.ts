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
}

export const teamMembers: TeamMember[] = [
    {
        id: "founder",
        name: "Founder",
        role: "Managing Partner",
        initials: "FP",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
        bio: "With over 15 years of experience in the financial sector, our Founder has led numerous successful strategic initiatives for global clients. Passionate about empowering businesses through financial clarity.",
        expertise: ["Strategic Planning", "Business Consulting", "Financial Analysis"],
        education: "MBA in Finance, London Business School",
        email: "founder@finacc.com",
        phone: "+44 20 1234 5678"
    },
    {
        id: "co-founder",
        name: "Co-Founder",
        role: "Operations Head",
        initials: "CF",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        bio: "Our Co-Founder brings a decade of operational excellence. Specializing in streamlining processes and maximizing efficiency for accounting firms.",
        expertise: ["Operations Management", "Process Optimization", "Team Leadership"],
        education: "MSc in Operations Management, University of Manchester",
        email: "cofounder@finacc.com",
        phone: "+44 20 1234 5679"
    },
    {
        id: "senior-accountant",
        name: "Senior Accountant",
        role: "Team Lead",
        initials: "SA",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
        bio: "An expert in UK GAAP and IFRS, serving as a mentor to the accounting team and ensuring the highest standards of financial reporting.",
        expertise: ["Financial Reporting", "Tax Planning", "Compliance"],
        education: "ACCA, Certified Chartered Accountant",
        email: "senior.acc@finacc.com",
        phone: "+44 20 1234 5680"
    },
    {
        id: "tax-specialist",
        name: "Tax Specialist",
        role: "Senior Advisor",
        initials: "TS",
        bio: "Specializing in complex tax matters, corporate tax, and VAT. Dedicated to minimizing liabilities while ensuring full compliance.",
        expertise: ["Corporate Tax", "VAT", "International Tax"],
        education: "Master of Taxation, University of Oxford",
        email: "tax.specialist@finacc.com",
        phone: "+44 20 1234 5681"
    },
    {
        id: "audit-manager",
        name: "Audit Manager",
        role: "Audit Lead",
        initials: "AM",
        bio: "Leading our audit division with a sharp eye for detail and risk assessment. Ensuring financial integrity for all our clients.",
        expertise: ["Internal Audit", "Risk Management", "Forensic Accounting"],
        education: "ACA, Institute of Chartered Accountants in England and Wales",
        email: "audit.manager@finacc.com",
        phone: "+44 20 1234 5682"
    },
    {
        id: "client-manager",
        name: "Client Manager",
        role: "Client Relations",
        initials: "CM",
        bio: "The bridge between our technical team and our clients. committed to understanding client needs and ensuring satisfaction.",
        expertise: ["Client Relations", "Account Management", "Communication"],
        education: "BA in Business Management",
        email: "client.manager@finacc.com",
        phone: "+44 20 1234 5683"
    },
    {
        id: "payroll-specialist",
        name: "Payroll Specialist",
        role: "Payroll Manager",
        initials: "PS",
        bio: "Managing complex payroll systems for diverse client portfolios. Expert in UK payroll legislation and compliance.",
        expertise: ["Payroll Administration", "Benefits Management", "HMRC Compliance"],
        education: "CIPP Certified",
        email: "payroll@finacc.com",
        phone: "+44 20 1234 5684"
    },
    {
        id: "junior-accountant",
        name: "Junior Accountant",
        role: "Associate",
        initials: "JA",
        bio: "A rising star in our accounting team, assisting with bookkeeping, reconciliations, and preparing draft financial statements.",
        expertise: ["Bookkeeping", "Reconciliations", "Xero/QuickBooks"],
        education: "BSc Accounting & Finance",
        email: "junior.acc@finacc.com",
        phone: "+44 20 1234 5685"
    },
    {
        id: "compliance-officer",
        name: "Compliance Officer",
        role: "Compliance Lead",
        initials: "CO",
        bio: "Ensuring that both FinAcc and our clients adhere to all regulatory requirements, including GDPR and anti-money laundering regulations.",
        expertise: ["Regulatory Compliance", "GDPR", "AML"],
        education: "LLM in Corporate Law",
        email: "compliance@finacc.com",
        phone: "+44 20 1234 5686"
    },
    {
        id: "financial-analyst",
        name: "Financial Analyst",
        role: "Senior Analyst",
        initials: "FA",
        bio: "Providing deep insights into financial data to help clients make informed business decisions. Expert in financial modeling and forecasting.",
        expertise: ["Financial Analysis", "Forecasting", "Data Visualization"],
        education: "CFA Level 2 Candidate",
        email: "analyst@finacc.com",
        phone: "+44 20 1234 5687"
    },
    {
        id: "bookkeeper",
        name: "Bookkeeper",
        role: "Senior Bookkeeper",
        initials: "SB",
        bio: "Meticulous in maintaining accurate financial records. Expert in various accounting software and handling high-volume transactions.",
        expertise: ["Bookkeeping", "Accounts Payable/Receivable", "Bank Reconciliation"],
        education: "AAT Level 4",
        email: "bookkeeper@finacc.com",
        phone: "+44 20 1234 5688"
    },
    {
        id: "it-support",
        name: "IT Support",
        role: "Technical Lead",
        initials: "IT",
        bio: "Ensuring our systems are secure, efficient, and up-to-date. Supporting the team with technical needs and maintaining data security.",
        expertise: ["IT Infrastructure", "Cybersecurity", "Technical Support"],
        education: "BSc Computer Science",
        email: "it.support@finacc.com",
        phone: "+44 20 1234 5689"
    },
];
