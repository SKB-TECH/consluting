"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "fr";

const dictionaries = {
  en: {
    nav: {
      opportunities: "Opportunities",
      services: "Services",
      process: "Process",
      contact: "Contact",
      cta: "Schedule a Consultation",
    },
    hero: {
      badge: "Your partner in progress",
      title: "Invest in the Democratic Republic of Congo with confidence.",
      description:
          "BJA Consulting Sarl supports international investors, entrepreneurs and organizations seeking trusted local guidance, market entry support and reliable business opportunities in the DRC.",
      primary: "Start a conversation",
      secondary: "Explore opportunities",
      points: [
        "Local expertise",
        "Investor-focused advice",
        "Reliable market access",
      ],
      cardLabel: "Strategic sectors",
      cardTitle: "Mining, energy, agriculture and infrastructure",
    },
    about: {
      label: "About BJA Consulting Sarl",
      title: "A trusted bridge between investors and the DRC market",
      description:
          "BJA Consulting Sarl positions itself as a reliable business advisory partner for international investors looking to enter, understand and expand within the Democratic Republic of Congo.",
      points: [
        "Local knowledge of the Congolese market",
        "Professional guidance for foreign investors",
        "Structured support from discovery to execution",
        "Focus on trust, transparency and long-term value",
      ],
    },
    opportunities: {
      label: "Investment opportunities",
      title: "High-potential sectors in the DRC",
      description:
          "BJA Consulting Sarl helps investors identify, evaluate and structure opportunities across strategic sectors of the Congolese economy.",
      items: [
        {
          title: "Hydropower",
          text: "Energy projects and infrastructure opportunities with strong regional impact.",
        },
        {
          title: "Solar Energy",
          text: "Renewable energy initiatives for industrial, public and private sector needs.",
        },
        {
          title: "Agriculture",
          text: "Agri-business, food production and value chain development opportunities.",
        },
        {
          title: "Mining",
          text: "Resource-driven opportunities supported by local insight and strategic guidance.",
        },
        {
          title: "Logistics",
          text: "Trade corridors, distribution, import-export and operational support.",
        },
        {
          title: "Real Estate",
          text: "Commercial, industrial and residential development opportunities.",
        },
      ],
    },
    services: {
      label: "What we do",
      title: "End-to-end advisory for serious investors",
      items: [
        {
          title: "Market Entry Strategy",
          text: "Understand local realities, risks, regulations and viable paths to enter the market.",
        },
        {
          title: "Business Advisory",
          text: "Strategic guidance for investors, entrepreneurs and companies expanding in the DRC.",
        },
        {
          title: "Partnership Facilitation",
          text: "Connect with credible partners, institutions and local business stakeholders.",
        },
        {
          title: "Legal & Administrative Support",
          text: "Support for documentation, registration, compliance and operational readiness.",
        },
        {
          title: "Investment Guidance",
          text: "Opportunity screening, feasibility support and practical investor recommendations.",
        },
        {
          title: "Local Representation",
          text: "Reliable local presence to follow up meetings, stakeholders and business operations.",
        },
      ],
    },
    process: {
      label: "Our process",
      title: "From interest to market entry",
      steps: [
        {
          title: "Discovery",
          text: "Understand your investment goals, target sector and business expectations.",
        },
        {
          title: "Market Guidance",
          text: "Provide local insight, opportunity analysis and recommended entry approach.",
        },
        {
          title: "Connection",
          text: "Facilitate relevant meetings, partners, institutions and operational contacts.",
        },
        {
          title: "Execution Support",
          text: "Support administrative, strategic and local follow-up until implementation.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Ready to explore business opportunities in the DRC?",
      description:
          "Send your investment interest and BJA Consulting Sarl will help you define the next step.",
      location: "Kinshasa, Democratic Republic of Congo",
      fullName: "Full name",
      company: "Company",
      country: "Country",
      email: "Email address",
      interest: "Investment interest",
      message: "Tell us about your project",
      button: "Schedule a Consultation",
    },
    footer: {
      text: "Your Partner in Progress.",
    },
  },

  fr: {
    nav: {
      opportunities: "Opportunités",
      services: "Services",
      process: "Processus",
      contact: "Contact",
      cta: "Planifier une consultation",
    },
    hero: {
      badge: "Votre partenaire vers le progrès",
      title: "Investissez en République Démocratique du Congo en toute confiance.",
      description:
          "BJA Consulting Sarl accompagne les investisseurs internationaux, entrepreneurs et organisations qui recherchent un appui local fiable, une stratégie d’entrée sur le marché et des opportunités d’affaires solides en RDC.",
      primary: "Démarrer un échange",
      secondary: "Voir les opportunités",
      points: [
        "Expertise locale",
        "Conseil orienté investisseur",
        "Accès fiable au marché",
      ],
      cardLabel: "Secteurs stratégiques",
      cardTitle: "Mines, énergie, agriculture et infrastructures",
    },
    about: {
      label: "À propos de BJA Consulting Sarl",
      title: "Un pont de confiance entre les investisseurs et le marché congolais",
      description:
          "BJA Consulting Sarl se positionne comme un partenaire fiable en conseil d’affaires pour les investisseurs internationaux souhaitant entrer, comprendre et se développer en République Démocratique du Congo.",
      points: [
        "Connaissance locale du marché congolais",
        "Accompagnement professionnel des investisseurs étrangers",
        "Support structuré de la découverte à l’exécution",
        "Approche basée sur la confiance, la transparence et la valeur durable",
      ],
    },
    opportunities: {
      label: "Opportunités d’investissement",
      title: "Secteurs à fort potentiel en RDC",
      description:
          "BJA Consulting Sarl aide les investisseurs à identifier, évaluer et structurer des opportunités dans les secteurs stratégiques de l’économie congolaise.",
      items: [
        {
          title: "Hydroélectricité",
          text: "Projets énergétiques et infrastructures à fort impact régional.",
        },
        {
          title: "Énergie solaire",
          text: "Initiatives d’énergie renouvelable pour les besoins industriels, publics et privés.",
        },
        {
          title: "Agriculture",
          text: "Agrobusiness, production alimentaire et développement des chaînes de valeur.",
        },
        {
          title: "Mines",
          text: "Opportunités liées aux ressources naturelles avec un accompagnement stratégique local.",
        },
        {
          title: "Logistique",
          text: "Corridors commerciaux, distribution, import-export et appui opérationnel.",
        },
        {
          title: "Immobilier",
          text: "Opportunités de développement commercial, industriel et résidentiel.",
        },
      ],
    },
    services: {
      label: "Ce que nous faisons",
      title: "Un accompagnement complet pour les investisseurs sérieux",
      items: [
        {
          title: "Stratégie d’entrée sur le marché",
          text: "Comprendre les réalités locales, les risques, la réglementation et les voies d’entrée viables.",
        },
        {
          title: "Conseil d’affaires",
          text: "Orientation stratégique pour les investisseurs, entrepreneurs et entreprises en expansion en RDC.",
        },
        {
          title: "Facilitation de partenariats",
          text: "Mise en relation avec des partenaires crédibles, institutions et acteurs économiques locaux.",
        },
        {
          title: "Appui juridique et administratif",
          text: "Assistance pour la documentation, l’enregistrement, la conformité et la préparation opérationnelle.",
        },
        {
          title: "Orientation en investissement",
          text: "Analyse des opportunités, appui à la faisabilité et recommandations pratiques.",
        },
        {
          title: "Représentation locale",
          text: "Présence locale fiable pour le suivi des réunions, partenaires et opérations.",
        },
      ],
    },
    process: {
      label: "Notre processus",
      title: "De l’intérêt à l’entrée sur le marché",
      steps: [
        {
          title: "Découverte",
          text: "Comprendre vos objectifs d’investissement, votre secteur cible et vos attentes commerciales.",
        },
        {
          title: "Orientation marché",
          text: "Fournir des informations locales, une analyse des opportunités et une approche d’entrée recommandée.",
        },
        {
          title: "Connexion",
          text: "Faciliter les rencontres utiles avec les partenaires, institutions et contacts opérationnels.",
        },
        {
          title: "Appui à l’exécution",
          text: "Accompagner les démarches administratives, stratégiques et le suivi local jusqu’à la mise en œuvre.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Prêt à explorer les opportunités d’affaires en RDC ?",
      description:
          "Envoyez votre intérêt d’investissement et BJA Consulting Sarl vous aidera à définir la prochaine étape.",
      location: "Kinshasa, République Démocratique du Congo",
      fullName: "Nom complet",
      company: "Entreprise",
      country: "Pays",
      email: "Adresse email",
      interest: "Intérêt d’investissement",
      message: "Parlez-nous de votre projet",
      button: "Planifier une consultation",
    },
    footer: {
      text: "Votre partenaire vers le progrès.",
    },
  },
} as const;

type Translation = (typeof dictionaries)[Locale];

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("bja-locale");

    if (savedLocale === "fr" || savedLocale === "en") {
      setLocaleState(savedLocale);
      document.documentElement.lang = savedLocale;
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("bja-locale", nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const value = useMemo<I18nContextValue>(
      () => ({
        locale,
        setLocale,
        t: dictionaries[locale],
      }),
      [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
