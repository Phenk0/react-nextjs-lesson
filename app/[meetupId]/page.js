import MeetupDetail from "@/components/meetups/meetup-detail";
import { getMeetup } from "@/utils/get-meetup";
import { getMeetupsIds } from "@/utils/get-meetups-ids";

// export const runtime = "edge";
// export const revalidate = 1;

export default async function MeetupIdPage({ params }) {
  const { meetupId } = params;
  const { image, title, description, address } = await getMeetup(meetupId);
  return (
    <MeetupDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
}

// If generateStaticParams do Not return specific ID then its Page is Not Found(and revalidate only on redeploy(rebuild) time)
export const dynamicParams = true;

export async function generateStaticParams() {
  const meetupsIds = await getMeetupsIds();
  return meetupsIds.map((meetup) => ({
    meetupId: meetup.id,
  }));
}
export async function generateMetadata({ params }) {
  const { meetupId } = params;
  const { title } = await getMeetup(meetupId);
  return {
    title: `Meetup: ${title}`,
    description: "Lesson was taught by Max",
  };
}
