import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import {
  Link,
  Outlet,
  json,
  useLoaderData,
  useLocation,
} from '@remix-run/react'
import clsx from 'clsx'
import { Clock, MapPin } from 'lucide-react'

import ReadOnlyEditor from '~/components/rich-text-editor/ReadOnlyEditor'
import { useMediaQuery } from '~/lib/useMediaQuery'
import { getJobPostings } from '~/models/jobPosting.server'
import { requireUserId } from '~/session.server'
import { timeSincePosted } from '~/utils'

// import { useOptionalUser } from "~/utils"

interface JobPreviewType {
  category: string
  companyName: string
  createdAt: string
  id: string
  jobDescription: string
  jobTitle: string
  partOfTown: string | null
}

export const meta: MetaFunction = () => [{ title: 'Providence Job Board' }]

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request)
  const jobsQuery = await getJobPostings()

  if (!jobsQuery) {
    return json({ jobs: [] })
  }

  const jobs = jobsQuery.map((job) => ({
    category: job.category,
    companyName: job.companyName,
    createdAt: job.createdAt,
    id: job.id,
    jobDescription: job.jobDescription,
    jobTitle: job.jobTitle,
    partOfTown: job.partOfTown,
  }))

  return json({ jobs })
}

const JobPreviewCard = ({
  job,
  index,
}: {
  job: JobPreviewType
  index: number
}) => {
  const location = useLocation()
  const isActive = location.pathname.includes(job.id)
  const isFirstAtRoot = location.pathname === '/jobs' && index === 0
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <li
      key={job.id}
      className={clsx(
        'relative flex items-center space-x-4 py-6 px-8 rounded border border-card-border text-card-foreground hover:bg-background focus-within:ring-2 focus-within:ring-accent-foreground focus-within:ring-offset-2 transition-colors duration-200 ease-in-out',
        isActive || (isFirstAtRoot && isDesktop)
          ? 'ring-2 ring-accent-foreground ring-offset-2 bg-background'
          : 'bg-card'
      )}
    >
      <div className="min-w-0">
        <span className="inline-flex items-center rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground ring-1 ring-inset ring-primary-foreground/10">
          {job.category}
        </span>
        <h2 className="min-w-0 font-bold text-xl mt-3">
          <Link
            to={`/jobs/${job.id}`}
            className="focus-visible:outline-none focus-visible:ring-none"
            unstable_viewTransition
            preventScrollReset={true}
          >
            {job.jobTitle + ' / ' + job.companyName}
            <span className="absolute inset-0" />
          </Link>
        </h2>
        <div className="flex space-x-2 text-sm mt-3 text-muted-foreground font-bold leading-5">
          <MapPin className="h-5 w-auto flex-none" />
          <span className="truncate">{job.partOfTown || 'Not specified'}</span>
        </div>
        <div className="text-longform-foreground mt-6 h-[4.5rem] line-clamp-3 text-ellipsis">
          <ReadOnlyEditor jobDescription={job.jobDescription} jobId={job.id} />
        </div>
        <div className="flex space-x-2 mt-6 text-muted-foreground font-bold leading-5">
          <Clock className="h-4 w-auto flex-none" />
          <span className="text-xs font-bold text-muted-foreground">
            {timeSincePosted(job.createdAt)}
          </span>
        </div>
      </div>
    </li>
  )
}

export default function Index() {
  const { jobs } = useLoaderData<typeof loader>()

  // const user = useOptionalUser()

  return (
    <div className="flex min-h-full flex-col">
      <div className="mx-auto flex w-full max-w-6xl items-start gap-x-8 px-4 sm:px-6 lg:px-8">
        <div className="flex-1 py-10">
          <ul className="flex flex-col space-y-8">
            {jobs.map((job: JobPreviewType, index: number) => (
              <JobPreviewCard key={job.id} index={index} job={job} />
            ))}
          </ul>
        </div>
        <div className="sticky top-0 bottom-0 hidden w-[36rem] shrink-0 lg:block py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
