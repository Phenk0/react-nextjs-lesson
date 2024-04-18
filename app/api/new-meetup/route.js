import { MongoClient } from "mongodb";
import { revalidatePath } from "next/cache";

export async function POST(req) {
  const data = await req.json();
  try {
    const url = process.env.MONGODB_URI.replace(
      "<password>",
      process.env.MONGODB_PASSWORD,
    );
    const client = await MongoClient.connect(
      `${url}?retryWrites=true&w=majority/`,
    );
    const db = await client.db();
    const meetupsCollection = await db.collection("meetups-list");

    await meetupsCollection.insertOne(data);
    await client.close();
  } catch (err) {
    return new Response(`Something went wrong! ${err.message}`, {
      status: 400,
    });
  }

  revalidatePath("/");

  return new Response("Meetup was successfully created!", {
    status: 201,
  });
}
