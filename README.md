# Honestly

Honestly is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It provides a platform for receiving anonymous feedback/messages, tailored specifically for GenZ audiences. This project integrates technologies such as Tailwind CSS, Shadcn, MongoDB, and Zod for a seamless and attractive user experience.

## Features

- **Anonymous Feedback**: Collect feedback without requiring users to identify themselves.
- **Real-Time Validation**: Utilizes Zod for client-side data validation to ensure data integrity before it hits your database.
- **Modern Design**: Built with Tailwind for a responsive and modern interface.
- **Scalable Backend**: MongoDB for flexible, scalable data storage.

## Getting Started

To get the server running locally:

1. Clone the repo
   ```bash
   git clone https://github.com/Faranheit15/honestly.git
   cd honestly
   ```
2. Install the dependencies
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```
3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
4. Open http://localhost:3000 to view it in the browser.

## Folder Structure

<ul>
    <li>email
        <ol>
            <li><strong>VerificationEmail.tsx</strong>: This contains the OTP email template made using React Emails package. While registering to the app, an OTP will be sent to the user's email to verify.</li>
        </ol>
    </li>
    <li>src/model: Contains the MongoDB data models
    <li>src/schemas: Contains Zod schemas for validation of various forms and data entries:
    <ol>
        <li><strong>signUpSchema.ts</strong>: Validates sign-up form data.</li>
        <li><strong>verifySchema.ts</strong>: Validates the OTP received during sign-up.</li>
        <li><strong>signInSchema.ts</strong>: Validates sign-in form data.</li>
        <li><strong>acceptMessageSchema.ts</strong>: Validates data when accepting messages.</li>
        <li><strong>messageSchema.ts</strong>: Additional validations for message data.
        </li>
    </ol>
    </li>
    <li>src/lib: Contains the external library configurations:
    <ol>
        <li><strong>dbConnect.ts</strong>: Contains the configuration settings for MongoDB.</li>
        <li><strong>resend.ts</strong>: Contains the configuration settings for the Resend API.</li>
    </ol>
    </li>
    <li>src/app/api: Contains the <strong>Backend Code</strong>:
    <ol>
        <li><strong>sign-up</strong>: Contains the API code for signing up a new user.</li>
    </ol>
    </li>
</ul>

## Libraries used

<ul>
    <li><strong>Zod</strong>: TypeScript-first schema validation with static type inference to simplify and ensure reliable data validation.</li>
    <li><strong>Tailwind CSS</strong>: A utility-first CSS framework for rapidly building custom designs.</li>
    <li><strong>Shadcn</strong>: Beautifully designed components that you can copy and paste into your apps.</li>
    <li><strong>MongoDB</strong>: NoSQL database for handling large volumes of data in a flexible, scalable way.</li>
    <li><strong>Resend</strong>: Resend is the email API for developers.</li>
    <li><strong>Bcryptjs</strong>: A library to help you hash passwords.</li>
    <li><strong>React Email</strong>: A collection of high-quality, unstyled components for creating beautiful emails using React and TypeScript.</li>
    <li><strong>Next Auth</strong>: Next JS authentication provider.</li>
</ul>

## Contributing

Still a work in progress, no need to contribute :)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

<hr>
Built with 💜 for GenZ by Faran Mohammad<br><br>
This `README.md` file provides a comprehensive overview of your project, how to get it started, and the libraries used, along with a basic folder structure and licensing information. Adjust it as necessary to fit the exact details and additional sections you may want to include.
