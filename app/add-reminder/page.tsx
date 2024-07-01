import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export function AddReminder() {
  return (
    <Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle>Create Event Reminder</CardTitle>
        <CardDescription>
          Fill out the details below to set up a new event reminder.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input id="title" placeholder="Enter event title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Event Location</Label>
              <Input id="location" placeholder="Enter event location" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Event Description</Label>
            <Textarea
              id="description"
              rows={4}
              placeholder="Enter event description"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="event-date">Event Date and Time</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-full justify-start font-normal">
                    <CalendarDaysIcon className="mr-2 h-4 w-4" />
                    <span id="event-date">Select date and time</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reminder-date">Reminder Date and Time</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-full justify-start font-normal">
                    <CalendarDaysIcon className="mr-2 h-4 w-4" />
                    <span id="reminder-date">Select date and time</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              {/* <Select id="priority"> */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Repeat/Recurrence</Label>
              <div className="flex items-center gap-4">
                <Checkbox id="repeat-daily" name="repeat" value="daily" />
                <Label htmlFor="repeat-daily">Daily</Label>
                <Checkbox id="repeat-weekly" name="repeat" value="weekly" />
                <Label htmlFor="repeat-weekly">Weekly</Label>
                <Checkbox id="repeat-monthly" name="repeat" value="monthly" />
                <Label htmlFor="repeat-monthly">Monthly</Label>
                <Checkbox id="repeat-yearly" name="repeat" value="yearly" />
                <Label htmlFor="repeat-yearly">Yearly</Label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="tags">Category/Tags</Label>
              <Input id="tags" placeholder="Enter tags separated by commas" />
            </div>
            <div className="space-y-2">
              <Label>Notification Preferences</Label>
              <div className="flex items-center gap-4">
                <Checkbox id="notify-email" name="notify" value="email" />
                <Label htmlFor="notify-email">Email</Label>
                <Checkbox id="notify-push" name="notify" value="push" />
                <Label htmlFor="notify-push">Push</Label>
                <Checkbox id="notify-sms" name="notify" value="sms" />
                <Label htmlFor="notify-sms">SMS</Label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="attachments">Attachments</Label>
              <Input id="attachments" type="file" multiple />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                rows={4}
                placeholder="Enter any additional notes"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="recipient-name">Recipient Name</Label>
              <Input id="recipient-name" placeholder="Enter recipient name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="recipient-email">Recipient Email</Label>
              <Input
                id="recipient-email"
                type="email"
                placeholder="Enter recipient email"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit">Save Event Reminder</Button>
      </CardFooter>
    </Card>
  );
}

function CalendarDaysIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

export default AddReminder;
