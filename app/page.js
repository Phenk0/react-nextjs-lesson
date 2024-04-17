import MeetupList from "@/components/meetups/MeetupList";
import { getMeetups } from "@/utils/get-meetups";

// export const runtime = "edge";
// export const revalidate = 1;

export default async function HomePage() {
  const meetups = await getMeetups();

  return <MeetupList meetups={meetups} />;
}
