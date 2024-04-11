import { useMatches } from '@remix-run/react'
import { useMemo } from 'react'

import type { User } from '~/models/user.server'

const DEFAULT_REDIRECT = '/'

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT
) {
  if (!to || typeof to !== 'string') {
    return defaultRedirect
  }

  if (!to.startsWith('/') || to.startsWith('//')) {
    return defaultRedirect
  }

  return to
}

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(
  id: string
): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches()
  const route = useMemo(
    () => matchingRoutes.find((route) => route.id === id),
    [matchingRoutes, id]
  )
  return route?.data as Record<string, unknown>
}

function isUser(user: unknown): user is User {
  return (
    user != null &&
    typeof user === 'object' &&
    'email' in user &&
    typeof user.email === 'string'
  )
}

export function useOptionalUser(): User | undefined {
  const data = useMatchesData('root')
  if (!data || !isUser(data.user)) {
    return undefined
  }
  return data.user
}

export function useUser(): User {
  const maybeUser = useOptionalUser()
  if (!maybeUser) {
    throw new Error(
      'No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead.'
    )
  }
  return maybeUser
}

export function validateEmail(email: unknown): email is string {
  return typeof email === 'string' && /^\S+@\S+\.\S+$/.test(email)
}

export function timeSincePosted(date: string) {
  const now = new Date()
  const then = new Date(date)
  then.setHours(0, 0, 0, 0)
  const diff = now.getTime() - then.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const isLeapYear = (now: Date) => {
    const year = now.getFullYear()
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }
  const averageDaysInMonth = isLeapYear(now) ? 30.5 : 30.417
  if (days > 90) {
    return `${Math.round(days / 30.44)} months ago`
  } else if (days === 0) {
    return 'Today'
  } else if (days === 1) {
    return 'Yesterday'
  } else if (days === 7) {
    return '1 week ago'
  } else if (
    (Math.floor(days % averageDaysInMonth) < 3 ||
      Math.floor(days % averageDaysInMonth) > 28) &&
    days < 34 &&
    days > 28
  ) {
    return '1 month ago'
  } else if (
    days > 56 &&
    (Math.floor(days % averageDaysInMonth) < 3 ||
      Math.floor(days % averageDaysInMonth) > 28)
  ) {
    return `${Math.round(days / 30.44)} months ago`
  } else if (days % 7 === 0 && days <= 90) {
    return `${days / 7} weeks ago`
  } else if (days > 33) {
    return `${Math.round(days / 7)} weeks ago`
  } else {
    return `${days} days ago`
  }
}

export function formatMoney(amount: number) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })
}

export function formatSalaryString(
  salaryMin: number | null,
  salaryMax: number | null,
  salaryType: string | null
) {
  if (!salaryMin && !salaryMax) {
    return 'Not specified'
  }
  if (salaryMin && !salaryMax) {
    return `${formatMoney(salaryMin)} ${salaryType}`
  }
  if (!salaryMin && salaryMax) {
    return `${formatMoney(salaryMax)} ${salaryType}`
  }
  if (salaryMin && salaryMax && salaryMin === salaryMax) {
    return `${formatMoney(salaryMin)} ${salaryType}`
  }
  return `${formatMoney(salaryMin!)} - ${formatMoney(salaryMax!)} ${salaryType}`
}

export function getHtmlFromLexicalJSON(json: string): string {
  const parsed = JSON.parse(json)
  const root = parsed.root
  return getHtmlFromLexicalNode(root)
}

export function getHtmlFromLexicalNode(node: {
  type: string
  children?: { type: string; text?: string; tag?: string }[]
}): string {
  let result = ''
  const { children } = node
  if (children !== undefined) {
    if (children.length === 0) {
      return result
    }
    children.forEach((child) => {
      const { type } = child
      if (type === 'paragraph') {
        result += `<p>${getHtmlFromLexicalNode(child)}</p>`
      } else if (type === 'heading') {
        const tag = child.tag ?? 'h1'
        result += `<${tag}>${getHtmlFromLexicalNode(child)}</${tag}>`
      } else if (type === 'bullet') {
        result += `<ul>${getHtmlFromLexicalNode(child)}</ul>`
      } else if (type === 'listitem') {
        result += `<li>${getHtmlFromLexicalNode(child)}</li>`
      } else if (type === 'text') {
        result += `<span>${child.text}</span>`
      } else {
        result += '<span style="font-weight: bold">Unknown Node</span>'
      }
    })
  }
  return result
}
