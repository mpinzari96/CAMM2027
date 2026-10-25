export const conferenceData = {
  name: "CAMM Conference 2027",
  fullName: "Christian American Media Ministry Conference",
  tagline: "Equipping creators. Advancing the mission.",
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
  },
  logo: "/camm-logo-new.png",
  quote: "For the glory of God, through the power of media.",
  
  tracks: [
    {
      id: "video",
      name: "Video",
      icon: "Video",
      description: "Learn. Create. Tell God's story.",
    },
    {
      id: "audio",
      name: "Audio",
      icon: "Mic2",
      description: "Better sound. Greater impact.",
    },
    {
      id: "projection",
      name: "Projection",
      icon: "Monitor",
      description: "Hands-on training for all skill levels.",
    },
    {
      id: "photography",
      name: "Photography",
      icon: "Camera",
      description: "Connect with creators, leaders & teams.",
    },
  ],

  whyAttend: [
    {
      id: "fellowship",
      name: "Fellowship",
      icon: "Users",
      description:
        "Connect with fellow believers in media ministry, pastors, and Christian content creators from across the nation.",
    },
    {
      id: "learn",
      name: "Learn",
      icon: "GraduationCap",
      description:
        "Gain biblical insights and practical skills for effective media ministry from experienced speakers and practitioners.",
    },
    {
      id: "grow",
      name: "Grow",
      icon: "TrendingUp",
      description:
        "Strengthen your media ministry with hands-on workshops and biblical foundations for effective outreach.",
    },
  ],

  schedule: {
    day1: {
      date: "January 22, 2027",
      dayLabel: "Day 1",
      shortDate: "JAN 22",
      theme: "An Introduction to Media Production in the Church Setting",
      events: [
        {
          time: "8:00 AM - 9:00 AM",
          title: "Registration & Check-In",
          location: "Main Lobby",
          type: "general",
        },
        {
          time: "9:00 AM - 9:45 AM",
          title: "Opening Session",
          subtitle: "Worship & Welcome",
          type: "session",
        },
        {
          time: "9:45 AM - 10:30 AM",
          title: "Breakfast",
          type: "meal",
        },
        {
          time: "10:30 AM - 11:20 AM",
          title: "Lesson 1",
          type: "lesson",
          tracks: {
            video: "Leadership and Team Organization Framework",
            audio: "Loudspeaker Calibration System",
            projection: "Introduction to ProPresenter: Getting Started",
            photography: "Intro into Photography",
          },
        },
        {
          time: "11:20 AM - 11:30 AM",
          title: "Break",
          type: "break",
        },
        {
          time: "11:30 AM - 12:20 PM",
          title: "Lesson 2",
          type: "lesson",
          tracks: {
            video: "Mastering the Camera (Controls, Composition, Framing, Stabilizing, and Filming)",
            audio: "Compression",
            projection: "Creating and Organizing Slides and Media",
            photography: "Camera operation and set up for success",
          },
        },
        {
          time: "12:20 PM - 12:30 PM",
          title: "Break",
          type: "break",
        },
        {
          time: "12:30 PM - 1:20 PM",
          title: "Lesson 3",
          type: "lesson",
          tracks: {
            video: "Post-Production (Editing, Color Grading, and File Organization)",
            audio: "Acoustic Treatment",
            projection: "Multiscreen Output",
            photography: "Editing/Post Production",
          },
        },
        {
          time: "1:20 PM - 2:20 PM",
          title: "Lunch",
          subtitle: "On-site & Networking",
          type: "meal",
        },
        {
          time: "2:30 PM - 3:20 PM",
          title: "Lesson 4",
          type: "lesson",
          tracks: {
            video: "Light Theory / Perfect Light",
            audio: "Dynamic Equalizing",
            projection: "Building Complete Service Flow",
            photography: "Lighting is Key to Capturing the Perfect Photo",
          },
        },
        {
          time: "3:20 PM - 3:30 PM",
          title: "Break",
          type: "break",
        },
        {
          time: "3:30 PM - 5:30 PM",
          title: "Workshops",
          subtitle: "Hands-on Training",
          type: "workshop",
        },
        {
          time: "5:30 PM - 6:30 PM",
          title: "Dinner / Q&A",
          subtitle: "Panel Discussion",
          type: "meal",
        },
      ],
    },
    day2: {
      date: "January 23, 2027",
      dayLabel: "Day 2",
      shortDate: "JAN 23",
      theme: "Excel at Live Church Service Streaming",
      events: [
        {
          time: "8:00 AM - 8:15 AM",
          title: "Registration & Check-In",
          location: "Main Lobby",
          type: "general",
        },
        {
          time: "8:15 AM - 9:00 AM",
          title: "General Session",
          subtitle: "Worship & Welcome",
          type: "session",
        },
        {
          time: "9:00 AM - 10:00 AM",
          title: "Breakfast",
          type: "meal",
        },
        {
          time: "10:10 AM - 11:20 AM",
          title: "Lesson 1",
          type: "lesson",
          tracks: {
            video: "Live Setup 1.0",
            audio: "Spatial Audio Processing",
            projection: "Audio and Video Integration",
            photography: "Framing/composition lets think outside the box",
          },
        },
        {
          time: "11:20 AM - 11:30 AM",
          title: "Break",
          type: "break",
        },
        {
          time: "11:30 AM - 12:20 PM",
          title: "Lesson 2",
          type: "lesson",
          tracks: {
            video: "Live Setup 2.0",
            audio: "Using plugins in live sound 1.0",
            projection: "Live Stream",
            photography: "Types of photography, find your passion",
          },
        },
        {
          time: "12:20 PM - 12:30 PM",
          title: "Break",
          type: "break",
        },
        {
          time: "12:30 PM - 1:20 PM",
          title: "Lesson 3",
          type: "lesson",
          tracks: {
            video: "Mixing/Directing/Communication",
            audio: "Using plugins in live sound 2.0",
            projection: "Automation and Best Practices",
            photography: "Camera gear and Add Ons",
          },
        },
        {
          time: "1:20 PM - 2:20 PM",
          title: "Lunch",
          subtitle: "On-site & Networking",
          type: "meal",
        },
        {
          time: "2:30 PM - 3:20 PM",
          title: "Lesson 4",
          type: "lesson",
          tracks: {
            video: "Advanced Live Production Techniques",
            audio: "Final Mix and Mastering",
            projection: "Troubleshooting and Live Support",
            photography: "Building Your Portfolio",
          },
        },
        {
          time: "3:20 PM - 3:30 PM",
          title: "Break",
          type: "break",
        },
        {
          time: "3:30 PM - 5:00 PM",
          title: "Workshops",
          subtitle: "Hands-on Training",
          type: "workshop",
        },
        {
          time: "5:00 PM - 5:30 PM",
          title: "Closing Session",
          subtitle: "Next Steps",
          type: "session",
        },
        {
          time: "5:30 PM - 6:30 PM",
          title: "Dinner / Q&A",
          subtitle: "Fellowship & Farewell",
          type: "meal",
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
      question: "What are the different tracks?",
      answer:
        "We offer four specialized tracks: Video (camera work, editing, live production), Audio (sound engineering, mixing), Projection (ProPresenter, presentation software), and Photography (capturing moments for ministry). You can attend sessions from any track based on your interests.",
    },
    {
      question: "Are meals included in registration?",
      answer:
        "Yes! Full breakfast, lunch, and dinner are provided both days. We believe fellowship around meals is an important part of the conference experience.",
    },
    {
      question: "Is there group registration available?",
      answer:
        "Yes! We offer discounted rates for groups of 5 or more from the same church or organization. Contact us directly for group pricing and registration assistance.",
    },
    {
      question: "What if I have trouble with the registration form?",
      answer:
        "If you're using an ad-blocker or have strict browser privacy settings, the embedded registration form may not load. You can click the direct registration link to open Subsplash in a new tab, or contact us at (916) 822-1472 for assistance.",
    },
    {
      question: "What should I bring to the conference?",
      answer:
        "Bring a notebook, your camera/equipment if you'd like hands-on practice, a laptop for the projection track, and an open heart ready to learn and grow in your media ministry journey.",
    },
  ],

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    { label: "Tracks", href: "#tracks" },
    { label: "FAQ", href: "#faq" },
    { label: "Location", href: "#location" },
  ],
};

export type Track = (typeof conferenceData.tracks)[number];
export type WhyAttend = (typeof conferenceData.whyAttend)[number];
export type ScheduleEvent = (typeof conferenceData.schedule.day1.events)[number];
export type FAQ = (typeof conferenceData.faqs)[number];
