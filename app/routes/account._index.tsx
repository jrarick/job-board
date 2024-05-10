import { LoaderFunctionArgs, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

import { buttonVariants } from '~/components/ui/button'
import { getUserById } from '~/models/user.server'
import { requireUserId } from '~/session.server'

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request)
  const user = await getUserById(userId)

  if (!user) {
    throw new Error('User not found')
  }

  return json({ user })
}

export default function AccountIndex() {
  const { user } = useLoaderData<typeof loader>()

  return (
    <>
      <dl className="space-y-8 mt-4 mb-8 text-sm">
        <div>
          <dt className="font-semibold">First Name:</dt>
          <dd className="text-longform-foreground">{user.firstName}</dd>
        </div>
        <div>
          <dt className="font-semibold">Last Name:</dt>
          <dd className="text-longform-foreground">{user.lastName}</dd>
        </div>
        <div>
          <dt className="font-semibold">Email:</dt>
          <dd className="text-longform-foreground">{user.email}</dd>
        </div>
      </dl>
      <Link
        to="/account/update-user"
        className={buttonVariants({ variant: 'outline' })}
        unstable_viewTransition
        preventScrollReset
      >
        Edit
      </Link>
    </>
  )
}
