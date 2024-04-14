import Image from "next/image";
import classes from "./meetup-detail.module.css";

export default function MeetupDetail({ image, description, address, title }) {
  return (
    <section className={classes.detail}>
      <Image
        src={image}
        alt={title}
        height={865}
        width={1280}
        priority={true}
        sizes="80vw"
      />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
