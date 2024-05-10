import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import {
  Link,
  Outlet,
  json,
  useLoaderData,
  useLocation,
  useSearchParams,
} from '@remix-run/react'
import clsx from 'clsx'
import { Clock, MapPin } from 'lucide-react'

import ReadOnlyEditor from '~/components/rich-text-editor/read-only-editor'
import { buttonVariants } from '~/components/ui/button'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '~/components/ui/pagination'
import RESULTS_PER_PAGE from '~/constants/RESULTS_PER_PAGE'
import { useMediaQuery } from '~/lib/useMediaQuery'
import { getJobPostings, getJobPostingsCount } from '~/models/jobPosting.server'
import { requireUserId } from '~/session.server'
import { timeSincePosted } from '~/utils'

interface JobPreviewType {
  category: string
  companyName: string
  createdAt: string
  id: string
  jobDescription: string
  jobTitle: string
  partOfTown?: string | null
}

export const meta: MetaFunction = () => [{ title: 'Providence Job Board' }]

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const page = Number(url.searchParams.get('page')) || 1

  await requireUserId(request)
  const jobsQuery = await getJobPostings(page)
  const jobPostingsCount = await getJobPostingsCount()

  if (!jobsQuery) {
    return json({ jobs: [], jobPostingsCount: 0 })
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

  return json({ jobs, jobPostingsCount })
}

const JobPreviewCard = ({
  job,
  index,
  page
}: {
  job: JobPreviewType
  index: number
  page: number
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
            to={{
              pathname: `/jobs/${job.id}`,
              search: `?page=${page}`,
            }}
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
  const { jobs, jobPostingsCount } = useLoaderData<typeof loader>()
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1

  const totalPageCount = Math.ceil(jobPostingsCount / RESULTS_PER_PAGE)
  const currentPage = page
  const maxPages = 5

  const canPageBackwards: boolean = page > 1
  const canPageForwards: boolean = page < totalPageCount

  let pageNumbers = [] as Array<number | string>

  if (totalPageCount <= maxPages) {
    pageNumbers = Array.from({ length: totalPageCount }, (_, i) => i + 1)
  } else {
    if (page <= 2) {
      pageNumbers = [1, 2, 3, 'ellipsis-end', totalPageCount]
    } else if (page === 3) {
      pageNumbers = [1, 2, 3, 4, 'ellipsis-end', totalPageCount]
    } else if (page < totalPageCount - 2) {
      pageNumbers = [1, 'ellipsis-start', page - 1, page, page + 1, 'ellipsis-end', totalPageCount]
    } else if (page === totalPageCount - 2) {
      pageNumbers = [1, 'ellipsis-start', totalPageCount - 3, totalPageCount - 2, totalPageCount - 1, totalPageCount]
    } else if (page >= totalPageCount - 1) {
      pageNumbers = [1, 'ellipsis-end', totalPageCount - 2, totalPageCount - 1, totalPageCount]
    }
  }

  return (
    <div className="flex min-h-full flex-col">
      {page <= totalPageCount && page > 0 ? (
        <div className="mx-auto flex w-full max-w-6xl items-start gap-x-8 px-4 sm:px-6 lg:px-8">
          <div className="flex-1 py-10">
            <ul className="flex flex-col space-y-8">
              {jobs && jobs.map((job, index) => (
                <JobPreviewCard key={job.id} index={index} job={job} page={page} />
              ))}
            </ul>
          </div>
          <div className="sticky top-0 bottom-0 hidden w-[36rem] shrink-0 lg:block py-10">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="mx-auto py-20 space-y-8">
          <p className="font-medium text-3xl font-display">No jobs found</p>
          <Link to="/" className={buttonVariants({ variant: 'default' })}>Go Back Home</Link>
        </div>
      )}
      <Pagination className="pb-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              to={{
                pathname: '/jobs',
                search: `?page=${page - 1}`,
              }}
              preventScrollReset={true}
              prefetch="intent"
              unstable_viewTransition
              className={canPageBackwards ? '' : 'opacity-50 pointer-events-none'}
            />
          </PaginationItem>
          {pageNumbers.map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              {typeof pageNumber === "string" && pageNumber.includes('ellipsis') ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  isActive={pageNumber === currentPage}
                  to={{
                    pathname: '/jobs',
                    search: `?page=${pageNumber}`,
                  }}
                  preventScrollReset={true}
                  prefetch="intent"
                  unstable_viewTransition
                >
                  {pageNumber}
                </PaginationLink>
              )}
            </PaginationItem>

          ))}
          <PaginationItem>
            <PaginationNext
              to={{
                pathname: '/jobs',
                search: `?page=${page + 1}`,
              }}
              preventScrollReset={true}
              prefetch="intent"
              unstable_viewTransition
              className={canPageForwards ? '' : 'opacity-50 pointer-events-none'}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
