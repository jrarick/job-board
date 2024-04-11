import { ActionFunction, MetaFunction, json, redirect } from '@remix-run/node'
import { Form, Link } from '@remix-run/react'
import { useState } from 'react'

import Editor from '~/components/rich-text-editor/Editor'
import { Button, buttonVariants } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Textarea } from '~/components/ui/textarea'
import JOB_CATEGORIES from '~/constants/JOB_CATEGORIES'
import { createJobPosting } from '~/models/jobPosting.server'
import { requireUserId } from '~/session.server'

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request)

  const formData = await request.formData()
  const jobTitle = formData.get('jobTitle') as string
  const companyName = formData.get('companyName') as string
  const category = formData.get('category') as string
  const employmentType = formData.get('employmentType') as string
  const jobDescription = String(formData.get('jobDescription')) as string
  const salaryMin = Number(formData.get('salaryMin'))
  const salaryMax = Number(formData.get('salaryMax'))
  const salaryType = formData.get('salaryType') as string
  const partOfTown = formData.get('partOfTown') as string
  const workPresence = formData.get('workPresence') as string
  const companyWebsite = formData.get('companyWebsite') as string
  const linkToApply = formData.get('linkToApply') as string
  const contactEmail = formData.get('contactEmail') as string
  const contactPhone = formData.get('contactPhone') as string
  const customInstructions = formData.get('customInstructions') as string

  if (
    !jobTitle ||
    !category ||
    !employmentType ||
    !jobDescription ||
    !companyName
  ) {
    return json(
      {
        errors: {
          body: null,
          title:
            'An error occurred. Make sure all required fields are entered.',
        },
      },
      { status: 400 }
    )
  }

  const jobPosting = await createJobPosting({
    jobTitle: jobTitle as string,
    companyName: companyName as string,
    category: category as string,
    employmentType: employmentType as string,
    jobDescription: jobDescription as string,
    salaryMin: Number(salaryMin),
    salaryMax: Number(salaryMax),
    salaryType: salaryType as string,
    partOfTown: partOfTown as string,
    workPresence: workPresence as string,
    companyWebsite: companyWebsite as string,
    linkToApply: linkToApply as string,
    contactEmail: contactEmail as string,
    contactPhone: contactPhone as string,
    customInstructions: customInstructions as string,
    authorId: userId,
  })

  return redirect(`/jobs/${jobPosting.id}?job_created=true`)
}

export const meta: MetaFunction = () => {
  return [{ title: 'Advertise A Job | Providence Job Board' }]
}

export default function NewJobsPage() {
  const [howToApply, setHowToApply] = useState('applyOnline')
  const [editorState, setEditorState] = useState<string | null>(null)

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-20 flex flex-col items-center">
      <Card className="max-w-4xl">
        <Form method="post">
          <CardHeader>
            <CardTitle className="text-3xl font-display font-medium">
              Advertise A Job
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
                    required={true}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="companyName">Company Name*</Label>
                  <Input
                    type="text"
                    name="companyName"
                    id="companyName"
                    required={true}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Category*
                  </div>
                  <Select name="category" required={true} aria-label="category">
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
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Part-time">Part-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                        <SelectItem value="Volunteer">Volunteer</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid w-full gap-1.5 max-w-sm">
                  <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Job Description*
                  </div>
                  <Editor setEditorState={setEditorState} />
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
                      />
                    </div>
                    <Select
                      name="salaryType"
                      defaultValue="Per Hour"
                      aria-label="Salary Type"
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Salary Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Per Hour">Per Hour</SelectItem>
                          <SelectItem value="Yearly">Yearly</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="partOfTown">Part of Town</Label>
                  <div className="flex flex-row space-x-2 sm:space-x-4">
                    <div className="flex-grow">
                      <Input type="text" id="partOfTown" name="partOfTown" />
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
                          <SelectItem value="In person">In person</SelectItem>
                          <SelectItem value="Remote">Remote</SelectItem>
                          <SelectItem value="Hybrid">Hybrid</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="companyWebsite">Company Website</Label>
                  <Input type="url" id="companyWebsite" name="companyWebsite" />
                </div>
                <RadioGroup
                  defaultValue="applyOnline"
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
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div>
              <div className="space-x-6">
                <Button type="submit">Submit</Button>
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
      </Card>
    </div>
  )
}
