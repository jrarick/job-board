import { Form, Link } from '@remix-run/react'
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
import JOB_CATEGORIES from '~/constants/JOB_CATEGORIES'
import WORK_PRESENCE from '~/constants/WORK_PRESENCE'
import EMPLOYMENT_TYPE from '~/constants/EMPLOYMENT_TYPE'
import SALARY_TYPE from '~/constants/SALARY_TYPE'
import { cn } from '~/lib/utils'
import { JobPostingFormErrors } from '~/lib/validateJobPostingInput'
import { SerializeFrom } from '@remix-run/node'

export default function JobPostingForm({
  job,
  errors,
}: {
  job?: SerializeFrom<JobPosting>
  errors?: JobPostingFormErrors
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

  return (
    <Card className="max-w-4xl">
      <Form method="post">
        <CardHeader>
          <CardTitle className="text-3xl font-display font-medium">
            {job ? 'Edit Job Posting' : 'Advertise A Job'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 lg:gap-x-20 space-y-4 lg:space-y-0">
            <div className="flex flex-col space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="jobTitle">Job Title*</Label>
                <Input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  defaultValue={job ? job.jobTitle : undefined}
                  className={
                    errors?.jobTitle
                      ? 'outline-none ring-2 ring-destructive ring-offset-2'
                      : ''
                  }
                />
                {errors?.jobTitle ? (
                  <p className="h-4 text-destructive text-xs">
                    {errors.jobTitle}
                  </p>
                ) : (
                  <span className="h-4" aria-hidden={true} />
                )}
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="companyName">Company Name*</Label>
                <Input
                  type="text"
                  name="companyName"
                  id="companyName"
                  defaultValue={job ? job.companyName : undefined}
                  className={
                    errors?.companyName
                      ? 'outline-none ring-2 ring-destructive ring-offset-2'
                      : ''
                  }
                />
                {errors?.companyName ? (
                  <p className="h-4 text-destructive text-xs">
                    {errors.companyName}
                  </p>
                ) : (
                  <span className="h-4" aria-hidden={true} />
                )}
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Category*
                </div>
                <Select
                  name="category"
                  aria-label="category"
                  defaultValue={job ? job.category : undefined}
                >
                  <SelectTrigger
                    className={cn('w-full', {
                      'outline-none ring-2 ring-destructive ring-offset-2':
                        errors?.category,
                    })}
                  >
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
                {errors?.category ? (
                  <p className="h-4 text-destructive text-xs">
                    {errors.category}
                  </p>
                ) : (
                  <span className="h-4" aria-hidden={true} />
                )}
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Employment Type*
                </div>
                <Select
                  name="employmentType"
                  aria-label="Employment Type"
                  defaultValue={job ? job.employmentType : undefined}
                >
                  <SelectTrigger
                    className={cn('w-full', {
                      'outline-none ring-2 ring-destructive ring-offset-2':
                        errors?.employmentType,
                    })}
                  >
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
                {errors?.employmentType ? (
                  <p className="h-4 text-destructive text-xs">
                    {errors.employmentType}
                  </p>
                ) : (
                  <span className="h-4" aria-hidden={true} />
                )}
              </div>
              <div className="grid w-full gap-1.5 max-w-sm">
                <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Job Description*
                </div>
                <Editor
                  setEditorState={setEditorState}
                  jobDescription={job ? job.jobDescription : undefined}
                  className={
                    errors?.jobDescription
                      ? 'outline-none ring-2 ring-destructive ring-offset-2'
                      : ''
                  }
                />
                {errors?.jobDescription ? (
                  <p className="h-4 text-destructive text-xs">
                    {errors.jobDescription}
                  </p>
                ) : (
                  <span className="h-4" aria-hidden={true} />
                )}
                <input
                  defaultValue={editorState || ''}
                  hidden={true}
                  name="jobDescription"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
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
                      className={cn('pl-5 w-full', {
                        'outline-none ring-2 ring-destructive ring-offset-2':
                          errors?.salaryMin,
                      })}
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
                      className={cn('pl-5 w-full', {
                        'outline-none ring-2 ring-destructive ring-offset-2':
                          errors?.salaryMax,
                      })}
                      defaultValue={job ? Number(job.salaryMax) : undefined}
                    />
                  </div>
                  <Select
                    name="salaryType"
                    defaultValue={job ? job.salaryType : 'Per Hour'}
                    aria-label="Salary Type"
                  >
                    <SelectTrigger
                      className={cn('w-40', {
                        'outline-none ring-2 ring-destructive ring-offset-2':
                          errors?.salaryType,
                      })}
                    >
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
                {errors?.salaryMin ? (
                  <p className="h-4 text-destructive text-xs">
                    {errors.salaryMin}
                  </p>
                ) : errors?.salaryMax ? (
                  <p className="h-4 text-destructive text-xs">
                    {errors.salaryMax}
                  </p>
                ) : errors?.salaryType ? (
                  <p className="h-4 text-destructive text-xs">
                    {errors.salaryType}
                  </p>
                ) : (
                  <span className="h-4" aria-hidden={true} />
                )}
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
                    <SelectTrigger
                      className={cn('w-40', {
                        'outline-none ring-2 ring-destructive ring-offset-2':
                          errors?.workPresence,
                      })}
                    >
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
                {errors?.workPresence ? (
                  <p className="h-4 text-destructive text-xs">
                    {errors.workPresence}
                  </p>
                ) : (
                  <span className="h-4" aria-hidden={true} />
                )}
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="companyWebsite">Company Website</Label>
                <Input
                  type="url"
                  id="companyWebsite"
                  name="companyWebsite"
                  className={
                    errors?.companyWebsite
                      ? 'outline-none ring-2 ring-destructive ring-offset-2'
                      : ''
                  }
                  defaultValue={
                    job?.companyWebsite ? job.companyWebsite : undefined
                  }
                />
                {errors?.companyWebsite ? (
                  <p className="h-4 text-destructive text-xs">
                    {errors.companyWebsite}
                  </p>
                ) : (
                  <span className="h-4" aria-hidden={true} />
                )}
              </div>
              <RadioGroup
                defaultValue={howToApply}
                onValueChange={(value) => setHowToApply(value)}
                aria-label="How to Apply"
                className="pb-4"
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
              <input type="hidden" name="howToApply" value={howToApply} />
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor={
                    howToApply === 'applyOnline'
                      ? 'linkToApply'
                      : howToApply === 'emailResume'
                        ? 'contactEmail'
                        : howToApply === 'callPhone'
                          ? 'contactPhone'
                          : howToApply === 'customInstructions'
                            ? 'customInstructions'
                            : ''
                  }
                >
                  {howToApply === 'applyOnline'
                    ? 'Link To Apply*'
                    : howToApply === 'emailResume'
                      ? 'Contact Email*'
                      : howToApply === 'callPhone'
                        ? 'Contact Phone*'
                        : howToApply === 'customInstructions'
                          ? 'Custom Application Instructions*'
                          : ''}
                </Label>
                <Input
                  type={howToApply === 'applyOnline' ? 'url' : 'hidden'}
                  id="linkToApply"
                  name="linkToApply"
                  defaultValue={job?.linkToApply ? job.linkToApply : undefined}
                  className={
                    errors?.linkToApply
                      ? 'outline-none ring-2 ring-destructive ring-offset-2'
                      : ''
                  }
                />
                <Input
                  type={howToApply === 'emailResume' ? 'email' : 'hidden'}
                  id="contactEmail"
                  name="contactEmail"
                  hidden={howToApply !== 'emailResume'}
                  defaultValue={
                    job?.contactEmail ? job.contactEmail : undefined
                  }
                  className={
                    errors?.contactEmail
                      ? 'outline-none ring-2 ring-destructive ring-offset-2'
                      : ''
                  }
                />
                <Input
                  type={howToApply === 'callPhone' ? 'tel' : 'hidden'}
                  id="contactPhone"
                  name="contactPhone"
                  hidden={howToApply !== 'callPhone'}
                  defaultValue={
                    job?.contactPhone ? job.contactPhone : undefined
                  }
                  className={
                    errors?.contactPhone
                      ? 'outline-none ring-2 ring-destructive ring-offset-2'
                      : ''
                  }
                />
                <Textarea
                  id="customInstructions"
                  name="customInstructions"
                  hidden={howToApply !== 'customInstructions'}
                  className={cn('min-h-32', {
                    hidden: howToApply !== 'customInstructions',
                    'outline-none ring-2 ring-destructive ring-offset-2':
                      errors?.customInstructions,
                  })}
                  defaultValue={
                    job?.customInstructions ? job.customInstructions : undefined
                  }
                />
                {(errors?.linkToApply && howToApply === 'applyOnline') ||
                (errors?.contactEmail && howToApply === 'emailResume') ||
                (errors?.contactPhone && howToApply === 'callPhone') ||
                (errors?.customInstructions &&
                  howToApply === 'customInstructions') ? (
                  <p className="h-4 text-destructive text-xs">
                    {errors?.linkToApply ||
                      errors?.contactEmail ||
                      errors?.contactPhone ||
                      errors?.customInstructions}
                  </p>
                ) : (
                  <span className="h-4" aria-hidden={true} />
                )}
              </div>
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
