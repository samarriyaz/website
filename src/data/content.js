export const content = {
  // Business Information
  business: {
    name: "Integrative Wellness Partners",
    tagline: "Concierge Medicine Program",
    phone: "480.508.7050",
    email: "Info@iwellnesspartners.com",
    website: "iwellnesspartners.com",
  },

  // Hero Section
  hero: {
    headline: "Your Health, Your Way",
    subheadline: "Personalized concierge medicine focused on prevention, convenience, and comprehensive care for you and your family",
    cta: "Schedule a Consultation",
    ctaSecondary: "Learn More",
  },

  // Value Proposition (3 Key Benefits)
  valueProposition: {
    title: "Why Choose Concierge Medicine?",
    benefits: [
      {
        icon: "clock", // ⏰
        title: "24/7 Direct Access",
        description: "Direct communication with Dr. Riaz and the care team anytime, anywhere. Same and next-day appointments available.",
      },
      {
        icon: "heart", // ❤️
        title: "Preventative Focus",
        description: "Comprehensive treatment plans with regular blood tests, nutrition guidance, and lifestyle recommendations to keep you healthy.",
      },
      {
        icon: "home", // 🏠
        title: "Convenience First",
        description: "Services at your location - from blood draws to x-rays. Telehealth options available, even when traveling out of state.",
      },
    ],
  },

  // Membership Benefits (What's Included)
  membershipBenefits: {
    title: "What's Included in Your Membership",
    subtitle: "Comprehensive care designed around your busy life",
    benefits: [
      "24/7 direct communication with your Concierge Medicine physician and care team",
      "Coordination of referrals and appointments with medical specialists",
      "Attending specialists' appointments with patients (virtual or in-person) at patients' request",
      "Same and next-day appointment visits",
      "Telehealth Visit Option, including for patients traveling out of state",
      "Well Child Checks and Well Women Exams offered to patients who would like us to manage their care",
      "Providing a comprehensive treatment plan with a focus on preventative medicine, including blood tests every 6–12 weeks and recommendations on diet, supplements, medications, stress management techniques, and other lifestyle choices",
      "Minor surgical procedures such as skin tag removal, wart removal, splinter removal, etc.",
      "Sports Physicals for school children",
    ],
    notIncluded: {
      title: "Additional Services (Not Covered by Monthly Fee)",
      items: [
        "Diagnostic Testing and Imaging – where applicable, we will attempt to use your private insurance for these tests",
        "Hospital and/or emergency room visits",
        "Medical specialists' appointments and care",
        "Prescriptions and Supplements",
        "Vaccinations – patients are only charged for the cost of the vaccine",
        "Urgent Care",
        "IV Therapy",
        "IM Therapy such as ketamine therapy – medication charge only",
        "Aesthetics therapy such as botox, juvederm, etc.",
      ],
    },
  },

  // About Dr. Riaz
  aboutDoctor: {
    name: "Dr. Samar Riaz, NMD",
    credentials: "Summa Cum Laude, Sonoran University of Health Sciences",
    image: "/dr-riaz-profile.jpeg",
    bio: [
      "Dr. Samar Riaz graduated with Summa Cum Laude honors from Sonoran University of Health Sciences in Tempe, Arizona. She always had a passion for medicine, but after a one-week rotation during her undergraduate studies at Riverside County Hospital, where she witnessed several young diabetic patients being admitted for complications, she saw the failure of a medical system lacking focus on prevention for these young patients.",
      "When she discovered naturopathic medicine, it intrigued her deeply to be able to provide truly integrative medicine to her patients, with a focus on their diet, exercise, and mental health, along with any necessary medications, specialists, and procedures. It was the best of both worlds for her as it gave her the knowledge to focus on preventative medicine but also the credentials to prescribe medications for patients as well.",
      "Dr. Riaz believes in being a strong advocate for her patients, going above and beyond for their well-being. She wants her patients to feel empowered and in control of their health. Her plans are focused on setting them up for success and not creating added stress. She emphasizes informed consent, providing all available treatment options to the best of her ability and respecting the patient's decisions.",
      "Most patients describe a close bond with Dr. Riaz, feeling heard and respected by her. Her years of experience working with children with developmental disorders have taught her to provide compassionate care to children who may be fearful of doctors.",
    ],
    quote: "She looks forward to building relationships with new patients and helping them achieve their health goals.",
    philosophy: [
      "Strong patient advocacy",
      "Empowerment and informed consent",
      "Preventative medicine focus",
      "Compassionate, personalized care",
    ],
  },

  // Team Members
  team: {
    title: "Meet Our Team",
    subtitle: "Dedicated professionals committed to your health and wellbeing",
    members: [
      {
        name: "Jay Bhatnagar",
        role: "Medical Scribe",
        image: "/jay-bhatnagar-profile.jpeg",
        bio: [
          "Jay is a Medical Scribe at Integrative Wellness Partners. He is a UCLA Neuroscience undergraduate student graduating in June 2026 and is on the pre-medical path, planning to specialize in a neuroscience-related field within medicine.",
          "While his early exposure to healthcare through volunteering felt largely passive, Jay sought a more immersive clinical experience by becoming a medical scribe. Through this role, Jay has been more active in patient care, developing his familiarity with medical terminology, and gaining better exposure to patient cases in preparation for medical school and beyond.",
          "Outside of work and college, Jay is heavily involved in researching about Alzheimer's Disease and Vascular Dementia. Additionally, his hobbies include hiking, gardening, and weightlifting.",
        ],
      },
    ],
  },

  // Pricing
  pricing: {
    title: "Simple, Transparent Pricing",
    subtitle: "No initiation fee. No annual contract. Cancel anytime.",
    plans: [
      {
        name: "Individual",
        price: "$500",
        period: "month",
        description: "Complete concierge care for one adult",
        features: [
          "All membership benefits",
          "24/7 direct access to physician",
          "Same and next-day appointments",
          "Telehealth visits",
          "Comprehensive preventative care plans",
          "Regular blood tests and monitoring",
        ],
        cta: "Get Started",
        featured: false,
      },
      {
        name: "Family",
        price: "$1,000",
        period: "month",
        description: "Unlimited children included",
        features: [
          "All membership benefits",
          "Covers parents + all children",
          "24/7 direct access for whole family",
          "Well Child Checks included",
          "Sports physicals included",
          "One plan for entire family",
        ],
        cta: "Get Started",
        featured: true,
      },
    ],
    guarantee: "No initiation fee or annual contract required",
  },

  // Contact Form
  contactForm: {
    title: "Ready to Get Started?",
    subtitle: "Contact us today to learn more about our concierge medicine program",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      {
        name: "membershipType",
        label: "Interested In",
        type: "select",
        options: ["Individual Membership", "Family Membership", "Just Learning More"],
        required: true
      },
      { name: "message", label: "Message (Optional)", type: "textarea", required: false },
    ],
    submitText: "Send Message",
    successMessage: "Thank you! We'll be in touch within 24 hours.",
  },
};
