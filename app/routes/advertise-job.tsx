import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction, json, redirect } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { ZodError } from 'zod'
import JobPostingForm from '~/components/common/job-posting-form'
import { createJobPosting } from '~/models/jobPosting.server'
import { jobPostingSchema } from '~/schemas/jobPostingSchema'
import { requireUserId } from '~/session.server'

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserId(request)
  return json({})
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const userId = await requireUserId(request)
  const formPayload = Object.fromEntries(await request.formData())

  try {
    const jobPostingData = jobPostingSchema.parse(formPayload)

    const newJobPosting = await createJobPosting({
      jobTitle: jobPostingData.jobTitle,
      companyName: jobPostingData.companyName,
      category: jobPostingData.category,
      employmentType: jobPostingData.employmentType,
      jobDescription: jobPostingData.jobDescription,
      salaryMin: jobPostingData.salaryMin || null,
      salaryMax: jobPostingData.salaryMax || null,
      salaryType: jobPostingData.salaryType,
      partOfTown: jobPostingData.partOfTown || '',
      workPresence: jobPostingData.workPresence,
      companyWebsite: jobPostingData.companyWebsite || '',
      linkToApply: jobPostingData.linkToApply || '',
      contactEmail: jobPostingData.contactEmail || '',
      contactPhone: jobPostingData.contactPhone || '',
      customInstructions: jobPostingData.customInstructions || '',
      authorId: userId,
    })

    return redirect(`/jobs/${newJobPosting.id}?job_created=true`)
  } catch (error) {

    return json(error)
  }
}

export const meta: MetaFunction = () => {
  return [{ title: 'Advertise A Job | Providence Job Board' }]
}

export default function NewJobsPage() {
  const errors = useActionData<typeof action>() as ZodError

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-20 flex flex-col items-center px-2">
      <JobPostingForm errors={errors} />
    </div>
  )
}
