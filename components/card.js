import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Card({
  title,
  description,
  ingredients,
  preparation,
  image,
  slug,
  isLink,
}) {
  return (
    <div>
      <Link href={`/recipes/${slug}`}>
        <div className={styles.card} >
          <h2>{title}</h2>
          <p>{description}</p>
          <Image
            src={image}
            alt={title}
            width={250}
            height={250}
          />
        </div>
      </Link>
    </div>
  );
}
