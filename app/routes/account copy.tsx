import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
  json,
} from '@remix-run/node'
import { Link, Outlet, useFetcher, useLoaderData } from '@remix-run/react'
import { SquarePen, Trash } from 'lucide-react'

import { Button, buttonVariants } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import {
  deleteJobPosting,
  getJobPostingsByAuthorId,
} from '~/models/jobPosting.server'
import { requireUserId } from '~/session.server'

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request)
  const jobsByUser = await getJobPostingsByAuthorId(userId)

  if (!jobsByUser) {
    throw new Error('Jobs not found')
  }

  return json({ jobsByUser })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const jobId = formData.get('jobId') as string

  if (!jobId) {
    return json({ error: 'Job ID is required' }, { status: 404 })
  }

  await deleteJobPosting(jobId)

  return json({ success: true })
}

export const meta: MetaFunction = () => {
  return [{ title: 'Account | Providence Job Board' }]
}

export default function Account() {
  const { jobsByUser } = useLoaderData<typeof loader>()
  const fetcher = useFetcher()

  return (
    <div className="mx-auto max-w-6xl sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 border border-border rounded">
        <div className="col-span-3 px-4 lg:px-8 py-8">
          <h2 className="text-2xl xl:text-3xl font-bold font-display">
            My Job Postings
          </h2>
          <ul className="divide-y divide-border mt-4">
            {jobsByUser.map((job) => (
              <li
                key={job.id}
                className="flex flex-row items-center space-x-2 p-2"
              >
                <div className="flex-grow">
                  <Link
                    to={`/jobs/${job.id}`}
                    className={cn(
                      'font-sans normal-case font-medium text-sm justify-start hover:underline'
                    )}
                  >
                    {job.jobTitle} / {job.companyName}
                  </Link>
                  <p className="text-muted-foreground text-xs font-semibold pt-1">
                    Posted on{' '}
                    <time dateTime={job.createdAt}>
                      {new Date(job.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </p>
                </div>
                <Link
                  to={`/edit/${job.id}`}
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'icon',
                  })}
                  aria-label={`Edit ${job.jobTitle} job posting`}
                >
                  <SquarePen className="size-4" />
                </Link>
                <fetcher.Form method="post" action="/account">
                  <input type="hidden" name="jobId" value={job.id} />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-destructive/10"
                    type="submit"
                    aria-label={`Delete ${job.jobTitle} job posting`}
                  >
                    <Trash className="size-4 text-destructive" />
                  </Button>
                </fetcher.Form>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 bg-card text-card-foreground px-4 lg:px-8 py-8 border-t lg:border-l lg:border-t-0 border-border overflow-hidden">
          <h2 className="text-2xl xl:text-3xl font-bold font-display">
            Account Details
          </h2>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
