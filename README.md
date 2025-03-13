# Dukan - E-commerce Platform

A modern e-commerce platform built with Next.js 14, Prisma, and Tailwind CSS.

## Features

- User authentication with email verification
- Product management
- Shopping cart functionality
- Order management
- Admin dashboard
- Responsive design

## Tech Stack

- Next.js 14
- TypeScript
- Prisma
- PostgreSQL
- Tailwind CSS
- NextAuth.js
- SendGrid (for emails)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yogendra-11/duuuu.git
cd dukan
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your configuration.

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

## Deployment on Vercel

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add the following environment variables in Vercel:
   - `DATABASE_URL`: Your PostgreSQL database URL
   - `SMTP_HOST`: SendGrid SMTP host
   - `SMTP_PORT`: SendGrid SMTP port
   - `SMTP_USER`: SendGrid API key
   - `SMTP_PASS`: SendGrid API key
   - `SMTP_FROM`: Your verified sender email
   - `NEXTAUTH_URL`: Your Vercel deployment URL
   - `NEXTAUTH_SECRET`: A random string for session encryption

4. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. Deploy!

## Common Issues

1. Database Connection:
   - Ensure your database URL is correct
   - Check if your database is accessible from Vercel's IPs

2. Email Service:
   - Verify your SendGrid API key is valid
   - Ensure your sender email is verified in SendGrid

3. Authentication:
   - Set correct `NEXTAUTH_URL` for your deployment
   - Generate a secure `NEXTAUTH_SECRET`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
