import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from '@remix-run/node'
import { useActionData, useLoaderData } from '@remix-run/react'
import JobPostingForm from '~/components/common/job-posting-form'
import { validateJobPostingInput } from '~/lib/validateJobPostingInput'

import { getJobPostingWithoutAuthor, updateJobPosting } from '~/models/jobPosting.server'
import { requireUserId } from '~/session.server'

export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireUserId(request)
  const job = await getJobPostingWithoutAuthor(params.jobId!)

  if (!job) {
    throw new Error('Job not found')
  }

  return json({ job })
}

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData()

  const jobTitle = String(formData.get('jobTitle'))
  const companyName = String(formData.get('companyName'))
  const category = String(formData.get('category'))
  const employmentType = String(formData.get('employmentType'))
  const jobDescription = String(formData.get('jobDescription'))
  const salaryMin = Number(formData.get('salaryMin')) || null
  const salaryMax = Number(formData.get('salaryMax')) || null
  const salaryType = String(formData.get('salaryType'))
  const partOfTown = String(formData.get('partOfTown'))
  const workPresence = String(formData.get('workPresence'))
  const companyWebsite = String(formData.get('companyWebsite'))
  const howToApply = String(formData.get('howToApply'))
  const linkToApply = String(formData.get('linkToApply'))
  const contactEmail = String(formData.get('contactEmail'))
  const contactPhone = String(formData.get('contactPhone'))
  const customInstructions = String(formData.get('customInstructions'))

  const errors = validateJobPostingInput(
    jobTitle,
    companyName,
    category,
    employmentType,
    jobDescription,
    salaryMin,
    salaryMax,
    salaryType,
    workPresence,
    companyWebsite,
    howToApply,
    linkToApply,
    contactEmail,
    contactPhone,
    customInstructions,
  )
  
  if (Object.values(errors).some(Boolean)) {
    return json({ errors }, { status: 400 })
  }

  try {
    await updateJobPosting({
      id: String(params.jobId),
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
    })
  
    return redirect(`/jobs/${params.jobId}?job_updated=true`)
  } catch (error) {
    console.log(error)
  }
}

export default function EditJob() {
  const { job } = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-20 flex flex-col items-center px-2">
      <JobPostingForm job={job} errors={actionData?.errors} />
    </div>
  )
}
