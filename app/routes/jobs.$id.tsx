import { LoaderFunctionArgs, MetaFunction, json } from '@remix-run/node'
import { useLoaderData, useNavigate } from '@remix-run/react'
import {
  Banknote,
  Briefcase,
  MapPin,
  Building,
  Globe,
  Pen,
  Calendar,
} from 'lucide-react'
import { useEffect } from 'react'

import JobPosting from '~/components/common/job-posting'
import ReadOnlyEditor from '~/components/rich-text-editor/read-only-editor'
import { buttonVariants } from '~/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '~/components/ui/drawer'
import { useToast } from '~/components/ui/use-toast'
import { useMediaQuery } from '~/lib/useMediaQuery'
import { getJobPosting } from '~/models/jobPosting.server'
import { formatSalaryString } from '~/utils'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const showJobCreatedToast = url.searchParams.get('job_created') === 'true'
  const jobQuery = await getJobPosting(params.id!)

  if (!jobQuery) {
    throw new Error('Job not found')
  }

  const job = {
    author: {
      firstName: jobQuery.author.firstName,
      lastName: jobQuery.author.lastName,
    },
    category: jobQuery.category,
    companyName: jobQuery.companyName,
    createdAt: jobQuery.createdAt,
    employmentType: jobQuery.employmentType,
    linkToApply: jobQuery.linkToApply,
    contactEmail: jobQuery.contactEmail,
    contactPhone: jobQuery.contactPhone,
    customInstructions: jobQuery.customInstructions,
    id: jobQuery.id,
    jobDescription: jobQuery.jobDescription,
    jobTitle: jobQuery.jobTitle,
    partOfTown: jobQuery.partOfTown,
    workPresence: jobQuery.workPresence,
    companyWebsite: jobQuery.companyWebsite,
    formattedSalaryString: formatSalaryString(
      jobQuery.salaryMin,
      jobQuery.salaryMax,
      jobQuery.salaryType
    ),
  }

  return json({ job, showJobCreatedToast })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title: `${data?.job.jobTitle} / ${data?.job.companyName} | Providence Job Board`,
    },
  ]
}

export default function JobPostingCard() {
  const { job, showJobCreatedToast } = useLoaderData<typeof loader>()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const navigate = useNavigate()

  const { toast } = useToast()

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

  const handleCloseDrawer = (open: boolean) => {
    if (!open) {
      navigate('/jobs', {
        preventScrollReset: true,
      })
    }
  }

  useEffect(() => {
    if (showJobCreatedToast) {
      setTimeout(() => {
        toast({
          title: 'Job posting created',
          description: `Posting for ${job.jobTitle} at ${job.companyName} has been created`,
        })
      }, 1000)
    }
  }, [showJobCreatedToast, job, toast])

  return (
    <>
      {isDesktop ? (
        <JobPosting job={job} />
      ) : (
        <Drawer open={true} onOpenChange={(open) => handleCloseDrawer(open)}>
          <DrawerContent className="max-h-dvh">
            <DrawerHeader>
              <DrawerTitle className="text-2xl text-left">
                {job.jobTitle + ' / ' + job.companyName}
              </DrawerTitle>
            </DrawerHeader>
            <div className="overflow-y-auto px-4">
              <ul className="py-4 space-y-3 border-b border-border text-foreground">
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
              <div className="text-longform-foreground prose prose-sm prose-h1:font-display prose-h1:text-2xl prose-h1:font-semibold prose-h1:tracking-tight prose-headings:text-foreground prose-h2:tracking-widest prose-h2:uppercase prose-h2:text-lg prose-blockquote:text-muted-foreground prose-a:text-foreground prose-a:font-semibold prose-strong:text-longform-foreground">
                <ReadOnlyEditor
                  jobDescription={job.jobDescription}
                  jobId={job.id}
                />
              </div>
              <h3 className="text-xl font-bold">How To Apply</h3>
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
            </div>
            <DrawerFooter>
              <div className="flex flex-row justify-between items-end border-t border-border pt-4">
                <div className="space-y-2.5">
                  <div className="flex space-x-2 text-muted-foreground font-bold leading-5">
                    <Pen className="h-4 w-auto flex-none" />
                    <span className="text-xs font-bold text-muted-foreground">
                      {`Posted by ${job.author?.firstName} ${job.author?.lastName}`}
                    </span>
                  </div>
                  <div className="flex space-x-2 text-muted-foreground font-bold leading-5">
                    <Calendar className="h-4 w-auto flex-none" />
                    <time
                      dateTime={job.createdAt}
                      className="text-xs font-bold text-muted-foreground"
                    >
                      {`On ${new Date(job.createdAt).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}`}
                    </time>
                  </div>
                </div>
                <DrawerClose
                  className={buttonVariants({
                    variant: 'outline',
                    size: 'sm',
                  })}
                >
                  Close
                </DrawerClose>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}
