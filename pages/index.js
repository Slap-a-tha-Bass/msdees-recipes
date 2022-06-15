import Head from "next/head";
import styles from "../styles/Home.module.css";
import { gql, useQuery } from "@apollo/client";
import Card from "../components/card";

const GET_RECIPES = gql`
  query MyQuery {
    recipes {
      title
      description
      ingredients
      preparation
      image {
        url
        height
        width
      }
      slug
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_RECIPES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Ms. Dee&apos;s Recipes</title>
        <meta name="description" content="Some of Ms. Dee's Favorite Recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ms. Dee&apos;s Recipes</h1>
        <div className={styles.grid}>
          {data.recipes.map((recipe) => {
            return (
              <Card
                key={recipe.slug}
                title={recipe.title}
                description={recipe.description}
                ingredients={recipe.ingredients}
                preparation={recipe.preparation}
                image={recipe.image.url}
                slug={recipe.slug}
              />
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright © 2022</p>
      </footer>
    </div>
  );
}
