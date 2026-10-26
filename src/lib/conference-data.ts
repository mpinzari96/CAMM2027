export const conferenceData = {
  name: "CAMM Conference 2027",
  fullName: "Christian American Media Ministry",
  tagline: "Equipping creators. Advancing the mission at Bible Baptist Church, Sacramento.",
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
  logo: "/camm-logo-2027.png",
  banner: "/camm-2027-banner.png",
  quote: "For the glory of God, through the power of media.",

  tracks: [
    {
      id: "video",
      name: "Video Production",
      shortName: "Video",
      icon: "Video",
      description: "Learn. Create. Tell God's story with cinema broadcast workflows.",
    },
    {
      id: "audio",
      name: "Audio Engineering",
      shortName: "Audio",
      icon: "Mic2",
      description: "Better sound. Greater impact for FOH & broadcast mixes.",
    },
    {
      id: "projection",
      name: "Projection & Stage",
      shortName: "Projection",
      icon: "Monitor",
      description: "Hands-on LED wall, ProPresenter & lighting design training.",
    },
    {
      id: "photography",
      name: "Photography & Fellowship",
      shortName: "Photography",
      icon: "Camera",
      description: "Connect with church creators, leaders & media teams.",
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
      shortDate: "FRI JAN 22",
      dayOfWeek: "Friday",
      theme: "An Introduction to Media Production in the Church Setting",
      events: [
        {
          time: "8:00 AM",
          endTime: "9:00 AM",
          title: "Registration & Morning Coffee",
          subtitle: "Main Lobby • Check-In & Fellowship",
          type: "general",
          isBreakout: false,
        },
        {
          time: "9:00 AM",
          endTime: "9:45 AM",
          title: "Opening General Session",
          subtitle: "Main Auditorium • Keynote & Worship",
          type: "session",
          isBreakout: false,
        },
        {
          time: "10:30 AM",
          endTime: "11:20 AM",
          title: "Track Breakout Session I",
          subtitle: "4 Parallel Classes Shown in Track Inspector",
          type: "lesson",
          isBreakout: true,
          tracks: {
            video: {
              title: "Broadcast Camera & Live Switching",
              location: "Studio A • Main Control Room",
            },
            audio: {
              title: "FOH Mixing & Broadcast Stems",
              location: "Main Sanctuary Sound Booth",
            },
            projection: {
              title: "ProPresenter 8 & LED Stage Design",
              location: "Stage Right Media Lab",
            },
            photography: {
              title: "Capturing Worship & Story",
              location: "Room 204 Creative Suite",
            },
          },
        },
        {
          time: "12:00 PM",
          endTime: "1:00 PM",
          title: "Catered Ministry Lunch",
          subtitle: "Fellowship Hall • Team Networking",
          type: "meal",
          isBreakout: false,
        },
        {
          time: "1:30 PM",
          endTime: "3:00 PM",
          title: "Track Breakout Session II (Live Labs)",
          subtitle: "Studios & Stage • Hands-On Workshops",
          type: "lesson",
          isBreakout: true,
          tracks: {
            video: {
              title: "Multi-Camera Direction & Switching",
              location: "Studio A • Main Control Room",
            },
            audio: {
              title: "Compression & Dynamic Processing",
              location: "Main Sanctuary Sound Booth",
            },
            projection: {
              title: "Building Complete Service Flows",
              location: "Stage Right Media Lab",
            },
            photography: {
              title: "Editing & Post-Production",
              location: "Room 204 Creative Suite",
            },
          },
        },
        {
          time: "3:30 PM",
          endTime: "5:30 PM",
          title: "Track Breakout Session III",
          subtitle: "Advanced Techniques & Q&A",
          type: "lesson",
          isBreakout: true,
          tracks: {
            video: {
              title: "Light Theory & Perfect Lighting",
              location: "Studio A • Main Control Room",
            },
            audio: {
              title: "Acoustic Treatment & Room Calibration",
              location: "Main Sanctuary Sound Booth",
            },
            projection: {
              title: "Multiscreen Output & NDI",
              location: "Stage Right Media Lab",
            },
            photography: {
              title: "Lighting for Photography",
              location: "Room 204 Creative Suite",
            },
          },
        },
        {
          time: "6:30 PM",
          endTime: "8:00 PM",
          title: "Evening Worship & Ministry Night",
          subtitle: "Main Auditorium • General Session",
          type: "session",
          isBreakout: false,
        },
      ],
    },
    day2: {
      date: "January 23, 2027",
      dayLabel: "Day 2",
      shortDate: "SAT JAN 23",
      dayOfWeek: "Saturday",
      theme: "Excel at Live Church Service Streaming",
      events: [
        {
          time: "8:00 AM",
          endTime: "8:30 AM",
          title: "Registration & Morning Coffee",
          subtitle: "Main Lobby • Check-In & Fellowship",
          type: "general",
          isBreakout: false,
        },
        {
          time: "8:30 AM",
          endTime: "9:30 AM",
          title: "Opening General Session",
          subtitle: "Main Auditorium • Keynote & Worship",
          type: "session",
          isBreakout: false,
        },
        {
          time: "10:00 AM",
          endTime: "11:30 AM",
          title: "Track Breakout Session IV",
          subtitle: "4 Parallel Classes Shown in Track Inspector",
          type: "lesson",
          isBreakout: true,
          tracks: {
            video: {
              title: "Live Setup & Stream Configuration",
              location: "Studio A • Main Control Room",
            },
            audio: {
              title: "Spatial Audio Processing",
              location: "Main Sanctuary Sound Booth",
            },
            projection: {
              title: "Audio & Video Integration",
              location: "Stage Right Media Lab",
            },
            photography: {
              title: "Creative Framing & Composition",
              location: "Room 204 Creative Suite",
            },
          },
        },
        {
          time: "12:00 PM",
          endTime: "1:00 PM",
          title: "Catered Ministry Lunch",
          subtitle: "Fellowship Hall • Team Networking",
          type: "meal",
          isBreakout: false,
        },
        {
          time: "1:30 PM",
          endTime: "3:00 PM",
          title: "Track Breakout Session V (Live Labs)",
          subtitle: "Studios & Stage • Hands-On Workshops",
          type: "lesson",
          isBreakout: true,
          tracks: {
            video: {
              title: "Mixing, Directing & Communication",
              location: "Studio A • Main Control Room",
            },
            audio: {
              title: "Plugins in Live Sound",
              location: "Main Sanctuary Sound Booth",
            },
            projection: {
              title: "Live Streaming Setup",
              location: "Stage Right Media Lab",
            },
            photography: {
              title: "Types of Photography",
              location: "Room 204 Creative Suite",
            },
          },
        },
        {
          time: "3:30 PM",
          endTime: "5:00 PM",
          title: "Track Breakout Session VI",
          subtitle: "Final Projects & Portfolio Review",
          type: "lesson",
          isBreakout: true,
          tracks: {
            video: {
              title: "Advanced Live Production",
              location: "Studio A • Main Control Room",
            },
            audio: {
              title: "Final Mix & Mastering",
              location: "Main Sanctuary Sound Booth",
            },
            projection: {
              title: "Automation & Best Practices",
              location: "Stage Right Media Lab",
            },
            photography: {
              title: "Building Your Portfolio",
              location: "Room 204 Creative Suite",
            },
          },
        },
        {
          time: "5:30 PM",
          endTime: "6:00 PM",
          title: "Closing Session",
          subtitle: "Main Auditorium • Next Steps & Sending",
          type: "session",
          isBreakout: false,
        },
        {
          time: "6:00 PM",
          endTime: "7:30 PM",
          title: "Fellowship Dinner & Farewell",
          subtitle: "Fellowship Hall • Celebration & Networking",
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
      question: "What are the different tracks?",
      answer:
        "We offer four specialized tracks: Video Production (camera work, editing, live production), Audio Engineering (sound engineering, mixing), Projection & Stage (ProPresenter, LED walls, lighting), and Photography (capturing moments for ministry). You can attend sessions from any track based on your interests.",
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
    { label: "Tracks", href: "#tracks" },
    { label: "Schedule", href: "#schedule" },
    { label: "Venue", href: "#venue" },
    { label: "FAQ", href: "#faq" },
  ],
};

export type Track = (typeof conferenceData.tracks)[number];
export type WhyAttend = (typeof conferenceData.whyAttend)[number];
export type ScheduleEvent = (typeof conferenceData.schedule.day1.events)[number];
export type FAQ = (typeof conferenceData.faqs)[number];
