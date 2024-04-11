import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  const email = 'test@email.com'
  const firstName = 'John'
  const lastName = 'Smith'

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  })

  const hashedPassword = await bcrypt.hash('password', 10)

  const user = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  })

  await prisma.user.create({
    data: {
      email: 'joeblow@email.com',
      firstName: 'Joe',
      lastName: 'Blow',
      password: {
        create: {
          hash: await bcrypt.hash('password', 10),
        },
      },
    },
  })

  await prisma.user.create({
    data: {
      email: 'aliceanderson@email.com',
      firstName: 'Alice',
      lastName: 'Anderson',
      password: {
        create: {
          hash: await bcrypt.hash('password', 10),
        },
      },
    },
  })

  await prisma.user.create({
    data: {
      email: 'bobbecker@email.com',
      firstName: 'Bob',
      lastName: 'Becker',
      password: {
        create: {
          hash: await bcrypt.hash('password', 10),
        },
      },
    },
  })

  await prisma.user.create({
    data: {
      email: 'janedoe@email.com',
      firstName: 'Jane',
      lastName: 'Doe',
      password: {
        create: {
          hash: await bcrypt.hash('password', 10),
        },
      },
    },
  })

  await prisma.user.create({
    data: {
      email: 'richardreynolds@email.com',
      firstName: 'Richard',
      lastName: 'Reynolds',
      password: {
        create: {
          hash: await bcrypt.hash('password', 10),
        },
      },
    },
  })

  await prisma.jobPosting.create({
    data: {
      jobTitle: 'Pastor',
      companyName: 'Providence Church',
      category: 'Ministry',
      employmentType: 'Full-time',
      companyWebsite: 'https://providenceaustin.com',
      salaryMin: null,
      salaryMax: null,
      salaryType: 'Yearly',
      partOfTown: 'Downtown',
      workPresence: 'In person',
      jobDescription:
        '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Lead the congregation in the teaching and preaching of Gods word. This will include preparing and delivering sermons, leading Bible studies, and providing pastoral care to the congregation.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
      linkToApply: 'https://providenceaustin.com/jobs',
      contactEmail: '',
      contactPhone: '',
      customInstructions: '',
      createdAt: '2024-03-02T00:00:00Z',
      authorId: user.id,
    },
  })

  await prisma.jobPosting.create({
    data: {
      jobTitle: 'Nurse',
      companyName: "St. David's Hospital",
      category: 'Healthcare',
      employmentType: 'Contract',
      companyWebsite: 'https://stdavids.com',
      salaryMin: 25,
      salaryMax: 35,
      salaryType: 'Per Hour',
      partOfTown: 'North Austin',
      workPresence: 'In person',
      jobDescription:
        '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Provide patient care in the hospital. This will include administering medications, taking vitals, and assisting with patient hygiene.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
      linkToApply: '',
      contactEmail: '',
      contactPhone: '512-555-1234',
      customInstructions: '',
      createdAt: '2024-03-01T00:00:00Z',
      authorId: user.id,
    },
  })

  await prisma.jobPosting.create({
    data: {
      jobTitle: 'Barista',
      companyName: 'Medici Roasting',
      category: 'Restaurant',
      employmentType: 'Part-time',
      companyWebsite: 'https://mediciroasting.com',
      salaryMin: 15,
      salaryMax: 20,
      salaryType: 'Per Hour',
      partOfTown: 'Domain',
      workPresence: 'In person',
      jobDescription:
        '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Prepare and serve coffee and other beverages to customers. This will include operating the espresso machine, taking orders, and cleaning the shop.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
      linkToApply: '',
      contactEmail: 'jobs@mediciroasting.com',
      contactPhone: '',
      customInstructions: '',
      createdAt: '2024-02-28T00:00:00Z',
      authorId: user.id,
    },
  })

  await prisma.jobPosting.create({
    data: {
      jobTitle: 'Lifeguard',
      companyName: 'Barton Springs Pool',
      category: 'Recreation',
      employmentType: 'Part-time',
      companyWebsite: 'https://austintexas.gov/department/barton-springs-pool',
      salaryMin: 15,
      salaryMax: 20,
      salaryType: 'Per Hour',
      partOfTown: 'Zilker',
      workPresence: 'In person',
      jobDescription:
        '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Monitor the pool area to ensure the safety of swimmers. This will include enforcing pool rules, performing water rescues, and providing first aid.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
      linkToApply: 'https://austintexas.gov/department/barton-springs-pool',
      contactEmail: '',
      contactPhone: '',
      customInstructions: '',
      createdAt: '2024-02-27T00:00:00Z',
      authorId: user.id,
    },
  })

  console.log(`Database has been seeded. 🌱`)
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
