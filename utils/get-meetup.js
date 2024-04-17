import { MongoClient, ObjectId } from "mongodb";

export async function getMeetup(id) {
  const client = await MongoClient.connect(
    "mongodb+srv://romansparkhomenko:lgiirX07W243tWaw@cluster0.vlkbcih.mongodb.net/meetups?retryWrites=true&w=majority/",
  );
  const db = await client.db();
  const meetupsCollection = await db.collection("meetups-list");

  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(id),
  });

  await client.close();
  return {
    // id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
    description: meetup.description,
  };
}
