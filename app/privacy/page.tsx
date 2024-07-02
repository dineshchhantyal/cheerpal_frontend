import config from "@/lib/config";
import React from "react";

const Privacy = () => {
  return (
    <main className="container mx-auto min-h-[calc(100vh-140px)]">
      <h1 className="font-bold text-center mt-8 mb-4 text-gray-900 sm:text-xl md:text-2xl lg:text-3xl xl:text-7xl dark:text-gray-100 dark:text-opacity-90">
        Privacy Policy
      </h1>
      <p className="text-gray-700 dark:text-gray-300 dark:text-opacity-90 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        This is the privacy policy content.
      </p>
      <ol className="text-gray-700 dark:text-gray-300 dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4 mb-8">
        <li className="text-gray-700 dark:text-gray-300 dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          At {config.COMPANY_NAME}, we are committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website{" "}
          {config.DISPLAY_URL} or use our services.
        </li>
        <li className="text-gray-700 dark:text-gray-300 dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          Please read this Privacy Policy carefully. If you do not agree with
          the terms of this Privacy Policy, please do not access the site.
        </li>
        <li className="text-gray-700 dark:text-gray-300 dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          {config.COMPANY_NAME} reserves the right to make changes to this
          Privacy Policy at any time and for any reason. We will alert you about
          any changes by updating the &quot;Last Updated&quot; date of this
          Privacy Policy. You are encouraged to periodically review this Privacy
          Policy to stay informed of updates. You will be deemed to have been
          made aware of, will be subject to, and will be deemed to have accepted
          the changes in any revised Privacy Policy by your continued use of the
          site after the date such revised Privacy Policy is posted.
        </li>
        <li className="text-gray-700 dark:text-gray-300 dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          {config.COMPANY_NAME} does not knowingly collect any personally
          identifiable information from children under the age of 13. If a
          parent or guardian believes that {config.COMPANY_NAME} has personally
          identifiable information of a child under the age of 13 in its
          database, please contact us immediately at {config.CONTACT_EMAIL} and
          we will use our best efforts to promptly remove such information from
          our records.
        </li>
        <li className="text-gray-700 dark:text-gray-300 dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          If you have questions or comments about this Privacy Policy, please
          contact us at {config.CONTACT_EMAIL}.
        </li>
      </ol>
    </main>
  );
};

export default Privacy;
