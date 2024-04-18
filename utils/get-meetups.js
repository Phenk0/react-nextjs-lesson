import { MongoClient } from "mongodb";

export async function getMeetups() {
  const url = process.env.MONGODB_URI.replace(
    "<password>",
    process.env.MONGODB_PASSWORD,
  );
  const client = await MongoClient.connect(
    `${url}?retryWrites=true&w=majority/`,
  );
  const db = await client.db();
  const meetupsCollection = await db.collection("meetups-list");

  const meetups = await meetupsCollection.find().toArray();

  await client.close();
  return meetups.map((meetup) => ({
    id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
  }));
}
