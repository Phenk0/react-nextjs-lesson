export async function getMeetup(id) {
  // const res = await fetch(`https://api.example.com/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  // This will activate the closest `error.js` Error Boundary
  // throw new Error("Failed to fetch data");
  // }

  // return res.json();
  return {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address:
      "Old Town of Munich (Germany): on the left the Frauenkirche and on the right the New Town Hall",
    description: "This is a first meetup!",
  };
}
