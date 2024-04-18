import { MongoClient } from "mongodb";

export async function getMeetupsIds() {
  const url = process.env.MONGODB_URI.replace(
    "<password>",
    process.env.MONGODB_PASSWORD,
  );
  const client = await MongoClient.connect(
    `${url}?retryWrites=true&w=majority/`,
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
