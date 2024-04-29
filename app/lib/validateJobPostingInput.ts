import EMPLOYMENT_TYPE from '~/constants/EMPLOYMENT_TYPE'
import JOB_CATEGORIES from '~/constants/JOB_CATEGORIES'
import SALARY_TYPE from '~/constants/SALARY_TYPE'
import WORK_PRESENCE from '~/constants/WORK_PRESENCE'

export interface JobPostingFormErrors {
  jobTitle?: string
  companyName?: string
  category?: string
  employmentType?: string
  jobDescription?: string
  salaryMin?: string
  salaryMax?: string
  salaryType?: string
  workPresence?: string
  companyWebsite?: string
  linkToApply?: string
  contactEmail?: string
  contactPhone?: string
  customInstructions?: string
}

function isValidUrl(url: string) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function validateJobPostingInput(
  jobTitle: string,
  companyName: string,
  category: string,
  employmentType: string,
  jobDescription: string,
  salaryMin: number | null,
  salaryMax: number | null,
  salaryType: string,
  workPresence: string,
  companyWebsite: string,
  howToApply: string,
  linkToApply: string,
  contactEmail: string,
  contactPhone: string,
  customInstructions: string
) {
  const validateJobTitle = (jobTitle: string) => {
    if (!jobTitle) {
      return 'Job Title is required'
    }
  }

  const validateCompanyName = (companyName: string) => {
    if (!companyName) {
      return 'Company Name is required'
    }
  }

  const validateCategory = (category: string) => {
    if (!category) {
      return 'Category is required'
    } else if (!JOB_CATEGORIES.includes(category)) {
      return 'Invalid category. Please select from the list.'
    }
  }

  const validateEmploymentType = (employmentType: string) => {
    if (!employmentType) {
      return 'Employment Type is required'
    } else if (!EMPLOYMENT_TYPE.includes(employmentType)) {
      return 'Invalid employment type. Please select from the list.'
    }
  }

  const validateJobDescription = (jobDescription: string) => {
    if (!jobDescription) {
      return 'Job Description is required'
    }
  }

  const validateSalaryMin = (salaryMin: number | null) => {
    if (typeof salaryMin === 'number' && salaryMin <= 0) {
      return 'Salary Min must be greater than 0'
    }
  }

  const validateSalaryMax = (
    salaryMin: number | null,
    salaryMax: number | null
  ) => {
    if (typeof salaryMax === 'number' && salaryMax <= 0) {
      return 'Salary Max must be greater than 0'
    } else if (
      typeof salaryMin === 'number' &&
      typeof salaryMax === 'number' &&
      salaryMin > salaryMax
    ) {
      return `Salary Max must be greater than Salary Min`
    }
  }

  const validateSalaryType = (salaryType: string) => {
    if (!salaryType) {
      return 'Salary Type is required'
    } else if (!SALARY_TYPE.includes(salaryType)) {
      return 'Invalid salary type. Please select from the list.'
    }
  }

  const validateWorkPresence = (workPresence: string) => {
    if (!workPresence) {
      return 'Work Presence is required'
    } else if (!WORK_PRESENCE.includes(workPresence)) {
      return 'Invalid work presence. Please select from the list.'
    }
  }

  const validateCompanyWebsite = (companyWebsite: string) => {
    if (companyWebsite && !isValidUrl(companyWebsite)) {
      return 'Company Website must be a valid URL including the protocol (e.g. https://)'
    }
  }

  const validateLinkToApply = (howToApply: string, linkToApply: string) => {
    if (howToApply === 'applyOnline' && !isValidUrl(linkToApply)) {
      return 'Link to Apply must be a valid URL including the protocol (e.g. https://)'
    }
  }

  const validateContactEmail = (howToApply: string, contactEmail: string) => {
    if (howToApply === 'emailResume' && !contactEmail.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      return 'Invalid email address'
    }
  }

  const validatePhone = (howToApply: string, contactPhone: string) => {
    if (
      howToApply === 'callPhone' &&
      !contactPhone.match(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
    ) {
      return 'Invalid phone number' 
    }
  }

  const validateCustomInstructions = (howToApply: string, customInstructions: string) => {
    if (howToApply === 'customInstructions' && !customInstructions) {
      return 'Custom instructions are required if this option is selected'
    }
  }

  return {
    jobTitle: validateJobTitle(jobTitle),
    companyName: validateCompanyName(companyName),
    category: validateCategory(category),
    employmentType: validateEmploymentType(employmentType),
    jobDescription: validateJobDescription(jobDescription),
    salaryMin: validateSalaryMin(salaryMin),
    salaryMax: validateSalaryMax(salaryMin, salaryMax),
    salaryType: validateSalaryType(salaryType),
    workPresence: validateWorkPresence(workPresence),
    companyWebsite: validateCompanyWebsite(companyWebsite),
    linkToApply: validateLinkToApply(howToApply, linkToApply),
    contactEmail: validateContactEmail(howToApply, contactEmail),
    contactPhone: validatePhone(howToApply, contactPhone),
    customInstructions: validateCustomInstructions(howToApply, customInstructions),
  }
}
