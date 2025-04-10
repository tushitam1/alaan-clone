import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Smart Corporate Cards with smarter controls",
        description: "Cards that go beyond payments - set custom limits, track expenses, add balance in seconds, and more.",
        bullets: [
            {
                title: "Got multiple needs? Create multiple cards",
                description: "Instantly issue cards to different teams and individuals at no additional cost.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Absolute control‍ over each card",
                description: "Budget is just the start; decide where and how each card can be used.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Travel freely with Alaan cards",
                description: "Make instant payments no matter which country you are in.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/alaancard.png"
    },
    {
        title: "Expense Management ‍to track every Riyal",
        description: "Know where, how, and when employees spend company's money.",
        bullets: [
            {
                title: "100% visibility‍ into company expenses",
                description: "Track each and every business expense in one place.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Auto-extract expense details",
                description: "Got a receipt? Simply upload it to Alaan, and our AI will capture everything for you, including VAT, TRN, and vendor details.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "AI-powered analytics to control spends",
                description: "Forget formulas and pivot tables; get an in-depth analysis of all business expenses without lifting a finger.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/alaanmobile.jpg"
    },
    {
        title: "Accounting Automation ‍for all expense entries",
        description: "Alaan integrates with all major ERPs and accounting platforms to auto-export expense data to accounting books.",
        bullets: [
            {
                title: "Speed Up Monthly Close",
                description: "Alaan syncs with your ERP to automate accounting so you can update books in real-time. ",
                icon: <FiLock size={26} />
            },
            {
                title: "Biometric Authentication",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FiUser size={26} />
            },
            {
                title: "Save Hours On Repetitive Tasks",
                description: "All expenses made via Alaan cards are auto-imported to your ERP saving you time and manual work.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/alaanlaptop.png"
    },
]