import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://romansparkhomenko:lgiirX07W243tWaw@cluster0.vlkbcih.mongodb.net/meetups?retryWrites=true&w=majority";
const client = await MongoClient.connect(uri);
console.log(1);
const db = await client.db();

export async function GET() {
  const meetups = await db.collection("meetups-list");
  const meetupsList = await meetups.find();

  console.log(meetups);

  return Response.json({ meetupsList });
}
