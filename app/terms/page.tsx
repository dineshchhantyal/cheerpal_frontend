import config from "@/utils/config";
import React from "react";

const Terms = () => {
  return (
    <main className="container mx-auto min-h-[calc(100vh-140px)] text-gray-500 dark:text-gray-400">
      <h1 className="font-bold text-center mt-8 mb-4 text-gray-900 sm:text-xl md:text-2xl lg:text-3xl xl:text-7xl dark:text-gray-100 dark:text-opacity-90">
        Terms and Conditions
      </h1>
      <p className="dark:text-opacity-90 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        This is the terms and conditions content.
      </p>
      <ol className="dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-4 mb-8">
        <li className="dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          At {config.COMPANY_NAME}, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {config.DISPLAY_URL} or use our services.
        </li>
        <li className="dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
        </li>
        <li className="dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          {config.COMPANY_NAME} reserves the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the site after the date such revised Privacy Policy is posted.
        </li>
        <li className="dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          <strong className="text-gray-900 dark:text-gray-100 dark:text-opacity-90">
            1. Introduction
          </strong>
          <p>
            These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, {config.DISPLAY_URL} accessible at {config.DISPLAY_URL}.
          </p>
          <p>
            These Terms will be applied fully and affect your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
          </p>
          <p>
            Minors or people below 18 years old are not allowed to use this Website.
          </p>
        </li>
        <li className="dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          <strong className="text-gray-900 dark:text-gray-100 dark:text-opacity-90">
            2. Intellectual Property Rights
          </strong>
          <p>
            Other than the content you own, under these Terms, {config.COMPANY_NAME} and/or its licensors own all the intellectual property rights and materials contained in this Website.
          </p>
          <p>
            You are granted a limited license only for purposes of viewing the material contained on this Website.
          </p>
        </li>
        <li className="dark:text-opacity-90 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          <strong className="text-gray-900 dark:text-gray-100 dark:text-opacity-90">
            3. Restrictions
          </strong>
          <p>You are specifically restricted from all of the following:</p>
          <ul>
            <li>publishing any Website material in any other media;</li>
            <li>
              selling, sublicensing and/or otherwise commercializing any Website material;
            </li>
            <li>publicly performing and/or showing any Website material;</li>
            <li>
              using this Website in any way that is or may be damaging to this Website;
            </li>
            <li>
              using this Website in any way that impacts user access to this Website;
            </li>
            <li>
              using this Website contrary to applicable laws and regulations, or in any way that may cause harm to the Website, or to any person or business entity;
            </li>
            <li>
              engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this Website;
            </li>
            <li>
              using this Website to engage in any advertising or marketing.
            </li>
          </ul>
          <p>
            Certain areas of this Website are restricted from being accessed by you, and {config.COMPANY_NAME} may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential, and you must maintain confidentiality as well.
          </p>
        </li>
      </ol>
    </main>
  );
};

export default Terms;
