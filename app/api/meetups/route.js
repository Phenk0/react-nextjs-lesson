export async function GET() {
  const res = await fetch(
    "https://eliftech-delivery-app-72f3f-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
    {
      headers: {
        "Content-Type": "application/json",
        // "API-Key": process.env.DATA_API_KEY,
      },
    },
  );
  const data = await res.json();

  return Response.json({ data });
}
