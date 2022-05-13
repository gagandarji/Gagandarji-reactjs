import Head from "next/head"; 
import styles from "../styles/404.module.css"; 
import { useRouter } from "next/router";
 
export default function Custom404(){
  const { loading, category } = useContext(GlobalContext);
  const router = useRouter(); 

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Product - Upayments Store | Gagan Darji</title>
        <meta name="description" content="Created Product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container mx-auto px-4 bg-light">
          <div className={styles.paddingTop + " max-w-2xl mx-auto mb-8"}>
            <div>
              <h1 className={styles.textxxxl}>404 - Page Not Found</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
 