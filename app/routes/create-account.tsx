import { Form } from '@remix-run/react'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function CreateAccountPage() {
  return (
    <div className="container py-20 flex flex-col items-center">
      <Card>
        <Form method="post">
          <CardHeader>
            <CardTitle className="font-medium">Create An Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid w-full max-w-lg items-center gap-1.5">
              <div className="flex flex-row space-x-4">
                <div className="flex-grow">
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input type="text" name="firstName" />
                </div>
                <div className="flex-grow">
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input type="text" name="lastName" />
                </div>
              </div>
            </div>
            <div className="grid w-full max-w-lg items-center gap-1.5">
              <Label htmlFor="email">Email*</Label>
              <Input type="email" id="email" required={true} />
            </div>
            <div className="grid w-full max-w-lg items-center gap-1.5">
              <Label htmlFor="password">Password*</Label>
              <Input type="password" id="password" required={true} />
            </div>
          </CardContent>
          <CardFooter>
            <div>
              <div className="flex justify-end">
                <Button type="submit">Create Account</Button>
              </div>
              <p className="italic text-xs text-muted-foreground mt-6">
                *Denotes required field
              </p>
            </div>
          </CardFooter>
        </Form>
      </Card>
    </div>
  )
}
