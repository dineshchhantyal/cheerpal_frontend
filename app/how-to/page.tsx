import React from "react";
const instructions = {
  "Sign Up/Login": [
    "If you're a new user, sign up for an account using your email or social media accounts.",
    "If you already have an account, simply log in using your credentials.",
  ],
  "Explore Features": [
    "Familiarize yourself with the key features of our app, including:",
    "Find Your Twin: Connect with people who share your name or birthdate.",
    "Birthday Sync: Easily synchronize birthdays of loved ones from multiple platforms.",
    "Timely Reminders: Receive personalized reminders for celebrations.",
  ],
  "Find Your Twin": [
    "Navigate to the 'Find Your Twin' feature.",
    "Enter your name or birthdate to discover individuals who share similar details.",
    "Connect with them to celebrate special occasions together.",
  ],
  "Birthday Sync": [
    "Access the 'Birthday Sync' feature.",
    "Sync birthdays of your loved ones from various social media and contact lists into our app.",
    "Stay updated on upcoming birthdays and plan celebrations accordingly.",
  ],
  "Timely Reminders": [
    "Utilize the 'Timely Reminders' feature.",
    "Receive personalized reminders for birthdays and special events.",
    "Ensure you never miss an opportunity to spread joy and celebrate with your loved ones.",
  ],
  "Settings and Preferences": [
    "Customize your app settings and preferences according to your liking.",
    "Manage notifications, profile information, and privacy settings as per your preferences.",
  ],
  "Feedback and Support": [
    "Share your feedback with us to help us improve our app.",
    "Contact our support team if you encounter any issues or have questions about using the app.",
  ],
};

export const HowToUse = () => {
  return (
    <section className="mb-8 container flex flex-col mx-auto px-4 lg:px-6 py-12 gap-6 md:gap-8 lg:gap-12">
      {Object.entries(instructions).map(([section, steps]) => (
        <div key={section}>
          <h2
            className="text-2xl font-bold
    text-primary/75 dark:text-gray-100
      "
          >
            {section}
          </h2>
          <ol className="list-decimal pl-8 mt-2">
            {steps.map((step, index) => (
              <li
                key={index}
                className="mb-2  text-gray-500 dark:text-gray-400"
              >
                {step}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
};

export default HowToUse;
// Here are the instructions on how to use our app:

//     Sign Up/Login:
//         If you're a new user, sign up for an account using your email or social media accounts.
//         If you already have an account, simply log in using your credentials.

//     Explore Features:
//         Familiarize yourself with the key features of our app, including:
//             Find Your Twin: Connect with people who share your name or birthdate.
//             Birthday Sync: Easily synchronize birthdays of loved ones from multiple platforms.
//             Timely Reminders: Receive personalized reminders for celebrations.

//     Find Your Twin:
//         Navigate to the "Find Your Twin" feature.
//         Enter your name or birthdate to discover individuals who share similar details.
//         Connect with them to celebrate special occasions together.

//     Birthday Sync:
//         Access the "Birthday Sync" feature.
//         Sync birthdays of your loved ones from various social media and contact lists into our app.
//         Stay updated on upcoming birthdays and plan celebrations accordingly.

//     Timely Reminders:
//         Utilize the "Timely Reminders" feature.
//         Receive personalized reminders for birthdays and special events.
//         Ensure you never miss an opportunity to spread joy and celebrate with your loved ones.

//     Settings and Preferences:
//         Customize your app settings and preferences according to your liking.
//         Manage notifications, profile information, and privacy settings as per your preferences.

//     Feedback and Support:
//         Share your feedback with us to help us improve our app.
//         Contact our support team if you encounter any issues or have questions about using the app.
