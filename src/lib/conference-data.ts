export const conferenceData = {
  name: "CAMM Conference 2027",
  fullName: "Christian American Media Ministry",
  tagline:
    "Two days of inspiration, fellowship, and practical, hands-on training for advancing God's kingdom through media ministry.",
  year: 2027,
  dates: {
    start: "January 22, 2027",
    end: "January 23, 2027",
    display: "January 22-23, 2027",
    shortDisplay: "JAN 22-23, 2027",
    days: 2,
  },
  venue: {
    name: "Bible Baptist Church",
    city: "Sacramento",
    state: "CA",
    fullAddress: "Bible Baptist Church, Sacramento, CA",
    mapUrl: "https://share.google/tQGIkHGlMuX3QpKgs",
  },
  contact: {
    phone: "+1 (916) 822-1472",
    phoneDisplay: "(916) 822-1472",
  },
  registration: {
    url: "https://subsplash.com/bbc-ca/lb/ev/+sqbrrkp/register",
    isOpen: true,
    urgencyLine: "Price increases to $250 on January 2",
    tiers: [
      {
        id: "early" as const,
        price: 199,
        priceLabel: "$199",
        windowLabel: "October 31 – January 2",
        detail: "Early registration",
      },
      {
        id: "regular" as const,
        price: 250,
        priceLabel: "$250",
        windowLabel: "January 2 – January 22",
        detail: "Standard registration",
      },
    ],
  },
  logo: "/camm-logo-2027.png",
  banner: "/camm-2027-banner.png",
  quote: "For the glory of God, through the power of media.",

  trackLegend: "B = Beginner, A = Advanced",

  tracks: [
    {
      id: "video-b",
      name: "Video (B)",
      shortName: "Video (B)",
      icon: "Video",
      description:
        "Beginner Lessons: Understanding Camera Fundamentals, Visual Composition, Lighting Techniques, and Post-Production Editing.",
    },
    {
      id: "video-a",
      name: "Video (A)",
      shortName: "Video (A)",
      icon: "Film",
      description:
        "Advanced Lessons: Mastering Cinematography, Creative Lighting, Camera Techniques, Visual Storytelling, and Post-Production.",
    },
    {
      id: "audio",
      name: "Audio",
      shortName: "Audio",
      icon: "Mic2",
      description:
        "Developing Skills in Soundboard Operation, Microphone Techniques, Live Mixing, Stage Audio, and Church Sound Management.",
    },
    {
      id: "projection",
      name: "Projection",
      shortName: "Projection",
      icon: "Monitor",
      description:
        "Developing Skills in ProPresenter, Worship Slide Design, Presentation Management, and Visual Communication for Live Services.",
    },
  ],

  experienceSubtitle:
    "Two days packed with insightful lectures, interactive training, transformative experiences, and fellowship",
  whyAttendIntro:
    "CAMM is open to everyone involved in church media ministry, from beginners to seasoned professionals. Whether you're a volunteer, camera operator, audio engineer, or a media director, or simply interested in using media to serve and strengthen your ministry, you'll discover valuable insights, practical knowledge, and meaningful connections.",

  whyAttend: [
    {
      id: "fellowship",
      name: "Fellowship",
      icon: "Users",
      description:
        "Connect with fellow believers, pastors, and church media teams from across the nation, united by a shared passion for advancing the Gospel through media.",
    },
    {
      id: "learn",
      name: "Learn",
      icon: "GraduationCap",
      description:
        "Gain practical knowledge and hands-on skills from experienced instructors and ministry leaders who bring years of real-world expertise to help you grow, improve, and serve more effectively in your media ministry.",
    },
    {
      id: "grow",
      name: "Grow",
      icon: "TrendingUp",
      description:
        "Equip and elevate your media ministry through practical, hands-on training grounded in biblical principles and focused on impactful Gospel outreach.",
    },
  ],

  schedule: {
    day1: {
      date: "January 22, 2027",
      dayLabel: "Day 1",
      shortDate: "January 22",
      dayOfWeek: "Friday",
      theme: "An Introduction to Media Production in the Church Setting",
      events: [
        {
          time: "8:00 AM – 9:00 AM",
          title: "Check in / Fellowship",
          type: "general",
          isBreakout: false,
        },
        {
          time: "9:00 AM – 9:45 AM",
          title: "General Session",
          subtitle: "Избрание Для Служения и Верность в Служении",
          type: "session",
          isBreakout: false,
        },
        {
          time: "9:45 AM – 10:30 AM",
          title: "Breakfast",
          type: "meal",
          isBreakout: false,
        },
        {
          time: "10:30 AM – 11:20 AM",
          title: "Lesson 1",
          subtitle: "4 parallel lessons",
          type: "lesson",
          isBreakout: true,
          sessions: [
            { trackId: "video-b", trackLabel: "Video (B)", title: "Introduction Into Video Basics" },
            { trackId: "video-a", trackLabel: "Video (A)", title: "Cinematic Foundations — Composition, Lighting & Motion" },
            { trackId: "audio", trackLabel: "Audio", title: "Spatial Localization of Acoustic Sources: Stereo vs. Surround" },
            { trackId: "projection", trackLabel: "Projection", title: "How to Build a Good Presentation" },
          ],
        },
        {
          time: "11:20 AM – 11:30 AM",
          title: "Break",
          subtitle: "10 minutes",
          type: "break",
          isBreakout: false,
        },
        {
          time: "11:30 AM – 12:20 PM",
          title: "Lesson 2",
          subtitle: "4 parallel lessons",
          type: "lesson",
          isBreakout: true,
          sessions: [
            { trackId: "video-b", trackLabel: "Video (B)", title: "Framing, Composition and Movement" },
            { trackId: "video-a", trackLabel: "Video (A)", title: "Lighting for Cinema" },
            { trackId: "audio", trackLabel: "Audio", title: "Organization of Ministry and Interaction with Leaders" },
            { trackId: "projection", trackLabel: "Projection", title: "Creating Presentations with Google Slides / ProPresenter" },
          ],
        },
        {
          time: "12:20 PM – 12:30 PM",
          title: "Break",
          subtitle: "10 minutes",
          type: "break",
          isBreakout: false,
        },
        {
          time: "12:30 PM – 1:20 PM",
          title: "Lesson 3",
          subtitle: "4 parallel lessons",
          type: "lesson",
          isBreakout: true,
          sessions: [
            { trackId: "video-b", trackLabel: "Video (B)", title: "Light & Shadow — The Foundation of Cinematic Visuals" },
            { trackId: "video-a", trackLabel: "Video (A)", title: "Mastering Color Science — White Balance, Exposure & Color Workflow" },
            { trackId: "audio", trackLabel: "Audio", title: "Analysis and Optimization of the Planning System and Equipment Selection 1.0" },
            { trackId: "projection", trackLabel: "Projection", title: "Understanding Your Production Environment" },
          ],
        },
        {
          time: "1:20 PM – 2:20 PM",
          title: "Lunch",
          type: "meal",
          isBreakout: false,
        },
        {
          time: "2:30 PM – 3:20 PM",
          title: "Lesson 4",
          subtitle: "4 parallel lessons",
          type: "lesson",
          isBreakout: true,
          sessions: [
            { trackId: "video-b", trackLabel: "Video (B)", title: "From Footage to Film — The Essentials of Video Editing" },
            { trackId: "video-a", trackLabel: "Video (A)", title: "The Power of Editing — From Seamless Cuts to Creative Effects" },
            { trackId: "audio", trackLabel: "Audio", title: "Analysis and Optimization of the Planning System and Equipment Selection 2.0" },
            { trackId: "projection", trackLabel: "Projection", title: "From Volunteer to Problem Solver" },
          ],
        },
        {
          time: "3:20 PM – 3:30 PM",
          title: "Break",
          subtitle: "10 minutes",
          type: "break",
          isBreakout: false,
        },
        {
          time: "3:30 PM – 5:30 PM",
          title: "Lesson 5 / Workshop",
          type: "workshop",
          isBreakout: false,
        },
        {
          time: "5:30 PM – 6:30 PM",
          title: "Dinner / Q&A",
          type: "meal",
          isBreakout: false,
        },
      ],
    },
    day2: {
      date: "January 23, 2027",
      dayLabel: "Day 2",
      shortDate: "January 23",
      dayOfWeek: "Saturday",
      theme: "Excel at Live Church Service Streaming",
      events: [
        {
          time: "8:00 AM – 9:00 AM",
          title: "Check in / Fellowship",
          type: "general",
          isBreakout: false,
        },
        {
          time: "9:00 AM – 9:45 AM",
          title: "General Session",
          subtitle: "Effective Communication: Working with Pastors, Performers, and Church Members",
          type: "session",
          isBreakout: false,
        },
        {
          time: "9:45 AM – 10:30 AM",
          title: "Breakfast",
          type: "meal",
          isBreakout: false,
        },
        {
          time: "10:30 AM – 11:20 AM",
          title: "Lesson 1",
          subtitle: "4 parallel lessons",
          type: "lesson",
          isBreakout: true,
          sessions: [
            { trackId: "video-b", trackLabel: "Video (B)", title: "Live Setup 1.0" },
            { trackId: "video-a", trackLabel: "Video (A)", title: "Live Setup 2.0" },
            { trackId: "audio", trackLabel: "Audio", title: "Sound Source and Its Propagation" },
            { trackId: "projection", trackLabel: "Projection", title: "Planning and Preparing for Church Services" },
          ],
        },
        {
          time: "11:20 AM – 11:30 AM",
          title: "Break",
          subtitle: "10 minutes",
          type: "break",
          isBreakout: false,
        },
        {
          time: "11:30 AM – 12:20 PM",
          title: "Lesson 2",
          subtitle: "4 parallel lessons",
          type: "lesson",
          isBreakout: true,
          sessions: [
            { trackId: "video-b", trackLabel: "Video (B)", title: "Camera Operation in a LIVE Environment" },
            { trackId: "video-a", trackLabel: "Video (A)", title: "Camera Operation & Creative Decision-making" },
            { trackId: "audio", trackLabel: "Audio", title: "Microphones, Routing, and Switching" },
            { trackId: "projection", trackLabel: "Projection", title: "Designing Invitations and Programs with Canva & AI" },
          ],
        },
        {
          time: "12:20 PM – 12:30 PM",
          title: "Break",
          subtitle: "10 minutes",
          type: "break",
          isBreakout: false,
        },
        {
          time: "12:30 PM – 1:20 PM",
          title: "Lesson 3",
          subtitle: "Video (B & A) combined • Audio • Projection",
          type: "lesson",
          isBreakout: true,
          sessions: [
            {
              trackId: "video-combined",
              trackLabel: "Video (B & A)",
              title: "Team Communication, Roles & Relationships",
              combined: true,
            },
            { trackId: "audio", trackLabel: "Audio", title: "Audio Networking & Routing" },
            { trackId: "projection", trackLabel: "Projection", title: "Taking Initiative and Improving Your Ministry" },
          ],
        },
        {
          time: "1:20 PM – 2:20 PM",
          title: "Lunch",
          type: "meal",
          isBreakout: false,
        },
        {
          time: "2:30 PM – 3:20 PM",
          title: "Lesson 4",
          subtitle: "4 parallel lessons",
          type: "lesson",
          isBreakout: true,
          sessions: [
            { trackId: "video-b", trackLabel: "Video (B)", title: "Your Role in Live Production — Responsibility, Teamwork & Purpose" },
            { trackId: "video-a", trackLabel: "Video (A)", title: "Behind the Switcher — Making Creative Decisions in Real Time" },
            { trackId: "audio", trackLabel: "Audio", title: "Live Streaming & Broadcast Audio / DI Box: Function & Applications" },
            { trackId: "projection", trackLabel: "Projection", title: "AI and Productivity in Church Media" },
          ],
        },
        {
          time: "3:20 PM – 3:30 PM",
          title: "Break",
          subtitle: "10 minutes",
          type: "break",
          isBreakout: false,
        },
        {
          time: "3:30 PM – 5:30 PM",
          title: "Lesson 5 / Workshop",
          type: "workshop",
          isBreakout: false,
        },
        {
          time: "5:30 PM – 6:30 PM",
          title: "Dinner / Q&A",
          type: "meal",
          isBreakout: false,
        },
      ],
    },
  },

  faqs: [
    {
      question: "Who should attend CAMM Conference?",
      answer:
        "CAMM is designed for anyone involved in church media ministry — from beginners to experienced professionals. Whether you're a volunteer, pastor, media director, or just curious about using media for ministry, you'll find valuable content and connections here.",
    },
    {
      question: "What is the total number of lessons offered?",
      answer:
        "Each day features five lessons and a two-hour hands-on workshop, providing a total of 10 lessons and 4 hours of workshop instruction over the two-day conference.",
    },
    {
      question: "How much does registration cost?",
      answer:
        "Early registration is $199 from October 31 through January 2. The price increases to $250 on January 2, through January 22.",
    },
    {
      question: "Are meals included in registration?",
      answer:
        "Yes! Full breakfast, lunch, and dinner are provided both days. We believe fellowship around meals is an important part of the conference experience.",
    },
    {
      question: "What if I have trouble with the registration form?",
      answer:
        "If you're using an ad-blocker or have strict browser privacy settings, the embedded registration form may not load. You can click the direct registration link to open Subsplash in a new tab, or contact us at (916) 822-1472 for assistance.",
    },
    {
      question: "What should I bring to the conference?",
      answer:
        "Be sure to bring a notebook, your camera or equipment for hands-on training, and a laptop for projection-related lessons. Most importantly, come with a willingness to learn, grow, and strengthen your media ministry skills.",
    },
  ],

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Lessons", href: "#lessons" },
    { label: "Schedule", href: "#schedule" },
    { label: "Venue", href: "#venue" },
    { label: "FAQ", href: "#faq" },
  ],
};

export type Track = (typeof conferenceData.tracks)[number];
export type WhyAttend = (typeof conferenceData.whyAttend)[number];
export type ScheduleEvent = (typeof conferenceData.schedule.day1.events)[number];
export type FAQ = (typeof conferenceData.faqs)[number];
export type PricingTierId = (typeof conferenceData.registration.tiers)[number]["id"];

export type PricingState = {
  highlightedId: PricingTierId;
  badge: "Current price" | "Early price";
  urgencyLine: string;
};

function localDay(year: number, month: number, day: number) {
  return new Date(year, month - 1, day).getTime();
}

export function getPricingState(now = new Date()): PricingState {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const earlyStart = localDay(2026, 10, 31);
  const cutover = localDay(2027, 1, 2);

  if (today < earlyStart) {
    return {
      highlightedId: "early",
      badge: "Early price",
      urgencyLine: conferenceData.registration.urgencyLine,
    };
  }

  if (today < cutover) {
    return {
      highlightedId: "early",
      badge: "Current price",
      urgencyLine: conferenceData.registration.urgencyLine,
    };
  }

  return {
    highlightedId: "regular",
    badge: "Current price",
    urgencyLine: "Early registration ended January 2. Current price is $250 through January 22.",
  };
}
