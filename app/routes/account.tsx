import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
  json,
} from '@remix-run/node'
import { Form, Link, Outlet, useLoaderData } from '@remix-run/react'
import { SquarePen, Trash } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog'

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

  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 border border-border rounded">
        <div className="col-span-3 px-4 lg:px-8 py-8">
          <h2 className="text-2xl xl:text-3xl font-bold font-display">
            My Job Postings
          </h2>
          {jobsByUser.length > 0 ? (
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
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-destructive/10"
                      >
                        <Trash className="size-4 text-destructive" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl mb-2">
                          Are you sure you want to delete this job posting?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete this job posting and remove it from our
                          servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="mt-4">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <Form method="post" action="/account">
                          <input type="hidden" name="jobId" value={job.id} />
                          <AlertDialogAction
                            type="submit"
                            className="bg-background text-destructive border border-destructive hover:bg-destructive/10 transition-colors"
                          >
                            Delete
                          </AlertDialogAction>
                        </Form>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <p className="text-muted-foreground text-sm font-semibold my-6">
                {"You haven't posted any jobs yet."}
              </p>
              <Link
                to="/advertise-job"
                className={buttonVariants({ variant: 'default' })}
                unstable_viewTransition
              >
                Advertise A Job
              </Link>
            </>
          )}
        </div>
        <div className="col-span-2 bg-card text-card-foreground px-4 lg:px-8 py-8 border-t lg:border-l lg:border-t-0 border-border overflow-hidden">
          <h2 className="text-2xl xl:text-3xl font-bold font-display">
            Account Details
          </h2>
          <Outlet />
        </div>
      </div>
      <Form method="post" action="/logout">
        <Button type="submit" variant="default" className="mt-8">
          Logout
        </Button>
      </Form>
    </div>
  )
}
