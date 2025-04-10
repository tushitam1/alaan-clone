import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 0,
        features: [
            'Up to 3 users',
            'Up to 2 cards per user',
            'Real-time expense tracking',
            'Standard OCR receipt scanner',
            'Real-time spend reporting',
            'Corporate liability waiver insurance',
            'Accounting software integrations (paid add-on)',
            'Chat and email support',
        ],
    },
    {
        name: 'Premium',
        price: 0,
        features: [
            'Up to 1% cashback for all transactions',
            'Up to 20 team members',
            'Unlimited cards per user',
            'Spending limits by category or transaction',
            'Real-time spend reporting',
            'AI-powered analytics dashboard',
            'AI-powered receipt scanner',
            'Accounting software integrations (all major platforms)',
            'Corporate liability waiver insurance',
            'Dedicated customer success manager',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Unlimited Users',
            'Custom implementation',
            'SSO/SAML authentication integrations',
            'Custom HR Integrations',
            'API integrations',
            'Custom policies',
            'Native & custom ERP integrations',
            'Multi-entity support',
        ],
    },
]