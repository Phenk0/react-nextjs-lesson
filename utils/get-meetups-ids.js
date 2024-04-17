import { MongoClient } from "mongodb";

export async function getMeetupsIds() {
  const client = await MongoClient.connect(
    "mongodb+srv://romansparkhomenko:lgiirX07W243tWaw@cluster0.vlkbcih.mongodb.net/meetups?retryWrites=true&w=majority/",
  );
  const db = await client.db();
  const meetupsCollection = await db.collection("meetups-list");

  const meetupsIds = await meetupsCollection
    .find(
      {},
      {
        _id: 1,
      },
    )
    .toArray();

  await client.close();
  return meetupsIds.map((meetup) => ({ id: meetup._id.toString() }));
}
