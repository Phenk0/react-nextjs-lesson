import { MongoClient, ObjectId } from "mongodb";
import { notFound } from "next/navigation";

export async function getMeetup(id) {
  const url = process.env.MONGODB_URI.replace(
    "<password>",
    process.env.MONGODB_PASSWORD,
  );
  const client = await MongoClient.connect(
    `${url}?retryWrites=true&w=majority/`,
  );
  const db = await client.db();
  const meetupsCollection = await db.collection("meetups-list");

  if (!ObjectId.isValid(id)) {
    notFound();
  }

  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(id),
  });

  if (!meetup) {
    notFound();
  }

  await client.close();
  return {
    id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
    description: meetup.description,
  };
}
