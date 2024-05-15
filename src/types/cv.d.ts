export interface CV  {
    basics: Basics;
    work: Work[];
    volunteer: Volunteer[];
    education: Education[];
    awards: Awards[];
    certificates: Certificates[];
    publications: Publications[];
    skills: Skills[];
    languages: Languages[];
    interests: Interests[];
    references: References[];
    projects: Projects[];
};

export interface Basics {
    name: string;
    label: string;
    image?: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: {
        address: string;
        postalCode: string;
        city: string;
        countryCode: string;
        region: string;
    };
    profiles: {
        network: string;
        username: string;
        url: string;
    }[];
}

interface Work {
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

interface Volunteer {
    organization: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

interface Education {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
}

export interface Awards {
    title: string;
    date: string;
    awarder: string;
    summary: string;
}

interface Certificates {
    name: string;
    date: string;
    issuer: string;
    url: string;
}

interface Publications {
    name: string;
    publisher: string;
    releaseDate: string;
    url: string;
    summary: string;
}

interface Skills {
    name: string;
    level: string;
    keywords: string[];
}

interface Languages {
    language: string;
    fluency: string;
}

interface Interests {
    name: string;
    keywords: string[];
}

interface References {
    name: string;
    reference: string;
}

interface Projects {
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
    url: string;
}