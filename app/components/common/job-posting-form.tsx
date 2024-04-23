import { Form, Link } from '@remix-run/react'
import JOB_CATEGORIES from '~/constants/JOB_CATEGORIES'
import Editor from '../rich-text-editor/editor'
import { Button, buttonVariants } from '../ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { useState } from 'react'
import { JobPosting } from '@prisma/client'
import { ZodError } from 'zod'

export default function JobPostingForm({
  job,
  errors,
}: {
  job?: JobPosting
  errors?: ZodError
}) {
  const [howToApply, setHowToApply] = useState(
    job && job.contactEmail
      ? 'emailResume'
      : job && job.contactPhone
        ? 'callPhone'
        : job && job.customInstructions
          ? 'customInstructions'
          : 'applyOnline'
  )
  const [editorState, setEditorState] = useState<string | null>(null)
  console.log(errors)

  return (
    <Card className="max-w-4xl">
      <Form method="post">
        <CardHeader>
          <CardTitle className="text-3xl font-display font-medium">
            {job ? 'Edit Job Posting' : 'Advertise A Job'}
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
                  defaultValue={job ? job.jobTitle : undefined}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="companyName">Company Name*</Label>
                <Input
                  type="text"
                  name="companyName"
                  id="companyName"
                  required={true}
                  defaultValue={job ? job.companyName : undefined}
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
                  defaultValue={job ? job.category : undefined}
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
                  defaultValue={job ? job.employmentType : undefined}
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
                <Editor
                  setEditorState={setEditorState}
                  jobDescription={job ? job.jobDescription : undefined}
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
                      min={0}
                      placeholder="0"
                      className="pl-5 w-full"
                      defaultValue={job ? Number(job.salaryMin) : undefined}
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
                      min={0}
                      placeholder="0"
                      className="pl-5 w-full"
                      defaultValue={job ? Number(job.salaryMax) : undefined}
                    />
                  </div>
                  <Select
                    name="salaryType"
                    defaultValue={job ? job.salaryType : 'Per Hour'}
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
                    <Input
                      type="text"
                      id="partOfTown"
                      name="partOfTown"
                      defaultValue={
                        job?.partOfTown ? job.partOfTown : undefined
                      }
                    />
                  </div>
                  <Select
                    name="workPresence"
                    defaultValue={job ? job.workPresence : 'In person'}
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
                <Input
                  type="url"
                  id="companyWebsite"
                  name="companyWebsite"
                  defaultValue={
                    job?.companyWebsite ? job.companyWebsite : undefined
                  }
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
                    defaultValue={
                      job?.linkToApply ? job.linkToApply : undefined
                    }
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
                    defaultValue={
                      job?.contactEmail ? job.contactEmail : undefined
                    }
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
                    defaultValue={
                      job?.contactPhone ? job.contactPhone : undefined
                    }
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
                    defaultValue={
                      job?.customInstructions
                        ? job.customInstructions
                        : undefined
                    }
                  />
                </div>
              ) : null}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div>
            <div className="space-x-6">
              <Button type="submit">{job ? 'Save' : 'Submit'}</Button>
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
  )
}
