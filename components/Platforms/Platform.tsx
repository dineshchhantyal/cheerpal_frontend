import Image from "next/image";
import React from "react";

export const Platform = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-gray-200 dark:bg-gray-700">
      <div
        className="container mx-auto flex flex-col  lex-col-reverse md:flex-row gap-4 md:gap-8 md:justify-between items-center px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14
      "
      >
        <div>
          <h1 className="text-xl font-bold tracking-normal sm:text-2xl text-primary dark:text-gray-100">
            Platform
          </h1>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
            Supported platforms
          </p>
        </div>
        <div className="flex gap-3 md:gap-6 justify-center items-center">
          <Image
            src="/logos/ios-logo.png"
            alt="iOS, Apple, iPhone, iPad"
            width={100}
            height={50}
          />
          <Image
            src="/logos/android-logo.png"
            alt="Android, Google, Samsung, Huawei"
            width={100}
            height={50}
          />
          <Image
            src="/logos/windows_os_logo.png"
            alt="Windows, Microsoft, PC, Laptop"
            width={100}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};
