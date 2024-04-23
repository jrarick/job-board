import { LoaderFunctionArgs, redirect } from '@remix-run/node'
import { requireUser } from '~/session.server'

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUser(request)
  return redirect('/jobs')
}
