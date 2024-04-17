"use client";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/navigation";

export default function NewMeetupPage() {
  const router = useRouter();
  async function handleAddMeetup(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.warn(response.statusText);
    }

    const message = await response.text();

    console.log(message);

    //push to redirect || replace to redirect with clearing past route
    router.replace("/");
  }
  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
}
