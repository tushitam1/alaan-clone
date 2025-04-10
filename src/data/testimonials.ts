import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Al Barari uses Alaan to cut down reimbursements and save 200 hours every month',
        role: '',
        message: `Al Barari partnered with Alaan to roll out a centralised spend management platform that could streamline workflows while maintaining separation across entities.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Hellochef saved 150+ hours per month',
        role: '',
        message: `We chose Alaan for corporate cards and have stayed here for expense management. Real-time visibility and streamlined accounting – count us in!`,
        avatar: '/images/testimonial-2.jpg',
    },
    {
        name: 'Washmen put its spend management on auto-pilot and saved 80+ hours per week',
        role: '',
        message: `Since switching to ${siteDetails.siteName}, Washmen has gained more transparency on its spending. The team members can pay easily without worrying about out-of-policy expenses.`,
        avatar: '/images/testimonial-3.jpeg',
    },
];