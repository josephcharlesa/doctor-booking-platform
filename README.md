# Mind Architects — Doctor Booking Platform

Mind Architects is a web-first doctor booking and patient-care platform designed to grow into an Android application.

## Current prototype

- Responsive public landing page
- Doctor discovery cards and appointment slot UI
- Demo booking flow
- Demo patient registration/login flow
- Demo Patient, Doctor and Admin dashboards
- Demo payment step with Razorpay/UPI integration placeholder
- Meeting and consultation action placeholders
- Mobile responsive layout
- Safe `.gitignore` for secrets and dependencies

## Planned production architecture

- Frontend: React / Next.js or equivalent production SPA
- Backend: Node.js / TypeScript API
- Database: PostgreSQL
- Authentication: secure role-based patient, doctor and admin accounts
- Payments: Razorpay / UPI with server-side payment verification and webhooks
- Meetings: Google Meet / Zoom
- Notifications: WhatsApp Business Platform + email/SMS/push
- Deployment: managed HTTPS hosting + secured managed database

## Data safety

GitHub is for source code, migrations, documentation and configuration templates. Do **not** commit patient medical records, prescriptions, diagnosis data, payment credentials, API secrets or production database exports to this repository.

## Production modules

### Patient
- Registration/login
- Doctor search and filters
- Availability and booking
- Payment
- Appointment history
- Online consultation
- Prescriptions
- Diagnosis
- Treatment plans and progress
- Cancellation/rescheduling

### Doctor
- Secure login
- Profile and verification
- Availability/calendar
- Appointment management
- Patient list
- Consultation workspace
- Diagnosis and clinical notes
- Prescription creation
- Treatment plans
- Follow-up scheduling

### Admin
- Doctor onboarding/verification
- Patient management
- Appointment oversight
- Payment/refund oversight
- Reports
- Platform settings
- Audit logs

## Run locally

The current prototype is plain HTML/CSS/JavaScript and can be opened from `index.html` or served with any static HTTP server.

## Important

The current dashboards and booking/payment flows are **demo-only**. They do not send data to a server and must not be used with real patient information.

## Next implementation milestone

Convert the prototype into a production application with a real database, API, authentication and validated booking/payment workflows. Keep all secrets in deployment environment variables, never in Git.
