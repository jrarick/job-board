import { ActionFunctionArgs, MetaFunction, json } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Trash } from 'lucide-react'

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
import { Button } from '~/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { cn } from '~/lib/utils'
import { deleteJobPosting, getJobPostings } from '~/models/jobPosting.server'
import { deleteUserById, getUsers } from '~/models/user.server'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const _action = formData.get('_action') as string
  const jobId = formData.get('jobId') as string
  const userId = formData.get('userId') as string

  if (_action === 'deleteUser') {
    if (typeof userId !== 'string') {
      return json(
        { errors: { userId: 'User ID is required' } },
        { status: 400 }
      )
    }

    await deleteUserById(userId)

    return json({ success: true })
  }

  if (_action === 'deleteJob') {
    if (typeof jobId !== 'string') {
      return json({ errors: { jobId: 'Job ID is required' } }, { status: 400 })
    }

    await deleteJobPosting(jobId)

    return json({ success: true })
  }
}

export async function loader() {
  let jobs = await getJobPostings()
  let users = await getUsers()

  if (!jobs) {
    jobs = []
  }

  if (!users) {
    users = []
  }

  return json({ jobs, users })
}

export const meta: MetaFunction = () => {
  return [{ title: 'Admin | Providence Job Board' }]
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  fillContainer?: boolean
}

function DataTable<TData, TValue>({
  columns,
  data,
  fillContainer = true,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div
      className={cn('rounded border border-border', {
        'max-w-fit': !fillContainer,
      })}
    >
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? 'selected' : null}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>No results.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default function Admin() {
  const { jobs, users } = useLoaderData<typeof loader>()

  interface JobPosting {
    id: string
    title: string
    company: string
    postedBy: string
    date: string
  }

  interface User {
    id: string
    email: string
    firstName: string
    lastName: string
  }

  const jobsColumns: ColumnDef<JobPosting>[] = [
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorKey: 'company',
      header: 'Company',
    },
    {
      accessorKey: 'postedBy',
      header: 'Posted By',
    },
    {
      accessorKey: 'date',
      header: 'Date',
      cell: ({ row }) => {
        const jobPosting = row.original
        return <time dateTime={jobPosting.date}>{jobPosting.date}</time>
      },
    },
    {
      accessorKey: 'delete',
      header: 'Delete',
      cell: ({ row }) => {
        const jobPosting = row.original

        return (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="border-destructive hover:bg-destructive/10 focus-visible:ring-destructive"
              >
                <Trash className="size-5 text-destructive" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl mb-2">
                  Are you sure you want to delete this job posting?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  this job posting and remove it from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Form method="post" action="/admin">
                  <input type="hidden" name="jobId" value={jobPosting.id} />
                  <AlertDialogAction
                    type="submit"
                    className="bg-background text-destructive border border-destructive hover:bg-destructive/10 transition-colors"
                    name="_action"
                    value="deleteJob"
                  >
                    Delete
                  </AlertDialogAction>
                </Form>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )
      },
    },
  ]

  const usersColumns: ColumnDef<User>[] = [
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'firstName',
      header: 'First Name',
    },
    {
      accessorKey: 'lastName',
      header: 'Last Name',
    },
    {
      accessorKey: 'delete',
      header: 'Delete',
      cell: ({ row }) => {
        const user = row.original

        return (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="border-destructive hover:bg-destructive/10 focus-visible:ring-destructive"
              >
                <Trash className="size-5 text-destructive" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl mb-2">
                  {`Are you sure you want to delete ${user.firstName} {user.lastName}'s account?`}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  this user and remove any associated records from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-4">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Form method="post" action="/admin">
                  <input type="hidden" name="userId" value={user.id} />
                  <AlertDialogAction
                    type="submit"
                    className="bg-background text-destructive border border-destructive hover:bg-destructive/10 transition-colors"
                    name="_action"
                    value="deleteUser"
                  >
                    Delete
                  </AlertDialogAction>
                </Form>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )
      },
    },
  ]

  const formattedJobsData = jobs.map((job) => ({
    id: job.id,
    title: job.jobTitle,
    company: job.companyName,
    date: new Date(job.createdAt).toLocaleDateString(),
    postedBy: job.author.firstName + ' ' + job.author.lastName,
  }))

  const formattedUsersData = users.map((user) => ({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  }))

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-display font-bold mb-6">Job Postings</h2>
          <DataTable columns={jobsColumns} data={formattedJobsData} />
        </div>
        <div>
          <h2 className="text-3xl font-display font-bold mb-6">Users</h2>
          <DataTable
            columns={usersColumns}
            data={formattedUsersData}
            fillContainer={false}
          />
        </div>
      </div>
    </div>
  )
}
