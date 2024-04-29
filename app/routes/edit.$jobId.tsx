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
      {/* <Card className="max-w-4xl">
        <Form method="post">
          <CardHeader>
            <CardTitle className="text-3xl font-display font-medium">
              Update Job Posting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 lg:gap-x-20 space-y-8 lg:space-y-0">
              <div className="flex flex-col space-y-8">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="jobTitle">Job Title*</Label>
                  <Input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    defaultValue={job.jobTitle}
                    required={true}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="companyName">Company Name*</Label>
                  <Input
                    type="text"
                    name="companyName"
                    id="companyName"
                    defaultValue={job.companyName}
                    required={true}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Category*
                  </div>
                  <Select
                    name="category"
                    required={true}
                    aria-label="category"
                    defaultValue={job.category}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {JOB_CATEGORIES.map((category) => (
                          <SelectItem value={category} key={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Employment Type*
                  </div>
                  <Select
                    name="employmentType"
                    required={true}
                    aria-label="Employment Type"
                    defaultValue={job.employmentType}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {EMPLOYMENT_TYPE.map((type) => (
                          <SelectItem value={type} key={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid w-full gap-1.5 max-w-sm">
                  <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Job Description*
                  </div>
                  <Editor
                    setEditorState={setEditorState}
                    jobDescription={job.jobDescription}
                  />
                  <input
                    defaultValue={editorState || ''}
                    hidden={true}
                    name="jobDescription"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="salaryMin">Salary</Label>
                  <div className="flex flex-row items-center space-x-2 sm:space-x-4">
                    <div className="relative flex-grow">
                      <span
                        className="text-slate-500 absolute left-2 top-2.5 text-sm"
                        aria-hidden="true"
                      >
                        $
                      </span>
                      <Input
                        type="number"
                        id="salaryMin"
                        name="salaryMin"
                        placeholder="0"
                        className="pl-5 w-full"
                        defaultValue={Number(job.salaryMin)}
                      />
                    </div>
                    <span>to</span>
                    <div className="relative flex-grow">
                      <span
                        className="text-slate-500 absolute left-2 top-2.5 text-sm"
                        aria-hidden="true"
                      >
                        $
                      </span>
                      <Input
                        aria-label="Max Salary"
                        type="number"
                        id="salaryMax"
                        name="salaryMax"
                        placeholder="0"
                        className="pl-5 w-full"
                        defaultValue={Number(job.salaryMax)}
                      />
                    </div>
                    <Select
                      name="salaryType"
                      defaultValue={job.salaryType}
                      aria-label="Salary Type"
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Salary Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {SALARY_TYPE.map((type) => (
                            <SelectItem value={type} key={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="partOfTown">Part of Town</Label>
                  <div className="flex flex-row space-x-2 sm:space-x-4">
                    <div className="flex-grow">
                      <Input
                        type="text"
                        id="partOfTown"
                        name="partOfTown"
                        defaultValue={job.partOfTown || ''}
                      />
                    </div>
                    <Select
                      name="workPresence"
                      defaultValue="In person"
                      aria-label="Work Presence"
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {WORK_PRESENCE.map((presence) => (
                            <SelectItem value={presence} key={presence}>
                              {presence}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="companyWebsite">Company Website</Label>
                  <Input
                    type="url"
                    id="companyWebsite"
                    name="companyWebsite"
                    defaultValue={job.companyWebsite || ''}
                  />
                </div>
                <RadioGroup
                  defaultValue={howToApply}
                  onValueChange={(value) => setHowToApply(value)}
                  aria-label="How to Apply"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="applyOnline" id="r1" />
                    <Label htmlFor="r1">Apply Online</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="emailResume" id="r2" />
                    <Label htmlFor="r2">Email Resume</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="callPhone" id="r3" />
                    <Label htmlFor="r3">Call Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="customInstructions" id="r4" />
                    <Label htmlFor="r4">Custom Application Instructions</Label>
                  </div>
                </RadioGroup>
                {howToApply === 'applyOnline' ? (
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="linkToApply">Link To Apply*</Label>
                    <Input
                      type="url"
                      id="linkToApply"
                      name="linkToApply"
                      required={true}
                      defaultValue={job.linkToApply || ''}
                    />
                  </div>
                ) : howToApply === 'emailResume' ? (
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="contactEmail">Contact Email*</Label>
                    <Input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      required={true}
                      defaultValue={job.contactEmail || ''}
                    />
                  </div>
                ) : howToApply === 'callPhone' ? (
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="contactPhone">Contact Phone*</Label>
                    <Input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      required={true}
                      defaultValue={job.contactPhone || ''}
                    />
                  </div>
                ) : howToApply === 'customInstructions' ? (
                  <div className="grid w-full gap-1.5 max-w-sm">
                    <Label htmlFor="customInstructions">
                      Custom Application Instructions*
                    </Label>
                    <Textarea
                      id="customInstructions"
                      name="customInstructions"
                      required={true}
                      className="min-h-32"
                      defaultValue={job.customInstructions || ''}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div>
              <div className="space-x-6">
                <Button type="submit">Save</Button>
                <Link
                  className={buttonVariants({
                    variant: 'ghost',
                  })}
                  to="/"
                >
                  Cancel
                </Link>
              </div>
              <p className="italic text-xs text-muted-foreground mt-6">
                *Denotes required field
              </p>
            </div>
          </CardFooter>
        </Form>
      </Card> */}
    </div>
  )
}
