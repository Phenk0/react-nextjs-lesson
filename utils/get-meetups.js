import { MongoClient } from "mongodb";

export const revalidate = 60;

export async function getMeetups() {
  const client = await MongoClient.connect(
    "mongodb+srv://romansparkhomenko:lgiirX07W243tWaw@cluster0.vlkbcih.mongodb.net/meetups?retryWrites=true&w=majority/",
  );
  const db = await client.db();
  const meetupsCollection = await db.collection("meetups-list");

  const meetups = await meetupsCollection.find().toArray();

  await client.close();
  return meetups.map((meetup) => {
    return {
      id: meetup._id.toString(),
      title: meetup.title,
      image: meetup.image,
      address: meetup.address,
    };
  });
}
