import {
  Pen,
  Calendar,
  Banknote,
  Briefcase,
  Building,
  Globe,
  MapPin,
} from 'lucide-react'

import ReadOnlyEditor from '../rich-text-editor/read-only-editor'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card'
import { ClientOnly } from 'remix-utils/client-only'

interface JobPostingProps {
  job: {
    id: string
    jobTitle: string
    companyName: string
    formattedSalaryString: string
    employmentType: string
    partOfTown?: string | null
    workPresence: string
    companyWebsite?: string | null
    jobDescription: string
    linkToApply?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    customInstructions?: string | null
    createdAt: string
    author: {
      firstName: string
      lastName: string
    }
  }
}

export default function JobPosting({ job }: JobPostingProps) {
  const details = [
    {
      label: 'Salary',
      icon: Banknote,
      value: job.formattedSalaryString || 'Not specified',
    },
    {
      label: 'Employment',
      icon: Briefcase,
      value: job.employmentType,
    },
    {
      label: 'Location',
      icon: MapPin,
      value: job.partOfTown || 'Not specified',
    },
    {
      label: 'Work Setting',
      icon: Building,
      value: job.workPresence,
    },
    {
      label: 'Website',
      icon: Globe,
      value: job.companyWebsite || 'Not specified',
    },
  ]

  return (
    <Card className="bg-background text-foreground rounded h-[calc(100vh_-_5rem)] overflow-hidden">
      <div className="h-full w-full overflow-y-auto scroller">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-2xl font-bold">
            {job.jobTitle + ' / ' + job.companyName}
          </CardTitle>
          <ul className="pt-4 space-y-4">
            {details.map((detail) => (
              <li key={detail.label} className="flex flex-row items-center">
                <div className="flex items-center space-x-2 text-sm leading-5 w-32">
                  <detail.icon className="h-5 w-auto flex-none" />
                  <span>{detail.label}</span>
                </div>
                {detail.label === 'Website' &&
                  detail.value !== 'Not specified' ? (
                  <a
                    href={detail.value!}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary-foreground/10 hover:underline text-left"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="inline-flex items-center rounded bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary-foreground/10">
                    {detail.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </CardHeader>
        <CardContent className="pt-6">
          <h2 className="font-display text-2xl font-semibold">Job Description</h2>
          <div className="text-longform-foreground prose prose-base prose-h1:font-display prose-h1:text-2xl prose-h1:font-semibold prose-h1:tracking-tight prose-headings:text-foreground prose-h2:tracking-widest prose-h2:uppercase prose-h2:text-lg prose-blockquote:text-muted-foreground prose-a:text-foreground prose-a:font-semibold prose-strong:text-longform-foreground">
            <ReadOnlyEditor jobDescription={job.jobDescription} jobId={job.id} />
          </div>
          <h3 className="pt-6 font-display text-2xl font-semibold">How To Apply</h3>
          {job.linkToApply ? (
            <div className="pt-4 text-longform-foreground">
              Visit{' '}
              <a
                href={job.linkToApply}
                className="text-foreground hover:underline font-semibold"
              >
                {job.linkToApply}
              </a>
            </div>
          ) : job.contactEmail ? (
            <div className="pt-4 text-longform-foreground">
              Send your resume to{' '}
              <a
                href={`mailto:${job.contactEmail}`}
                className="text-foreground hover:underline font-semibold"
              >
                {job.contactEmail}
              </a>
            </div>
          ) : job.contactPhone ? (
            <div className="pt-4 text-longform-foreground">
              Call{' '}
              <a
                href={`tel:${job.contactPhone}}`}
                className="text-foreground hover:underline font-semibold"
              >
                {job.contactPhone}
              </a>
            </div>
          ) : job.customInstructions ? (
            <div className="pt-4 text-longform-foreground">
              {job.customInstructions}
            </div>
          ) : null}
        </CardContent>
        <CardFooter className="flex-col gap-y-3 items-start pt-6 border-t border-border">
          <div className="flex space-x-2 text-muted-foreground font-bold leading-5">
            <Pen className="h-4 w-auto flex-none" />
            <span className="text-xs font-bold text-muted-foreground">
              {`Posted by ${job.author?.firstName} ${job.author?.lastName}`}
            </span>
          </div>
          <div className="flex space-x-2 text-muted-foreground font-bold leading-5">
            <Calendar className="h-4 w-auto flex-none" />
            <ClientOnly>
              {() => (
                <time
                  dateTime={job.createdAt}
                  className="text-xs font-bold text-muted-foreground"
                >
                  {`On ${new Date(job.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}`}
                </time>
              )}
            </ClientOnly>
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
