export interface ServicePreviewItem {
  id: string;
  categoryKey: string;
  title: string;
  description: string;
  ctaText: string;
  image: string;
  imageAlt: string;
  tag: string;
}

export interface TreatmentCategoryDetail {
  key: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  suitableFor: string[];
  benefits: string[];
  featuredOffer?: string;
  image: string;
  imageAlt: string;
  ctaText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  image: string;
  imageAlt: string;
  isPlaceholderNote: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientLabel: string;
  treatmentLabel: string;
  isPlaceholder: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteContent {
  business: {
    name: string;
    owner: string;
    title: string;
    locationShort: string;
    locationFull: string;
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    bookingUrl: string;
    facebookUrl: string;
    coreMessage: string;
    supportingMessages: string[];
    brandThemes: string[];
  };
  announcementBar: {
    enabled: boolean;
    text: string;
    ctaText: string;
  };
  newClientSpecial: {
    enabled: boolean;
    eyebrow: string;
    headline: string;
    price: string;
    treatment: string;
    description: string;
    ctaText: string;
    secondaryText: string;
  };
  giveawayPromo: {
    enabled: boolean;
    statusLabel: string;
    headline: string;
    subcopy: string;
    tagline: string;
    steps: { number: string; text: string }[];
    deadlineDate: string;
    winnerAnnouncementDate: string;
    ctaText: string;
  };
  referralPromo: {
    enabled: boolean;
    headline: string;
    rewardAmount: string;
    copy: string;
    ctaText: string;
  };
  lashModelPromo: {
    enabled: boolean;
    headline: string;
    subheadline: string;
    price: string;
    copy: string;
    appointmentTime: string;
    requirements: string[];
    ctaText: string;
  };
  servicesPreview: ServicePreviewItem[];
  treatmentCategories: TreatmentCategoryDetail[];
  gallery: GalleryItem[];
  testimonials: TestimonialItem[];
  faqs: FAQItem[];
}

export const defaultSiteContent: SiteContent = {
  business: {
    name: 'Skin by Nadiya',
    owner: 'Nadiya Giordano',
    title: 'Licensed Esthetician',
    locationShort: 'DeLand, FL',
    locationFull: 'DeLand, Florida',
    phoneDisplay: '(267) 625-5702',
    phoneHref: 'tel:2676255702',
    email: 'nadiyagiordano1993@yahoo.com',
    bookingUrl: 'https://skinbynadiya.booksy.com/',
    facebookUrl: 'https://www.facebook.com/people/Nadiya-Giordano/61583448299312/',
    coreMessage: 'Your Skin. Your Confidence.',
    supportingMessages: [
      'Relax. Rejuvenate. Glow.',
      'Aesthetic treatments that bring out your natural beauty.',
      'Healthy skin. Happier you.',
    ],
    brandThemes: [
      'CONFIDENCE',
      'SKIN',
      'SELF CARE',
      'POREFECTION',
      'WELLNESS',
      'REAL RESULTS',
      'YOU',
      'AESTHETICS',
    ],
  },
  announcementBar: {
    enabled: true,
    text: 'NEW CLIENT SPECIAL — EUROPEAN FACIAL $95',
    ctaText: 'BOOK NOW',
  },
  newClientSpecial: {
    enabled: true,
    eyebrow: 'NEW CLIENT OFFERING',
    headline: 'A LITTLE SOMETHING FOR NEW CLIENTS',
    price: '$95',
    treatment: 'EUROPEAN FACIAL',
    description:
      'Experience our signature European Facial — a customized, results-driven treatment tailored to your unique skin goals.',
    ctaText: 'CLAIM YOUR NEW CLIENT SPECIAL',
    secondaryText:
      'Limited promotional pricing. Contact Nadiya for current availability and details.',
  },
  giveawayPromo: {
    enabled: true,
    statusLabel: 'CAMPAIGN TEMPLATE • DATES EDITABLE',
    headline: 'WIN A FREE RF TREATMENT',
    subcopy: 'ONE LUCKY WINNER',
    tagline: 'TAG • COMMENT • GLOW',
    steps: [
      { number: '01', text: 'Tag 3 people in the comments' },
      { number: '02', text: 'Comment why you think RF would benefit you' },
      { number: '03', text: "That's it — you're entered to win!" },
    ],
    deadlineDate: '[ADD DATE]',
    winnerAnnouncementDate: '[ADD DATE]',
    ctaText: 'ENTER THE GIVEAWAY',
  },
  referralPromo: {
    enabled: true,
    headline: 'REFER A FRIEND. GET $20.',
    rewardAmount: '$20',
    copy: 'Share the glow with someone you love and receive $20 toward your next RF treatment.',
    ctaText: 'REFER A FRIEND',
  },
  lashModelPromo: {
    enabled: true,
    headline: 'LASH MODEL NEEDED',
    subheadline: 'CLASSIC LASH EXTENSIONS — FULL SET $100',
    price: '$100',
    copy: 'Help me perfect my craft!',
    appointmentTime: '2–3 hours',
    requirements: [
      'Must have clean, healthy lashes',
      'No lash extensions currently on',
      'No heavy makeup or mascara',
      'Must be able to relax with eyes closed',
      'Please arrive on time',
      'A patch test may be required',
      'Photos may be taken for portfolio purposes',
    ],
    ctaText: "I'M INTERESTED",
  },
  servicesPreview: [
    {
      id: 'facials',
      categoryKey: 'FACIALS',
      title: 'FACIALS',
      description:
        'Customized facials designed to address individual skin concerns and restore your natural glow.',
      ctaText: 'EXPLORE FACIALS',
      image: '/images/european-facial.jpg',
      imageAlt: 'Relaxing customized European facial treatment in a warm boutique skincare studio',
      tag: 'BESPOKE SKINCARE',
    },
    {
      id: 'rf-skin-tightening',
      categoryKey: 'RF SKIN TIGHTENING',
      title: 'RF SKIN TIGHTENING',
      description:
        'Stimulates collagen and elastin production to help firm skin, improve texture, and reduce the appearance of fine lines.',
      ctaText: 'LEARN ABOUT RF',
      image: '/images/rf-treatment.jpg',
      imageAlt: 'Close-up of non-invasive RF skin tightening treatment wand on glowing cheekbone',
      tag: 'COLLAGEN & FIRMING',
    },
    {
      id: 'ultrasonic-cavitation',
      categoryKey: 'BODY CONTOURING',
      title: 'ULTRASONIC CAVITATION',
      description:
        'A non-invasive body contouring treatment designed to help contour and slim targeted areas.',
      ctaText: 'EXPLORE BODY CONTOURING',
      image: '/images/body-contouring-editorial.jpg',
      imageAlt: 'Modern ultrasonic cavitation aesthetic handpiece resting on warm travertine stone with spa linens',
      tag: 'NON-INVASIVE SCULPTING',
    },
    {
      id: 'lash-services',
      categoryKey: 'LASH SERVICES',
      title: 'LASH SERVICES',
      description:
        'Lash lifts designed to enhance your natural lashes and create a beautiful lifted appearance.',
      ctaText: 'VIEW LASH SERVICES',
      image: '/images/lash-brow-editorial.jpg',
      imageAlt: 'Natural lifted eyelashes and radiant skin in warm editorial lighting',
      tag: 'NATURAL ENHANCEMENT',
    },
    {
      id: 'brow-services',
      categoryKey: 'BROW SERVICES',
      title: 'BROW SERVICES',
      description:
        'Brow lamination designed to create fuller-looking, beautifully shaped brows.',
      ctaText: 'VIEW BROW SERVICES',
      image: 'https://images.pexels.com/photos/5659055/pexels-photo-5659055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200',
      imageAlt: 'Esthetician providing personalized brow and facial consultation in a calm studio',
      tag: 'DEFINED ARCHES',
    },
  ],
  treatmentCategories: [
    {
      key: 'FACIALS',
      label: 'FACIALS',
      title: 'Customized Facials & Signature European Care',
      subtitle: 'Tailored to your individual complexion, season, and skin goals.',
      description:
        'Every facial at Skin by Nadiya begins with a thoughtful look at your skin’s unique needs. From our signature European Facial to targeted hydration, soothing care, and pore-refining rituals, treatments are thoughtfully curated to leave your complexion feeling balanced, refreshed, and luminous.',
      suitableFor: [
        'Clients seeking a personalized skincare routine and professional glow',
        'Dull, dehydrated, or tired-looking complexions needing replenishment',
        'Congested pores or uneven-looking skin texture',
        'Anyone looking to unwind with restorative, results-focused self-care',
      ],
      benefits: [
        'Deeply cleanses, exfoliates, and nourishes the skin barrier',
        'Tailored selection of high-quality professional products',
        'Promotes a healthy-looking, radiant glow with relaxing facial massage',
        'Includes personalized guidance for your skin journey',
      ],
      featuredOffer: 'New Client Special: Signature European Facial — $95',
      image: '/images/european-facial.jpg',
      imageAlt: 'Signature European facial treatment with gentle massage',
      ctaText: 'BOOK A FACIAL',
    },
    {
      key: 'RF SKIN TIGHTENING',
      label: 'RF SKIN TIGHTENING',
      title: 'Radiofrequency (RF) Skin Tightening',
      subtitle: 'Tighter. Smoother. Brighter. Non-invasive skin rejuvenation.',
      description:
        "RF, or radiofrequency, is a non-invasive skin rejuvenation treatment that uses gentle heat energy to stimulate your body's natural collagen and elastin production. Designed to feel warm and relaxing, RF helps support firmer, smoother-looking skin without downtime.",
      suitableFor: [
        'Clients noticing mild to moderate skin laxity or loss of firmness',
        'Those looking to soften the appearance of fine lines and wrinkles',
        'Individuals wanting smoother skin texture and a refreshed contour',
        'Busy lifestyles seeking non-invasive rejuvenation with zero downtime',
      ],
      benefits: [
        'Tightens & Firms: Helps improve the appearance of loose skin',
        'Supports Collagen: Stimulates natural collagen and elastin production',
        'Smoother-Looking Skin: Helps reduce the appearance of fine lines and wrinkles',
        'Improved Texture: Helps improve the appearance of skin texture and tone',
        'No Downtime: Fits comfortably into your daily routine',
      ],
      featuredOffer: 'Ask about multi-session plans or refer a friend for $20 toward RF',
      image: '/images/rf-treatment.jpg',
      imageAlt: 'RF skin tightening treatment on cheekbone and jawline',
      ctaText: 'BOOK AN RF TREATMENT',
    },
    {
      key: 'BODY CONTOURING',
      label: 'BODY CONTOURING',
      title: 'Ultrasonic Cavitation Body Contouring',
      subtitle: 'Targeted non-invasive sculpting designed around your confidence.',
      description:
        'Ultrasonic cavitation is a gentle, non-invasive body contouring treatment designed to help contour and slim targeted areas using low-frequency sound waves. Each session is customized around your individual goals in a calm, supportive boutique environment.',
      suitableFor: [
        'Individuals looking for non-invasive contouring of targeted areas',
        'Clients complementing a balanced wellness and self-care lifestyle',
        'Those seeking a comfortable treatment experience without downtime',
      ],
      benefits: [
        'Non-invasive technology designed to target specific body areas',
        'Comfortable, relaxing in-studio sessions with personalized attention',
        'Can be paired with skin-firming modalities for a comprehensive plan',
        'No surgical recovery or interruption to your schedule',
      ],
      image: '/images/body-contouring-editorial.jpg',
      imageAlt: 'Ultrasonic cavitation body contouring aesthetic handpiece and warm linens',
      ctaText: 'BOOK BODY CONTOURING',
    },
    {
      key: 'LASH SERVICES',
      label: 'LASH SERVICES',
      title: 'Lash Lifts & Classic Lash Enhancements',
      subtitle: 'Effortless morning beauty that highlights your natural eyes.',
      description:
        'Our lash services are designed to enhance your natural lashes and create a beautiful, lifted, eye-opening appearance. Whether you prefer the low-maintenance elegance of a natural lash lift or are interested in our Classic Lash Extensions portfolio opportunity, every set is performed with meticulous care.',
      suitableFor: [
        'Clients who want naturally lifted, curled lashes without daily curling',
        'Those seeking an effortless, awake look from morning to night',
        'Prospective lash models interested in Classic Lash Extensions ($100 Full Set promo)',
      ],
      benefits: [
        'Enhances natural lash length and curl for a bright, open-eye effect',
        'Custom curl selection suited to your unique eye shape',
        'Gentle, relaxing application experience in a serene setting',
        'Low-maintenance beauty that simplifies your daily routine',
      ],
      featuredOffer: 'Lash Model Opportunity: Classic Lash Extensions Full Set — $100',
      image: '/images/lash-brow-editorial.jpg',
      imageAlt: 'Close-up of naturally lifted eyelashes and glowing skin',
      ctaText: 'BOOK LASH SERVICES',
    },
    {
      key: 'BROW SERVICES',
      label: 'BROW SERVICES',
      title: 'Brow Lamination & Restorative Styling',
      subtitle: 'Fuller-looking, beautifully shaped brows tailored to your features.',
      description:
        'Brow lamination smooths, lifts, and redirects your natural brow hairs to create a fuller-looking, feathery, and symmetrically styled arch. Designed to work harmoniously with your facial features for a polished yet natural look.',
      suitableFor: [
        'Clients with unruly, downward-growing, or sparse-looking brows',
        'Anyone desiring a fuller, brushed-up, editorial brow finish',
        'Clients pairing lash and brow enhancements for complete eye framing',
      ],
      benefits: [
        'Creates the appearance of fuller, fluffier, more uniform brows',
        'Helps tame stubborn brow hairs into an effortlessly groomed shape',
        'Tailored styling ranging from soft and natural to sleek and defined',
        'Pairs seamlessly with facials or lash lift appointments',
      ],
      image: 'https://images.pexels.com/photos/3985323/pexels-photo-3985323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200',
      imageAlt: 'Relaxing brow and facial aesthetics treatment in studio',
      ctaText: 'BOOK BROW SERVICES',
    },
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'The Boutique Sanctuary',
      category: 'STUDIO ATMOSPHERE',
      caption: 'A calm, warm environment in DeLand, FL curated for unhurried skincare and personal attention.',
      image: '/images/studio-sanctuary.jpg',
      imageAlt: 'Skin by Nadiya warm travertine tray, apothecary bottles, and plush ivory towels',
      isPlaceholderNote: 'Editorial Studio Preview • Client Results Gallery Slot 01',
    },
    {
      id: 'gal-2',
      title: 'Signature European Facial Ritual',
      category: 'CUSTOMIZED FACIALS',
      caption: 'Thoughtful product selection and restorative facial massage tailored to your unique complexion.',
      image: '/images/european-facial.jpg',
      imageAlt: 'Esthetician performing a gentle European facial massage',
      isPlaceholderNote: 'Treatment Atmosphere • Client Results Gallery Slot 02',
    },
    {
      id: 'gal-3',
      title: 'Radiofrequency Skin Rejuvenation',
      category: 'RF SKIN TIGHTENING',
      caption: 'Gentle thermal energy designed to support natural collagen and firmer, smoother-looking skin.',
      image: '/images/rf-treatment.jpg',
      imageAlt: 'Radiofrequency skin tightening wand treatment close-up',
      isPlaceholderNote: 'Treatment Modality • Client Results Gallery Slot 03',
    },
    {
      id: 'gal-4',
      title: 'Lash Lift & Brow Lamination Artistry',
      category: 'LASH & BROW',
      caption: 'Natural enhancements that frame your eyes and elevate your everyday confidence.',
      image: '/images/lash-brow-editorial.jpg',
      imageAlt: 'Naturally lifted lashes and laminated brows editorial close-up',
      isPlaceholderNote: 'Editorial Detail • Client Results Gallery Slot 04',
    },
    {
      id: 'gal-5',
      title: 'Radiant, Healthy-Looking Complexion',
      category: 'POREFECTION AESTHETICS',
      caption: 'Focused on healthy skin barriers, luminous hydration, and long-term skin confidence.',
      image: '/images/hero-glow.jpg',
      imageAlt: 'Woman with naturally glowing skin in warm golden sunlight',
      isPlaceholderNote: 'Editorial Beauty • Client Results Gallery Slot 05',
    },
    {
      id: 'gal-6',
      title: 'Personalized Skin Consultation',
      category: 'INDIVIDUAL CARE',
      caption: 'Every appointment starts by listening to your skin concerns and crafting a bespoke plan.',
      image: 'https://images.pexels.com/photos/5659049/pexels-photo-5659049.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200',
      imageAlt: 'Esthetician providing personalized facial care in serene room',
      isPlaceholderNote: 'Treatment Experience • Client Results Gallery Slot 06',
    },
  ],
  testimonials: [
    {
      id: 'test-1',
      quote: 'Client testimonial will be added here.',
      clientLabel: 'Future Client Reflection • Slot 01',
      treatmentLabel: 'Signature European Facial',
      isPlaceholder: true,
    },
    {
      id: 'test-2',
      quote: 'Client testimonial will be added here.',
      clientLabel: 'Future Client Reflection • Slot 02',
      treatmentLabel: 'RF Skin Tightening',
      isPlaceholder: true,
    },
    {
      id: 'test-3',
      quote: 'Client testimonial will be added here.',
      clientLabel: 'Future Client Reflection • Slot 03',
      treatmentLabel: 'Lash & Brow Artistry',
      isPlaceholder: true,
    },
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'What should I expect at my first appointment?',
      answer:
        'Your first visit begins with a warm, one-on-one skin consultation. Nadiya will discuss your current routine, lifestyle, and specific skin goals, examine your complexion, and customize your treatment so you can relax knowing every step is tailored specifically to you.',
    },
    {
      id: 'faq-2',
      question: 'How do I know which facial is right for me?',
      answer:
        'You do not need to have everything figured out before you arrive. Our signature European Facial ($95 for new clients) is fully customized during your appointment based on what your skin needs most that day—whether that is hydration, soothing care, pore refinement, or radiance.',
    },
    {
      id: 'faq-3',
      question: 'What is RF skin tightening?',
      answer:
        "RF, or radiofrequency, is a non-invasive skin rejuvenation treatment that uses gentle heat energy to stimulate your body's natural collagen and elastin production. It helps tighten and firm the appearance of loose skin, smooth fine lines, and improve overall skin texture.",
    },
    {
      id: 'faq-4',
      question: 'Is RF treatment non-invasive?',
      answer:
        'Yes. RF skin tightening is completely non-invasive. Most clients describe the sensation as a comfortable, relaxing warmth gliding across the skin. Individual results may vary, and treatment suitability will be discussed during your appointment.',
    },
    {
      id: 'faq-5',
      question: 'Is there downtime after RF treatment?',
      answer:
        'RF skin tightening is designed to have no downtime, making it easy to fit comfortably into your normal schedule. Your skin may look mildly flushed or warm immediately following the session, which typically settles shortly after.',
    },
    {
      id: 'faq-6',
      question: 'How should I prepare for my appointment?',
      answer:
        'Arrive with a comfortable mindset and, if possible, minimal heavy makeup—especially for lash or brow services. If you are coming in for a lash service or the Lash Model opportunity, please arrive with clean lashes free of mascara or existing extensions. Nadiya will share any specific pre-care notes when you book.',
    },
    {
      id: 'faq-7',
      question: 'Do you offer lash and brow services?',
      answer:
        'Yes! Skin by Nadiya offers lash lifts to enhance and lift your natural lashes, brow lamination for fuller-looking, beautifully shaped brows, and is currently offering a Classic Lash Extensions Full Set ($100) Lash Model promotion for eligible clients.',
    },
    {
      id: 'faq-8',
      question: 'How do I book an appointment?',
      answer:
        'You can book directly online anytime through our Booksy scheduling page at skinbynadiya.booksy.com, call or text (267) 625-5702, or send a message using the contact form below.',
    },
    {
      id: 'faq-9',
      question: 'Where are you located?',
      answer:
        'Skin by Nadiya is proudly based in DeLand, Florida. Full studio arrival details and appointment instructions are provided upon booking confirmation.',
    },
  ],
};
