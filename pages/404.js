import Head from "next/head"; 
import styles from "../styles/404.module.css"; 
import { useRouter } from "next/router";
import Button from "../components/form/Button";
import Link from "next/link";
import { useEffect } from "react";
 
export default function Custom404(){
  
  const router = useRouter(); 
  
useEffect(() => {   
  setTimeout(() => {
    router.push("/")
  }, 10000); 
}, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>404 Page - Upayments Store | Gagan Darji</title>
        <meta name="description" content="404 Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container mx-auto px-4 bg-light">
          <div className={styles.paddingTop + " max-w-2xl mx-auto mb-8"}>
            <div className="text-center">
              <h1 className={styles.textxxxl}>404 - Page Not Found</h1>
              <p>You will be redirected to homepage</p>
              <div className="flex flex-row gap-20 mt-5">
                <Link href="/">
                  <Button text="Homepage"/>
                </Link>
                <Link href="creatproduct">
                  <Button text="Create Product"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
 