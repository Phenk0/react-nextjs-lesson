import MeetupDetail from "@/components/meetups/meetup-detail";
import { getMeetup } from "@/utils/get-meetup";
import { getMeetups } from "@/utils/get-meetups";

export default async function MeetupIdPage({ params }) {
  const { image, title, description, address } = await getMeetup(
    params.meetupId,
  );
  return (
    <MeetupDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
}

// If generateStaticParams do Not return specific ID then its Page is Not Found
export const dynamicParams = false;

export async function generateStaticParams() {
  const meetupsIds = await getMeetups();
  return meetupsIds.map((meetup) => ({
    slug: meetup.id,
  }));
}
