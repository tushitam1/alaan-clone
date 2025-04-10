import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Alaan is a financial technology company, not a bank. The Alaan Card is issued by Al Rajhi Bank, pursuant to a license by Visa.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "Testimonials",
            url: "#testimonials"
        }
    ],
    email: 'address@yoursite.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://x.com/alaan_pay',
        facebook: 'https://www.facebook.com/alaanpay/',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/company/alaanpay/',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/tryalaan/',
    }
}