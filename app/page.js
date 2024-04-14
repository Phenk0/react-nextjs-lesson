import MeetupList from "@/components/meetups/MeetupList";
import { getData } from "@/utils/get-meetups";

export default async function HomePage() {
  const meetups = await getData();

  return <MeetupList meetups={meetups} />;
}
