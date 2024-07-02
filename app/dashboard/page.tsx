import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">
                Event Reminders
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Track and manage all your upcoming events.
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <PlusIcon className="h-5 w-5" />
              <span className="sr-only">Create Event Reminder</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-xl shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Birthday Party
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  June 15, 2023 at 7:00 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Celebrate Sarah's 30th birthday at her house.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="rounded-md">
                  <GiftIcon className="mr-2 h-4 w-4" />
                  Send Gift
                </Button>
                <Button variant="outline" size="sm" className="rounded-md">
                  <MessageCircleIcon className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardFooter>
            </Card>
            <Card className="rounded-xl shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Team Offsite
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  July 10-12, 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>2-day offsite meeting at the company retreat center.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="rounded-md">
                  <GiftIcon className="mr-2 h-4 w-4" />
                  Send Gift
                </Button>
                <Button variant="outline" size="sm" className="rounded-md">
                  <MessageCircleIcon className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardFooter>
            </Card>
            <Card className="rounded-xl shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Company Picnic
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  August 5, 2023 at 12:00 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Annual company picnic at the park.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="rounded-md">
                  <GiftIcon className="mr-2 h-4 w-4" />
                  Send Gift
                </Button>
                <Button variant="outline" size="sm" className="rounded-md">
                  <MessageCircleIcon className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardFooter>
            </Card>
            <Card className="rounded-xl shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Holiday Party
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  December 15, 2023 at 7:00 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Annual holiday party at the office.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="rounded-md">
                  <GiftIcon className="mr-2 h-4 w-4" />
                  Send Gift
                </Button>
                <Button variant="outline" size="sm" className="rounded-md">
                  <MessageCircleIcon className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button size="sm" className="rounded-md">
            <PlusIcon className="mr-2 h-4 w-4" />
            Create Event Reminder
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

function GiftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

function MessageCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default Dashboard;
