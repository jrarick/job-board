import { MetaFunction, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import JobPosting from '~/components/JobPosting'
import { useMediaQuery } from '~/lib/useMediaQuery'
import { getFirstJob } from '~/models/jobPosting.server'
import { formatSalaryString } from '~/utils'

export async function loader() {
  const firstJobQuery = await getFirstJob()

  if (!firstJobQuery) {
    throw new Error('Job not found')
  }

  const firstJob = {
    author: {
      firstName: firstJobQuery.author.firstName,
      lastName: firstJobQuery.author.lastName,
    },
    category: firstJobQuery.category,
    companyName: firstJobQuery.companyName,
    createdAt: firstJobQuery.createdAt,
    employmentType: firstJobQuery.employmentType,
    linkToApply: firstJobQuery.linkToApply,
    contactEmail: firstJobQuery.contactEmail,
    contactPhone: firstJobQuery.contactPhone,
    customInstructions: firstJobQuery.customInstructions,
    id: firstJobQuery.id,
    jobDescription: firstJobQuery.jobDescription,
    jobTitle: firstJobQuery.jobTitle,
    partOfTown: firstJobQuery.partOfTown,
    workPresence: firstJobQuery.workPresence,
    companyWebsite: firstJobQuery.companyWebsite,
    formattedSalaryString: formatSalaryString(
      firstJobQuery.salaryMin,
      firstJobQuery.salaryMax,
      firstJobQuery.salaryType
    ),
  }

  return json({ firstJob })
}

export const meta: MetaFunction = () => {
  return [{ title: 'Job Listings | Providence Job Board' }]
}

export default function JobsIndex() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { firstJob } = useLoaderData<typeof loader>()

  if (isDesktop) {
    return <JobPosting job={firstJob} />
  } else return <></>
}
