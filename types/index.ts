import { PortableTextBlock } from "sanity";

export type GeneralInfoType = {
    _id: string,
    fullName: string,
    aboutMe: PortableTextBlock[],
    emailAddress: string,
    locationL: string,
    socialLinks: string[],
    skills: {name: string, description: string}[]
}

export type WorksType = {
    _id: string,
    name: string,
    company: string,
    description: PortableTextBlock[],
    excerpt: string,
    thumbnail: {
        alt: string,
        url: string
    },
    featuredImage: {
        alt: string,
        url: string
    },
    siteUrl: string,
    codeUrl: string
}