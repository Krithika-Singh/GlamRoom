import { Notebook, SmilePlus } from "lucide-react";
import { Bath } from "lucide-react";
import { Eye } from "lucide-react";
import { Gem } from "lucide-react";
import { Gift } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import summer from "../assets/summer2.jpeg";
import genz from "../assets/genz.jpeg";
import perfume from "../assets/Perfume2.jpeg";


export const navItems = [
  { label: "Makeup", href: "#" },
  { label: "Skin Care", href: "#" },
  { label: "Hair Care", href: "#" },
  { label: "Body Care", href: "#" },
  { label: "Customers voice", href: "#"}
];

export const testimonials = [
  {
    user: "Sarah Jones",
    company: "San Francisco",
    image: user1,
    text: "I love the variety of high-quality beauty products available on this website!  Finding everything I need in one place makes my life so much easier.  Plus, the customer service is fantastic – they were super helpful when I had a question about a product.",
  },
  {
    user: "Ashley Rodriguez",
    company: "Chicago",
    image: user2,
    text: "This website has become my go-to for all my beauty needs! The selection is incredible, and the prices are really reasonable.  I also love that they offer free shipping on orders over a certain amount.  I've recommended it to all my friends!",
  },
  {
    user: "Katherine Miller",
    company: "Austin",
    image: user3,
    text: "I was initially hesitant to buy beauty products online, but this website has completely changed my mind! The products are all genuine and high-quality, and the website is so easy to navigate.  I've had nothing but positive experiences so far!",
  },
  {
    user: "Elizabeth Williams",
    company: "New York City",
    image: user4,
    text: "This website is a lifesaver!  I can always find exactly what I'm looking for, whether it's a new foundation, a trendy lipstick, or a luxurious moisturizer.  The website also has great tutorials and tips that have helped me improve my makeup routine.  I highly recommend it!",
  },
  {
    user: "Megan Lee",
    company: "Los Angeles",
    image: user5,
    text: "I'm obsessed with this website! They have such a wide range of beauty products from all my favorite brands.  The website is also constantly updated with the latest trends, so I know I can always find something new to try.  The checkout process is super easy too!",
  },
  {
    user: "Nicole Garcia",
    company: "Miami",
    image: user6,
    text: "I've been using this website for years now, and I'm always impressed with their selection and service. The products are always authentic and arrive quickly.  The website also offers a great rewards program, which is a nice bonus.  I wouldn't shop anywhere else for my beauty products!",
  },
];


export const features = [
  {
    icon: <SmilePlus />, // Replace with a makeup brush icon
    text: "Effortless Flawless Face",
    description:
      "Find your perfect foundation match and explore our range of sculpting & highlighting products - Starting at just $19.99!",
  },
  {
    icon: <Bath />, // Replace with a body lotion icon
    text: "Luxurious Bath & Body",
    description:
      "Indulge in self-care with our pampering body washes, lotions, and bath bombs. Starting from $9.99!",
  },
  {
    icon: <Eye />, // Replace with a makeup palette icon
    text: "Endless Eye Looks",
    description:
      "From dramatic smoky eyes to playful daytime looks, our curated eyeshadow palettes offer endless possibilities. Explore our collection, starting at $24.99!",
  },
  {
    icon: <Gem />, // Replace with a hair care product icon
    text: "Salon-Worthy Hair Care",
    description:
      "Transform your hair routine with our high-performance shampoos, conditioners, and styling products. Starting at $14.99!",
  },
  {
    icon: <Gift />, // Replace with a gift icon
    text: "The Perfect Gift Sets",
    description:
      "Spoil yourself or surprise a loved one with our luxurious gift sets, featuring curated collections of makeup & body care essentials. Starting at $29.99!",
  },
  {
    icon: < Notebook/>, // Replace with a magnifying glass icon
    text: "Expert Beauty Tips",
    description:
      "Get access to exclusive tutorials and beauty advice from our team of makeup artists. Free with every purchase!",
  },
];


export const tutorialSteps = [
  {
    title: "Step 1: Join the Glam Fam",
    description: "Sign up for a free account or log in to your existing account to access the tutorials.",
  },
  {
    title: "Step 2: Explore Your Options",
    description: "Head over to the Tutorials section and browse through the wide variety of makeup tutorials categorized by type.",
  },
  {
    title: "Step 3: Find Your Inspiration",
    description: "With thousands of videos available, choose the tutorial that best suits your desired makeup look.",
  },
  {
    title: "Step 4: Share Your Glam",
    description: "After completing your makeup, capture your gorgeous look and share it with our community!",
  },
  {
    title: "Step 5: Unlock Your Potential (Optional)",
    description: "Want personalized recommendations and a virtual makeup guide? Consider upgrading to our Pro membership!",
  },
];


export const pricingOptions = [
  {
    title: "Family Bundles",
    image: summer,
    price: "Starts at $45",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "The Genz Room",
    image:genz,
    price: "Starts at $25",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Perfumery",
    image:perfume,
    price: "Starts at $60",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const aboutUs = [
  { href: "#", text: "Who are we" },
  { href: "#", text: "Careers" },
  { href: "#", text: "Authenticity" },
  { href: "#", text: "Customer voice" },
  { href: "#", text: "Responsible Disclosure" },
];

export const helpingLinks = [
  { href: "#", text: "contact Us" },
  { href: "#", text: "Store Locator" },
  { href: "#", text: "Cancellation & Return" },
  { href: "#", text: "Shipping & Delivery" },
  { href: "#", text: "Frequently asked questions" },
];

export const ourCategories = [
  { href: "#", text: "Makeup" },
  { href: "#", text: "Skin Care" },
  { href: "#", text: "Hair care" },
  { href: "#", text: "Body care" },
  { href: "#", text: "Tutorials" },
];
