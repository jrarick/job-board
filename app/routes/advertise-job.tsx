import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction, json, redirect } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import JobPostingForm from '~/components/common/job-posting-form'
import { validateJobPostingInput } from '~/lib/validateJobPostingInput'
import { createJobPosting } from '~/models/jobPosting.server'
// import { jobPostingSchema } from '~/schemas/jobPostingSchema'
import { requireUserId } from '~/session.server'

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserId(request)
  return json({})
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const userId = await requireUserId(request)

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

  const newJobPosting = await createJobPosting({
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
    authorId: userId,
  })

  return redirect(`/jobs/${newJobPosting.id}?job_created=true`)
}

export const meta: MetaFunction = () => {
  return [{ title: 'Advertise A Job | Providence Job Board' }]
}

export default function NewJobsPage() {
  const actionData = useActionData<typeof action>()

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-20 flex flex-col items-center px-2">
      <JobPostingForm errors={actionData?.errors} />
    </div>
  )
}
