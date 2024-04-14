import MeetupDetail from "@/components/meetups/meetup-detail";
import { getMeetup } from "@/utils/get-meetup";

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
  // const topics = await db.topic.findMany();
  // return topics.map((topic) => ({
  //   slug: topic.slug
  // }));
  return [{ meetupId: "m1" }];
}
