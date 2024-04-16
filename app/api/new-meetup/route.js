import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://romansparkhomenko:lgiirX07W243tWaw@cluster0.vlkbcih.mongodb.net/meetups?retryWrites=true&w=majority";

export async function POST(req) {
  const data = await req.json();

  try {
    const client = await MongoClient.connect(uri);
    const db = await client.db();
    const meetupsCollection = await db.collection("meetups-list");

    await meetupsCollection.insertOne(data);

    await client.close();
  } catch (err) {
    return new Response(`Something went wrong! ${err.message}`, {
      status: 400,
    });
  }

  return new Response("Meetup was successfully created!", {
    status: 201,
  });
}
