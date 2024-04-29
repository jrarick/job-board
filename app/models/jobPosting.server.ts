import type { JobPosting } from '@prisma/client'

import { prisma } from '~/db.server'

export function getFirstJob() {
  return prisma.jobPosting.findFirst({
    orderBy: { createdAt: 'desc' },
    include: {
      author: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  })
}

export function getJobPostings() {
  return prisma.jobPosting.findMany({
    include: {
      author: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })
}

export function getJobPosting(id: JobPosting['id']) {
  return prisma.jobPosting.findFirst({
    where: { id },
    include: {
      author: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  })
}

export function getJobPostingWithoutAuthor(id: JobPosting['id']) {
  return prisma.jobPosting.findFirst({
    where: { id },
  })
}

export function getJobPostingsByAuthorId(authorId: JobPosting['authorId']) {
  return prisma.jobPosting.findMany({
    orderBy: { createdAt: 'desc' },
    where: { authorId },
  })
}

export function deleteJobPosting(id: JobPosting['id']) {
  return prisma.jobPosting.delete({
    where: { id },
  })
}

export function createJobPosting({
  jobTitle,
  companyName,
  category,
  employmentType,
  jobDescription,
  salaryMin,
  salaryMax,
  salaryType,
  partOfTown,
  workPresence,
  companyWebsite,
  linkToApply,
  contactEmail,
  contactPhone,
  customInstructions,
  authorId,
}: Pick<
  JobPosting,
  | 'jobTitle'
  | 'companyName'
  | 'category'
  | 'employmentType'
  | 'jobDescription'
  | 'salaryMin'
  | 'salaryMax'
  | 'salaryType'
  | 'partOfTown'
  | 'workPresence'
  | 'companyWebsite'
  | 'linkToApply'
  | 'contactEmail'
  | 'contactPhone'
  | 'customInstructions'
> & {
  authorId: JobPosting['authorId']
}) {
  return prisma.jobPosting.create({
    data: {
      jobTitle,
      companyName,
      category,
      employmentType,
      jobDescription,
      salaryMin,
      salaryMax,
      salaryType,
      partOfTown,
      workPresence,
      companyWebsite,
      linkToApply,
      contactEmail,
      contactPhone,
      customInstructions,
      author: {
        connect: {
          id: authorId,
        },
      },
    },
  })
}

export function updateJobPosting({
  id,
  jobTitle,
  companyName,
  category,
  employmentType,
  jobDescription,
  salaryMin,
  salaryMax,
  salaryType,
  partOfTown,
  workPresence,
  companyWebsite,
  linkToApply,
  contactEmail,
  contactPhone,
  customInstructions,
}: Pick<
  JobPosting,
  | 'jobTitle'
  | 'companyName'
  | 'category'
  | 'employmentType'
  | 'jobDescription'
  | 'salaryMin'
  | 'salaryMax'
  | 'salaryType'
  | 'partOfTown'
  | 'workPresence'
  | 'companyWebsite'
  | 'linkToApply'
  | 'contactEmail'
  | 'contactPhone'
  | 'customInstructions'
> & {
  id: JobPosting['id']
}) {
  return prisma.jobPosting.update({
    where: { id },
    data: {
      jobTitle,
      companyName,
      category,
      employmentType,
      jobDescription,
      salaryMin,
      salaryMax,
      salaryType,
      partOfTown,
      workPresence,
      companyWebsite,
      linkToApply,
      contactEmail,
      contactPhone,
      customInstructions,
    },
  })
}
