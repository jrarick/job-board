import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react'

import ProvidenceIcon from '~/assets/providence-icon.svg'
import { getUser } from '~/session.server'
import '~/tailwind.css'

import { buttonVariants } from './components/ui/button'
import { Toaster } from './components/ui/toaster'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: 'https://use.typekit.net/jfz8jfw.css' },
]

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) })
}

export function Layout({ children }: { children: React.ReactNode }) {
  const footerItems = [
    { name: 'Browse Jobs', href: '/jobs' },
    { name: 'Advertise Job', href: '/advertise-job' },
    { name: 'My Account', href: '/account' },
  ]

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-serif selection:bg-primary selection:text-primary-foreground">
        <header className="py-8 px-12 border-b border-border">
          <div className="flex flex-row justify-between items-center">
            <Link
              to="/"
              className="uppercase font-display font-medium tracking-widest antialiased max-w-1/2 text-2xl sm:text-3xl"
              unstable_viewTransition
            >
              <div>Providence</div>
              <div>Job Board</div>
            </Link>
          </div>
        </header>

        {children}

        <footer
          className="bg-primary text-primary-foreground selection:bg-primary-foreground selection:text-primary"
          aria-labelledby="footer-heading"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="space-y-8">
                <Link
                  to="/"
                  aria-label="Home"
                  className="max-w-min"
                  unstable_viewTransition
                >
                  <img
                    className="h-32"
                    src={ProvidenceIcon}
                    alt="Providence Icon"
                  />
                </Link>
                <p className="text-sm leading-6 text-primary-foreground max-w-96">
                  The Providence job board exists as a networking platform for
                  job seekers to connect with employers within the Providence
                  Church community.
                </p>
              </div>
              <div className="mt-16 gap-8 md:mt-0">
                <ul className="mt-6 space-y-4">
                  {footerItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="leading-6 uppercase font-bold tracking-widest text-lg font-display text-primary-foreground hover:text-primary-foreground/60 transition-colors"
                        unstable_viewTransition
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href="https://providenceaustin.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="leading-6 uppercase font-bold tracking-widest text-lg font-display text-primary-foreground hover:text-primary-foreground/60 transition-colors"
                    >
                      Providence Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
              <p className="text-xs leading-5">
                &copy; {new Date().getFullYear()} Providence Church. All rights
                reserved.
              </p>
              <p className="text-xs leading-5 text-muted-foreground max-w-96">
                Experiencing an issue? Email{' '}
                <a
                  href="mailto:josh@longhorndesign.studio"
                  className="hover:underline"
                >
                  josh@longhorndesign.studio
                </a>{' '}
                with a description of the problem.
              </p>
            </div>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <Toaster />
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-display font-bold tracking-tight sm:text-5xl">
          {isRouteErrorResponse(error)
            ? `${error.status} - ${error.statusText}`
            : 'An unknown error occured'}
        </h1>
        <p className="mt-6 text-base leading-7 text-longform-foreground">
          {isRouteErrorResponse(error) && error.status === 404
            ? "Sorry, we couldn't find the page you're looking for."
            : isRouteErrorResponse(error)
              ? error.data
              : 'Please try again later.'}
        </p>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-x-0 md:gap-x-6 gap-y-6 md:gap-y-0">
          <Link to="/" className={buttonVariants({ variant: 'default' })}>
            Go Home
          </Link>
          <a
            href="mailto:josh@longhorndesign.studio"
            className={buttonVariants({ variant: 'secondary' })}
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return <Outlet />
}
