import { z } from "zod"

export const cvSchema = z.object({
    basics: z.object({
        name: z.string(),
        label: z.string(),
        image: z.string().optional(),
        email: z.string(),
        phone: z.string().optional(),
        url: z.string().optional(),
        summary: z.string(),
        location: z.object({
            address: z.string().optional(),
            postalCode: z.string().optional(),
            city: z.string(),
            countryCode: z.string().optional(),
            region: z.string().optional()
        }).optional(),
        profiles: z.array(
            z.object({ network: z.string(), username: z.string(), url: z.string() })
        ).optional()
    }),
    work: z.array(
        z.object({
            name: z.string(),
            position: z.string(),
            url: z.string().optional(),
            startDate: z.string(),
            endDate: z.string().optional(),
            summary: z.string(),
            highlights: z.array(z.string()).optional()
        })
    ).optional(),
    volunteer: z.array(
        z.object({
            organization: z.string(),
            position: z.string(),
            url: z.string().optional(),
            startDate: z.string(),
            endDate: z.string().optional(),
            summary: z.string(),
            highlights: z.array(z.string()).optional()
        })
    ).optional(),
    education: z.array(
        z.object({
            institution: z.string(),
            url: z.string().optional(),
            area: z.string(),
            studyType: z.string().optional(),
            startDate: z.string(),
            endDate: z.string().optional(),
            score: z.string().optional(),
            courses: z.array(z.string()).optional()
        })
    ).optional(),
    awards: z.array(
        z.object({
            title: z.string(),
            date: z.string(),
            awarder: z.string(),
            summary: z.string().optional()
        })
    ).optional(),
    certificates: z.array(
        z.object({
            name: z.string(),
            date: z.string(),
            issuer: z.string(),
            url: z.string().optional()
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
            keywords: z.array(z.string()).optional()
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
            endDate: z.string().optional(),
            description: z.string().optional(),
            highlights: z.array(z.string()).optional(),
            url: z.string()
        })
    ).optional()
})
