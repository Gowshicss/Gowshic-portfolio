/**
 * Leadership, Hackathons, and Achievements Data
 * Image-led cards for verified competitive awards, leadership roles,
 * and an image gallery for IGNITE events and presentations.
 */

export const awards = [
  {
    id: 'technova',
    title: 'TechNova — Student Career & Placement Intelligence Platform',
    placement: 'Second Place Winner',
    prize: '₹750 Cash Prize',
    competition: "NEXORA'26 (IT Dept with INFOBEE, Dr. Mahalingam College of Engineering and Technology)",
    description:
      "Awarded second place for TechNova, a student career and placement intelligence platform at NEXORA'26.",
    date: '24 September 2026',
    image: '/images/achievements/technovaaward.jpeg',
    imageAlt: "TechNova second place award ceremony photograph at NEXORA'26",
    tag: 'Hackathon Award',
    additionalImages: [
      {
        src: '/images/achievements/technova-winning.jpeg',
        alt: "TechNova second-place Certificate of Appreciation — NEXORA'26, MCET",
        title: 'TechNova — Certificate of Appreciation',
      },
    ],
  },
  {
    id: 'factorymind',
    title: 'FactoryMind AI — Industrial Intelligence',
    placement: '3rd Place Winner',
    prize: '₹1,000 Cash Prize',
    description:
      'Recognized for FactoryMind AI, an industrial intelligence project focused on monitoring manufacturing operations.',
    date: 'Academic Year 2025–2026',
    image: '/images/achievements/factorymind-award.jpg',
    imageAlt: 'FactoryMind AI third-place award certificate',
    tag: 'AI Hackathon Award',
    additionalImages: [
      {
        src: '/images/achievements/factorymind-awardmoney.jpg',
        alt: 'FactoryMind AI prize money photograph',
        title: 'FactoryMind AI — Prize Money',
      },
    ],
  },
  {
    id: 'feature1',
    title: 'Feature1 AI Competition',
    placement: 'Prize Winner',
    prize: '₹2,000 Cash Prize',
    description:
      'Received a ₹2,000 prize for the Feature1 AI Competition.',
    date: 'Academic Year 2025–2026',
    image: '/images/achievements/feature-1-award.jpg',
    imageAlt: 'Feature1 AI competition award certificate',
    tag: 'Innovation Award',
    additionalImages: [
      {
        src: '/images/achievements/feature1-money.jpg',
        alt: 'Feature1 AI prize money photograph',
        title: 'Feature1 AI — Prize Money',
      },
    ],
  },
];

export const achievementsData = {
  sectionTitle: "Achievements & Leadership",
  sectionSubtitle: "02 // VERIFIED AWARDS & CAMPUS LEADERSHIP",
  intro:
    "A visual record of competitive hackathon victories, technical symposium participation, and student leadership in the Department of Information Technology at Dr. Mahalingam College of Engineering and Technology.",

  // 1. Competitive Hackathon & Competition Awards (Image-led)
  awards,

  // 2. Verified Leadership Position
  leadership: {
    role: "Vice President",
    organization: "IGNITE Association",
    department: "Department of Information Technology",
    institution: "Dr. Mahalingam College of Engineering and Technology",
    term: "Active Term",
    description:
      "Serving as Vice President of the IGNITE Association at Dr. Mahalingam College of Engineering and Technology, I contribute to student leadership and campus engagement, helping coordinate 20+ events impacting 1,300+ students. I work with student teams to organize technical and non-technical activities, encourage student participation, and create opportunities for collaboration, learning, and professional development.",
    impactStatement:
      "This leadership experience has strengthened my skills in event management, team coordination, communication, strategic planning, and problem-solving while allowing me to make a meaningful impact on the student community.",
    keyResponsibilities: [
      "Helped coordinate 20+ technical and non-technical events impacting 1,300+ students across campus.",
      "Collaborated with student teams to foster participation, peer learning, and professional development.",
      "Directed event management, team coordination, strategic planning, and cross-department communication.",
    ],
    image: "/images/events/ignite-team-and-event.jpeg",
    imageAlt: "IGNITE Association — Collaborative Team and Event at Dr. MCET",
  },

  // 3. IGNITE Leadership & Collaborative Photo Gallery (Horizontal Scroll Stream)
  igniteGallery: [
    {
      id: "gal-vp-certificate",
      title: "Vice President Certificate of Appreciation",
      caption: "Official IGNITE 2K25 Certificate awarded in recognition of valuable contribution and dedicated service as Vice President.",
      image: "/images/certificates/ignite-vp-certificate.jpg",
      tag: "Leadership Certificate",
    },
    {
      id: "gal-auditorium-stage",
      title: "NIA Convention & Stage Felicitation",
      caption: "Department annual convention celebration on the auditorium stage with NIA Educational Institutions dignitaries.",
      image: "/images/events/ignite-auditorium-stage.jpg",
      tag: "Stage Felicitation",
    },
    {
      id: "gal-student-team",
      title: "IGNITE Student Core Team",
      caption: "Student organizers in IGNITE attire with the Dr. MCET college banner celebrating collaborative event success.",
      image: "/images/events/ignite-student-team.jpg",
      tag: "Core Team",
    },
    {
      id: "gal-faculty-council",
      title: "Executive Council & Department Dignitaries",
      caption: "Student office bearers felicitated alongside department faculty leadership and academic mentors.",
      image: "/images/events/ignite-faculty-council.jpg",
      tag: "Leadership Council",
    },
    {
      id: "gal-stage-address",
      title: "Stage Address & Event Hosting",
      caption: "Delivering the executive address and hosting proceedings for IGNITE Association initiatives at Dr. MCET.",
      image: "/images/events/ignite-stage-address.jpg",
      tag: "Stage Address",
    },
    {
      id: "gal-award-presentation",
      title: "IGNITE Award & Certificate Felicitation",
      caption: "Receiving the certificate of appreciation and trophy alongside department faculty mentors and dignitaries.",
      image: "/images/events/ignite-award-presentation.jpg",
      tag: "Award Felicitation",
    },
  ],

  // 4. Technical Participation (IRISH-2K26 National Level Technical Symposium)
  technicalParticipation: {
    id: "tech-participant-irish2k26",
    title: "IRISH - 2K26 National Level Technical Symposium",
    role: "Technical Participant",
    eventTracks: "Paper Presentation / Project Display",
    institution: "P.A. College of Engineering and Technology, Pollachi",
    representedCollege: "Dr. Mahalingam College of Engineering & Technology",
    department: "Department of Science and Humanities",
    date: "16 April 2026",
    summary:
      "Active technical participant representing Dr. Mahalingam College of Engineering & Technology in the Paper Presentation and Project Display tracks at the IRISH - 2K26 National Level Technical Symposium hosted by P.A. College of Engineering and Technology.",
    certificateImage: "/images/certificates/irish-symposium-participation.jpg",
    certificateAlt: "IRISH - 2K26 Certificate of Participation — Gowshic S S, Technical Participant",
    tag: "Technical Participant",
  },
};
