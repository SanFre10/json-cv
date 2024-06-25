import { z } from "zod"

export const cvSchema = z.object({
    basics: z.object({
        name: z.string(),
        label: z.string(),
        image: z.string(),
        email: z.string(),
        phone: z.string(),
        url: z.string(),
        summary: z.string(),
        location: z.object({
            address: z.string(),
            postalCode: z.string(),
            city: z.string(),
            countryCode: z.string(),
            region: z.string()
        }),
        profiles: z.array(
            z.object({ network: z.string(), username: z.string(), url: z.string() })
        )
    }),
    work: z.array(
        z.object({
            name: z.string(),
            position: z.string(),
            url: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            summary: z.string(),
            highlights: z.array(z.string())
        })
    ).optional(),
    volunteer: z.array(
        z.object({
            organization: z.string(),
            position: z.string(),
            url: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            summary: z.string(),
            highlights: z.array(z.string())
        })
    ).optional(),
    education: z.array(
        z.object({
            institution: z.string(),
            url: z.string(),
            area: z.string(),
            studyType: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            score: z.string(),
            courses: z.array(z.string())
        })
    ).optional(),
    awards: z.array(
        z.object({
            title: z.string(),
            date: z.string(),
            awarder: z.string(),
            summary: z.string()
        })
    ).optional(),
    certificates: z.array(
        z.object({
            name: z.string(),
            date: z.string(),
            issuer: z.string(),
            url: z.string()
        })
    ).optional(),
    publications: z.array(
        z.object({
            name: z.string(),
            publisher: z.string(),
            releaseDate: z.string(),
            url: z.string(),
            summary: z.string()
        })
    ).optional(),
    skills: z.array(
        z.object({
            name: z.string(),
            level: z.string(),
            keywords: z.array(z.string())
        })
    ).optional(),
    languages: z.array(z.object({ language: z.string(), fluency: z.string() })).optional(),
    interests: z.array(
        z.object({ name: z.string(), keywords: z.array(z.string()) })
    ).optional(),
    references: z.array(z.object({ name: z.string(), reference: z.string() })).optional(),
    projects: z.array(
        z.object({
            name: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            description: z.string(),
            highlights: z.array(z.string()),
            url: z.string()
        })
    ).optional()
})
