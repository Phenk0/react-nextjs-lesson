import { MongoClient } from "mongodb";

export async function GET() {
  const url = process.env.MONGODB_URI.replace(
    "<password>",
    process.env.MONGODB_PASSWORD,
  );
  const client = await MongoClient.connect(
    `${url}?retryWrites=true&w=majority/`,
  );
  const db = await client.db();
  const meetups = await db.collection("meetups-list");
  const meetupsList = await meetups.find().toArray();

  return Response.json({ meetupsList });
}
