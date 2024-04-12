import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node"
import { Form, Link, json, useLoaderData } from "@remix-run/react"

import { Button, buttonVariants } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { getUserById, updateUserById } from "~/models/user.server"
import { requireUserId } from "~/session.server"

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await requireUserId(request)
  const user = await getUserById(userId)

  if (!user) {
    throw new Error("User not found")
  }

  return json({ user })
}

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request)
  const formData = await request.formData()

  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string

  const updatedUser = await updateUserById(userId, {
    firstName,
    lastName,
    email,
  })

  if (!updatedUser) {
    return json({ error: "User not found" }, { status: 404 })
  }

  return redirect("/account")
}

export default function UpdateUser() {
  const { user } = useLoaderData<typeof loader>()

  return (
    <Form
      method="post"
      action="/account/update-user"
      className="space-y-6 mt-4"
    >
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          defaultValue={user.firstName || ""}
        />
      </div>
      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          defaultValue={user.lastName || ""}
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          defaultValue={user.email || ""}
        />
      </div>
      <div className="flex flex-row space-x-6">
        <Button type="submit">Update</Button>
        <Link to="/account" className={buttonVariants({ variant: "ghost" })} unstable_viewTransition preventScrollReset>
          Cancel
        </Link>
      </div>
    </Form>
  )
}
