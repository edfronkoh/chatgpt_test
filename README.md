# Lessonwise prototype

A responsive student attendance and lesson-package website. Uses fictional demo data, with no imported student details or credentials.

## Try it without installing anything

On GitHub, click **Code → Download ZIP**, extract the ZIP, then open **Lessonwise.html** in Chrome or Edge. This file contains the full demo, including styles and scripts. It uses fictional students and saves changes in your browser only.

## Run the development version

Requires Python 3 and Node.js 18+ (Node is only needed for tests). No packages to install.

```sh
cd /workspace/chatgpt_test
npm start
```

The HTTP server listens on port 3000. Run `npm test` for the attendance and package rules.

## Try it

- Open Students to add a student with any package size (1–500 lessons).
- Record attendance: present deducts one lesson; absent deducts nothing.
- Use a different lesson slot for multiple attendances on one date. Duplicate student/date/slot records are rejected.
- Open a student's profile to top up, review purchase history, or mark pending payments paid. Pending packages immediately add credits and remain flagged until paid.
- Renewals shows students with two or fewer credits. Copy a parent message and manually mark the parent contacted; the app does not send messages.
- Attendance history lets you undo a mistaken entry, restoring its lesson if appropriate.
- Export and restore JSON backups using the sidebar.

## Prototype limits

Data lives in localStorage for this browser and origin; it is not shared across staff or devices. Clearing browser data removes records. Demo data is fictional. There is no authentication, server database, automated messaging, package expiry, or spreadsheet import. Do not use this build as the authoritative store of real student records. A production version needs staff authentication, branch permissions, a server database, backups, and a reviewed spreadsheet migration. Follow-up status is per student (last contacted date), not an individual package communication log.

The design uses optional Google Fonts with system fallbacks. All core functions work without external requests.
