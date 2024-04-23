import { z } from 'zod'

export const jobPostingSchema = z.object({
  jobTitle: z.string(),
  companyName: z.string(),
  category: z.string(),
  employmentType: z.enum([
    'Full-time',
    'Part-time',
    'Contract',
    'Internship',
    'Volunteer',
  ]),
  jobDescription: z.string(),
  salaryMin: z.preprocess((val) => Number(val), z.number().nonnegative().optional()),
  salaryMax: z.preprocess((val) => Number(val), z.number().nonnegative().optional()),
  salaryType: z.enum(['Yearly', 'Per Hour']),
  partOfTown: z.string().optional(),
  workPresence: z.enum(['Remote', 'In person', 'Hybrid']),
  companyWebsite: z.union([z.string().url(), z.string().optional()]),
  linkToApply: z.union([z.string().url(), z.string().optional()]),
  contactEmail: z.string().email().optional(),
  contactPhone: z.string().regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, 'Invalid phone number').optional(),
  customInstructions: z.string().optional(),
}).refine(data => {
  return !data.salaryMin || !data.salaryMax || data.salaryMin <= data.salaryMax
}, {
  message: 'Salary Max must be greater than or equal to Salary Min',
  path: ['salaryMax'],
})

export type JobPostingSchema = z.infer<typeof jobPostingSchema>