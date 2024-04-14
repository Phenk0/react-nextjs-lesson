"use client";
import { useRouter } from "next/navigation";
import Card from "@/ui/Card";
import classes from "./MeetupItem.module.css";
import Image from "next/image";

export default function MeetupItem({ image, title, address, id }) {
  const router = useRouter();
  function handleShowDetails() {
    router.push("/" + id);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          {/*<img src={image} alt={title} />*/}
          <Image
            src={image}
            alt={title}
            height={865}
            width={1280}
            priority={true}
            sizes="80vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handleShowDetails}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}
