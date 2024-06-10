// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getGeneralInfo() {
  return client.fetch(
    groq`*[_type == 'general']{
      _id,
      fullName,
      aboutMe,
      emailAddress,
      location,
      socialLinks,
      skills
    }`
  )
}

export async function getWorks() {
  return client.fetch(
    groq`*[_type == 'works']{
      name,
      company,
      description,
      excerpt,
      thumbnail {alt, "url": asset->url},
      featuredImage {alt, "url": asset->url},
      siteUrl,
      codeUrl
    }`
  )
}