import { StaticImageData } from 'next/image'
import workplace from '@/public/images/work_place.jpg'

export type Project = {
  id: number
  slug: string
  imageSource: StaticImageData
  projectName: string
  href: string
  sourceLink: string
  techStack: string[]
  content: string // short card description
  overview: string
  role: string
  duration: string
  team: string
  category: string
  features: string[]
  responsibilities: string[]
  challenges?: string
  outcome: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'marketing-cms-content-hub',
    imageSource: workplace,
    projectName: 'Marketing CMS — Content Hub',
    href: 'https://www.kbzbank.com',
    sourceLink: 'https://github.com/WinZawOoDev',
    content:
      'Marketing Content Management System at KBZ Bank — centralized content authoring and publishing for marketing campaigns, built and deployed with Strapi + Next.js on AWS.',
    techStack: ['Strapi', 'Next.js', 'AWS', 'TypeScript'],
    overview:
      'The Content Hub is the central authoring platform for KBZ Bank’s marketing team. It replaces fragmented spreadsheets and email approvals with a structured CMS that supports rich media, campaign scheduling, role-based approvals and one-click publishing to the bank’s public site and app surfaces. The system is built as a headless Strapi backend with Next.js SSR front-ends and deployed on AWS with auto-scaling, CloudFront and S3 assets.',
    role: 'Full-Stack Developer',
    duration: '2023 — Present',
    team: 'KBZ Bank Marketing Tech (4 devs, 1 designer, PM)',
    category: 'Banking CMS',
    features: [
      'Headless Strapi content types for articles, banners, promotions and FAQs with draft/preview/publish lifecycle',
      'Next.js SSR + ISR front-end with preview mode for marketers before publish',
      'Role-based workflow: Author → Reviewer → Approver with notifications and audit trail',
      'Scheduled publishing/unpublishing and campaign expiry automation',
      'AWS deployment: ECS/Fargate, RDS, S3 + CloudFront, CloudWatch alarms',
    ],
    responsibilities: [
      'Designed Strapi content models, relations and permissions',
      'Built Next.js rendering layer with ISR and preview API',
      'Implemented scheduling cron and approval state machine',
      'Set up AWS infra and CI/CD pipelines',
    ],
    challenges:
      'Balancing marketer autonomy with compliance — strict approval gates and audit logs were required without hurting velocity.',
    outcome:
      'Reduced campaign go-live time from 2–3 days to under 4 hours and enabled non-technical marketers to publish independently.',
  },
  {
    id: 2,
    slug: 'marketing-cms-campaign-manager',
    imageSource: workplace,
    projectName: 'Marketing CMS — Campaign Manager',
    href: 'https://www.kbzbank.com',
    sourceLink: 'https://github.com/WinZawOoDev',
    content:
      'Marketing CMS for campaign lifecycle — content scheduling, approval workflows and multi-channel distribution, deployed on AWS.',
    techStack: ['Strapi', 'Next.js', 'AWS', 'PostgreSQL'],
    overview:
      'Campaign Manager extends the Content Hub to orchestrate end-to-end campaign lifecycle. Marketers can create campaigns that bundle multiple contents, define audience segments, schedule across channels (web, app, SMS push metadata) and track approval status. All data is normalized in PostgreSQL and exposed via Strapi REST/GraphQL for consumption by downstream services.',
    role: 'Full-Stack Developer',
    duration: '2023 — Present',
    team: 'KBZ Bank Marketing Tech',
    category: 'Banking CMS',
    features: [
      'Campaign entity linking banners, articles and promo codes into a single release unit',
      'Multi-channel distribution config and status tracking per channel',
      'Visual calendar for scheduling, conflicts detection and bulk reschedule',
      'Approval workflow with email/Slack notifications',
      'PostgreSQL + Strapi with versioning and rollback of campaign configs',
    ],
    responsibilities: [
      'Modelled campaign and distribution schemas',
      'Built calendar UI and scheduling APIs in Next.js / Strapi',
      'Integrated notification hooks',
      'Added versioning and rollback support',
    ],
    challenges: 'Ensuring no overlapping campaigns on the same slot and handling timezone-aware scheduling across environments.',
    outcome: 'Unified campaign operations and eliminated double-booking errors; 30+ concurrent campaigns managed smoothly.',
  },
  {
    id: 3,
    slug: 'marketing-cms-promo-portal',
    imageSource: workplace,
    projectName: 'Marketing CMS — Promo Portal',
    href: 'https://www.kbzbank.com',
    sourceLink: 'https://github.com/WinZawOoDev',
    content:
      'Promo portal CMS for marketing — dynamic banners, offers and localized content management with Strapi headless CMS and Next.js SSR on AWS.',
    techStack: ['Strapi', 'Next.js', 'AWS', 'Tailwind'],
    overview:
      'The Promo Portal powers dynamic promotional zones on kbzbank.com — hero banners, product offers, branch-level promos and localized Myanmar/English content. Editors manage all promo blocks in Strapi, preview on staging, then publish via Next.js SSR that hydrates with Tailwind-styled components optimized for Lighthouse performance.',
    role: 'Full-Stack Developer',
    duration: '2024',
    team: 'KBZ Bank Marketing Tech',
    category: 'Banking CMS',
    features: [
      'Dynamic promo blocks (banner, carousel, offer card, countdown) as reusable Strapi components',
      'Locale-aware content (my/en) with fallback',
      'SSR with edge caching and CloudFront invalidation on publish',
      'A/B placement support and click-through analytics hooks',
      'Image optimization via S3 + Next.js Image',
    ],
    responsibilities: [
      'Built Strapi dynamic zones for promo blocks',
      'Created Next.js SSR pages with Tailwind design system',
      'Added i18n handling and preview',
      'Configured cache invalidation strategy',
    ],
    challenges: 'Keeping SSR fast while allowing instant preview for editors — solved with preview tokens and ISR.',
    outcome: 'Marketers ship promo updates without engineering; page performance stays >90 Lighthouse despite dynamic content.',
  },
  {
    id: 4,
    slug: 'kyc-search-portal',
    imageSource: workplace,
    projectName: 'KYC Search Portal',
    href: 'https://www.kbzbank.com',
    sourceLink: 'https://github.com/WinZawOoDev',
    content:
      'Designed and developed KYC Search Portal for rapid customer verification — search, filtering and compliance workflows built with React.js.',
    techStack: ['React.js', 'TypeScript', 'REST API'],
    overview:
      'An internal KYC Search Portal for compliance officers to verify customers in seconds. It provides unified search across CIF, NRC, phone and account, with faceted filtering, risk flag surfacing and audit logging. Built in React.js + TypeScript against secured REST APIs, focused on speed and accuracy for high-volume branch operations.',
    role: 'Frontend Developer',
    duration: '2023',
    team: 'KBZ Bank Compliance Tech (3 devs)',
    category: 'Compliance',
    features: [
      'Unified search with ranked results and fuzzy matching',
      'Advanced filters: customer type, risk level, branch, status',
      'Paginated results with virtualized table for large datasets',
      'Risk badge and watchlist highlights with drill-down drawer',
      'Audit log of every search/view for compliance review',
    ],
    responsibilities: [
      'Built React search UI with debounced queries and filter sync to URL',
      'Integrated REST APIs with token auth and error handling',
      'Implemented virtualization and pagination',
      'Added audit logging hooks',
    ],
    challenges: 'Fast search over large datasets while keeping the UI responsive on low-end branch devices.',
    outcome: 'Cut average verification time from minutes to seconds and improved audit traceability for compliance.',
  },
  {
    id: 5,
    slug: 'healthcare-products-cms',
    imageSource: workplace,
    projectName: 'Healthcare Products CMS',
    href: '#',
    sourceLink: 'https://github.com/WinZawOoDev',
    content:
      'CMS for health care products company website — product catalog, inventory and content management with Strapi and Next.js, deployed on on-premise Windows Server.',
    techStack: ['Strapi', 'Next.js', 'Windows Server', 'TypeScript'],
    overview:
      'A bespoke CMS for a healthcare products company to manage its public website: product catalog, categories, inventory status, certifications and blog/news. Strapi provides the editorial backend while Next.js renders SEO-friendly pages. Deployed on-premise on Windows Server with IIS reverse proxy and nightly backups.',
    role: 'Full-Stack Developer',
    duration: '2023',
    team: 'Freelance — 2 devs',
    category: 'Healthcare',
    features: [
      'Product content type with variants, specs, certifications and MSDS attachments',
      'Category tree, search and filtered catalog with pagination',
      'Rich-text + media library for news/blog with SEO fields',
      'Inventory availability flag synced via CSV import',
      'On-premise deploy: Windows Server, IIS, PM2, MSSQL/Postgres',
    ],
    responsibilities: [
      'Modelled product/catalog schemas in Strapi',
      'Built Next.js catalog and detail pages with SEO metadata',
      'Added CSV import and image handling',
      'Handled Windows Server deployment and backups',
    ],
    challenges: 'On-premise constraints — limited inbound access, manual updates and Windows/IIS quirks vs typical cloud.',
    outcome: 'Client manages 200+ SKUs and site content without developer help; site remains fast and maintainable on-premise.',
  },
  {
    id: 6,
    slug: 'hr-recruitment-module',
    imageSource: workplace,
    projectName: 'HR Recruitment Module',
    href: 'https://smilaxglobal.com',
    sourceLink: 'https://github.com/WinZawOoDev',
    content:
      'Recruitment module for HR System at Smilax Global — candidate pipelines, job postings, and interview workflows built with microservices.',
    techStack: ['Nest.js', 'PostgreSQL', 'TypeScript', 'Next.js', 'Prisma', 'gRPC', 'ShadcnUI'],
    overview:
      'A recruitment module inside Smilax Global’s HR platform covering job requisitions, postings, candidate pipelines, interviews and offers. Architected as Nest.js microservices (REST + gRPC) with PostgreSQL + Prisma, and a Next.js + ShadcnUI front-end. Supports multi-company tenancy and fine-grained RBAC.',
    role: 'Backend / Full-Stack Developer',
    duration: '2022 — 2023',
    team: 'Smilax Global HR Tech (5 devs)',
    category: 'HR SaaS',
    features: [
      'Job opening creation with approval chain and public board sync',
      'Candidate pipeline: Applied → Screen → Interview → Offer → Hired with drag-and-drop',
      'Interview scheduling, feedback forms and scorecards',
      'Resume parsing/storage and searchable candidate pool',
      'Microservices with gRPC inter-service comms and Prisma ORM',
      'ShadcnUI data tables with server-side filtering',
    ],
    responsibilities: [
      'Built Nest.js microservices and gRPC contracts',
      'Designed PostgreSQL schema and Prisma migrations',
      'Implemented pipeline state machine and RBAC',
      'Built Next.js UI with ShadcnUI components',
    ],
    challenges: 'Modelling flexible pipelines per client while keeping reporting consistent across tenants.',
    outcome: 'Enabled recruiters to track 1000+ candidates with clear pipeline visibility and faster offer cycles.',
  },
  {
    id: 7,
    slug: 'tour-management-system',
    imageSource: workplace,
    projectName: 'Tour Management System',
    href: 'https://www.cloudsource.co.jp',
    sourceLink: 'https://github.com/WinZawOoDev',
    content:
      'Tour itinerary, bus routes, service pricing, customers, brokers and fleet management system deployed on GCP.',
    techStack: ['TypeScript', 'Remix', 'Tailwind', 'Prisma', 'PostgreSQL', 'GCP'],
    overview:
      'A comprehensive tour operations system for Cloud Source: itinerary builder, bus route and seat planning, service pricing, broker commissions, customer bookings and fleet tracking. Built with Remix + Tailwind for fast SSR, Prisma + PostgreSQL for data, and deployed on GCP Cloud Run + Cloud SQL.',
    role: 'Full-Stack Developer',
    duration: '2021 — 2022',
    team: 'Cloud Source (4 devs, Japan/Mynamar)',
    category: 'Travel Ops',
    features: [
      'Itinerary builder with day-by-day activities, meals, lodging and transport legs',
      'Bus route management, seat maps and manifest generation',
      'Service pricing engine: per-pax, group tiers, broker commission rules',
      'Customer & broker CRM with booking history and statements',
      'Fleet management: vehicles, drivers, assignments and maintenance log',
      'GCP deploy: Cloud Run, Cloud SQL, Cloud Storage',
    ],
    responsibilities: [
      'Built Remix loaders/actions for all domain modules',
      'Modeled Prisma schemas for tour/bus/pricing/fleet',
      'Implemented pricing/commission engine',
      'Handled GCP deployment and env config',
    ],
    challenges: 'Complex pricing (multi-tier + broker %) had to be accurate and explainable per booking.',
    outcome: 'Digitized manual worksheets; tour operators build itineraries and close bookings in one place.',
  },
  {
    id: 8,
    slug: 'goods-order-sap-integration',
    imageSource: workplace,
    projectName: 'Goods Order & SAP Integration',
    href: 'http://pos.com.mm/',
    sourceLink: 'https://github.com/WinZawOoDev',
    content:
      'Grocery store ordering system integrated with SAP — ordering, supplier sync, stock and settlement flows.',
    techStack: ['PHP (Laravel)', 'React.js', 'Bootstrap', 'MySQL'],
    overview:
      'A goods ordering portal for grocery chains that syncs with SAP for master data, pricing, stock and settlement. Store staff place orders via a React + Bootstrap UI; Laravel queues batches to SAP via middleware, handles confirmations, discrepancies and daily settlement files.',
    role: 'Full-Stack Developer',
    duration: '2020 — 2021',
    team: 'POS Myanmar (3 devs)',
    category: 'Retail / SAP',
    features: [
      'Supplier catalog sync from SAP (items, UOM, prices)',
      'Store ordering cart with stock validation and MOQ rules',
      'SAP integration: batch order push, ACK handling and reconciliation report',
      'Settlement flow: GRN, invoice and payment status sync',
      'Role-scoped store/supplier views and MySQL reporting',
    ],
    responsibilities: [
      'Built Laravel order and sync services + queue workers',
      'Created React ordering UI',
      'Integrated SAP via custom middleware/API',
      'Built reconciliation and settlement reports',
    ],
    challenges: 'SAP batch semantics and eventual consistency — retry, idempotency and manual reconciliation were critical.',
    outcome: 'Reliable store-to-SAP ordering with automated settlement, replacing phone/fax orders.',
  },
  {
    id: 9,
    slug: 'membership-card-payment-api',
    imageSource: workplace,
    projectName: 'Membership Card Payment API',
    href: 'http://pos.com.mm/',
    sourceLink: 'https://github.com/WinZawOoDev',
    content:
      'POS member-card payment API integration allowing charges to be paid via membership card balance.',
    techStack: ['PHP (Laravel)', 'MySQL', 'REST API'],
    overview:
      'A REST API layer that lets POS terminals charge against membership card balances. It handles card validation, balance checks, holds, captures, reversals and audit trails with MySQL transactions, and is consumed by legacy POS front-ends and newer integrations.',
    role: 'Backend Developer',
    duration: '2020',
    team: 'POS Myanmar',
    category: 'Payments API',
    features: [
      'Card lookup, PIN/auth and balance query endpoints',
      'Hold → capture payment flow with expiry and auto-release',
      'Reversal/void for checkout errors with idempotency keys',
      'Transactional integrity with row-level locking',
      'Audit trail and daily reconciliation export',
    ],
    responsibilities: [
      'Designed REST contract and error model',
      'Implemented transactional payment flow in Laravel + MySQL',
      'Added idempotency and reversal logic',
      'Built reconciliation exports',
    ],
    challenges: 'Concurrent POS terminals racing on same card — required locking and idempotency to avoid double-charge.',
    outcome: 'Stable card-as-payment method across all POS branches with zero double-charge incidents.',
  },
  {
    id: 10,
    slug: 'pos-system-maintenance',
    imageSource: workplace,
    projectName: 'POS System Maintenance',
    href: 'http://pos.com.mm/',
    sourceLink: 'https://github.com/WinZawOoDev',
    content:
      'Performance optimization, bug fixes and feature additions for legacy POS on CodeIgniter.',
    techStack: ['PHP (CodeIgniter)', 'Bootstrap', 'MySQL'],
    overview:
      'Ongoing maintenance of the legacy POS codebase (CodeIgniter 3 + Bootstrap + MySQL) — query optimization, checkout bug fixes, new report/permission features and PHP version upgrades. Focus on stability for high-traffic grocery checkouts.',
    role: 'Backend Developer',
    duration: '2019 — 2020',
    team: 'POS Myanmar',
    category: 'Retail POS',
    features: [
      'Slow query remediation with indexing and pagination',
      'Checkout and discount logic bug fixes',
      'New reports: daily sales, void/refund, cashier audit',
      'Permission matrix extension and UI polish',
      'PHP upgrade prep and deprecation cleanup',
    ],
    responsibilities: [
      'Profiled and fixed slow MySQL queries',
      'Patched checkout/discount edge cases',
      'Added reports and permission features',
      'Refactored legacy controllers for maintainability',
    ],
    challenges: 'Legacy CodeIgniter without tests; every change needed careful regression checks on live-like data.',
    outcome: 'Checkout stability improved and key reports became self-serve for ops, reducing support tickets.',
  },
  {
    id: 11,
    slug: 'personal-portfolio',
    imageSource: workplace,
    projectName: 'Personal Portfolio',
    href: '#',
    sourceLink: 'https://github.com/WinZawOoDev',
    content:
      'This portfolio — Next.js 16, React 19, Tailwind 4, Framer Motion with dark mode and scroll progress.',
    techStack: ['Next.js', 'React 19', 'Tailwind CSS 4', 'Framer Motion'],
    overview:
      'This portfolio site itself — a fast, accessible personal site built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and Framer Motion. It features scroll progress, view toggles (grid/list), dark mode via ?theme param + prefers-color-scheme, SEO metadata, sitemap/robots and a contact form via EmailJS.',
    role: 'Solo — Design + Development',
    duration: '2024 — 2025',
    team: 'Solo',
    category: 'Portfolio',
    features: [
      'App Router with metadata, sitemap and openGraph',
      'Tailwind 4 design tokens and dark mode theming',
      'Framer Motion layout animations and view toggle',
      'Scroll progress, responsive header and EmailJS contact',
      'Detail pages for each project with static generation',
    ],
    responsibilities: [
      'Designed and implemented entire site and data model',
      'Added animations, theming and responsive layout',
      'Configured SEO, deployment and EmailJS',
    ],
    challenges: 'Keeping bundle light while delivering polished motion and theming without flash-of-wrong-theme.',
    outcome: 'A maintainable, performant portfolio that showcases work with dedicated case-study pages.',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug)
}
