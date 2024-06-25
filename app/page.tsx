import {
  LoginButton,
  RegisterButton,
  LogoutButton,
  ProfileButton,
} from "@/components/atomic/button/auth.button";
import CanfitteBackground from "@/components/Background/CanfitteBackground";
import { Platform } from "@/components/Platforms/Platform";
import { authOptions } from "@/utils/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none dark:text-gray-50">
                  Welcome to CheerPal
                </h1>
                <p
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400
                "
                >
                  The go-to companion for spreading joy and never missing a
                  birthday celebration again!
                </p>
              </div>
              <div className="space-x-4">
                <button
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-primary dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 hover:cursor-not-allowed"
                  disabled
                >
                  Download App
                </button>
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="/about"
                >
                  Learn more
                </a>
              </div>
              <p
                className="text-xs bg-gradient-to-br
             text-transparent bg-clip-text from-primary to-gray-800 dark:from-gray-100 dark:to-primary  animate-pulse
              "
              >
                coming soon on all platforms!
              </p>
            </div>
            <CanfitteBackground />
          </div>
        </section>
        <section
          className="w-full py-5 md:py-8 lg:py-11 bg-gray-100 dark:bg-gray-800"
          id="about"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center gap-14">
              <Image
                src="/hero.svg"
                width="450"
                height="210"
                alt="Image"
                className="mx-auto overflow-hidden object-cover object-center lg:order-last hidden lg:block
                "
              />
              <div className="flex-[0.9] flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="inline-block border border-secondary text-secondary  rounded-lg px-1 py-1 text-sm dark:bg-gray-800">
                    About CheerPal
                  </h1>
                  <h2
                    className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary dark:text-gray-50
                  "
                  >
                    The symphony of delightful and stress-free connections
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    CheerPal is a symphony of delightful and stress-free
                    connections, emphasizing its seamless birthday syncing,
                    timely reminders, and event coordination.
                  </p>
                </div>
                <div className="">
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <button
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-primary dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 hover:cursor-not-allowed"
                      disabled
                    >
                      Download App
                    </button>
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 "
                      href="/how-to"
                    >
                      Tour the Platform
                    </a>
                  </div>
                  <p>
                    <span
                      className="text-xs bg-gradient-to-br
             text-transparent bg-clip-text from-primary to-gray-800 dark:from-gray-100 dark:to-primary  animate-pulse"
                    >
                      coming soon on all platforms!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          id="features"
        >
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2
                className="text-3xl font-bold tracking-tighter md:text-4xl text-primary dark:text-gray-50
              "
              >
                Key Features
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-sm/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400">
                Our features are designed to make your life easier and more
              </p>
            </div>
            <div className="grid my-6 w-full grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8 md lg:gap-12 [&amp;>img]:mx-auto">
              <div className="flex flex-col items-center space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-primary dark:text-gray-50"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
                <h3 className="text-2xl font-bold">Timely Reminders</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Receive personalized reminders to never miss a celebration,
                  ensuring you&apos;re always ready to spread joy.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-primary dark:text-gray-50"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                <h3 className="text-2xl font-bold">Birthday Sync</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily sync birthdays of loved ones from multiple social media
                  and contact lists into one app.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-primary dark:text-gray-50"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 className="text-2xl font-bold">Find Your Twin</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Connect with people who share your name or birthday, creating
                  a chance to connect with celebrities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Platform />
        <section
          className="w-full py-12 md:py-24 lg:py-32  bg-gray-100 dark:bg-gray-800"
          id="contact"
        >
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary dark:text-gray-50">
                Get Notified
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-sm/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400">
                Sign up to get notified when we launch. We&apos;ll also send you
                updates on our progress and exclusive offers.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1 dark:text-primary dark:border-gray-800 dark:placeholder-gray-400"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2  dark:bg-gray-50 dark:text-primary dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 disabled:cursor-not-allowed "
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <a className="underline underline-offset-2" href="/terms">
                  Terms &amp; Conditions
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
