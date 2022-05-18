import Head from "next/head";
import ProductCard from "../components/ProductCard";
import CategoryDrop from "../components/CategoryDrop";
import Input from "../components/form/Input";
import { PlusCircleIcon } from "@heroicons/react/solid";

import styles from "../styles/Home.module.css";
import Link from "next/link";
import { allCats, allProducts } from "../helpers/apiGet";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/Provider";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  // const { load } = useContext(GlobalContext);
  const { query } = context;
  const { category } = query;
  const queryString = category ? category : ""; 
  const res = await allProducts(queryString);
  const allprods = await res.data; 
  const catRes = await allCats();
  const categories = await catRes.data; 
  return {
    props: {
      allprods,
      categories,
    },
  };
}

export default function Home({ allprods, categories }) {
  const { load, category } = useContext(GlobalContext); 
  const router = useRouter(); 
  const [search, setSearch] = useState("");
  const [catsel, setCatsel] = useState(router.query.category); 
  const [products, setProducts] = useState(allprods); 
  const FetchProductsByCat = async (e) => {
    const res = await allProducts(e);
    const allprods = await res.data;
    setProducts(allprods);
    // router.push(router.pathname+'?category='+catsel+"/",undefined ,{shallow:true})
  };

  useEffect(() => {
     setCatsel(category[0]) 
  }, [category]);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>HomePage - Upayments Store | Gagan Darji</title>
        <meta
          name="description"
          content="Homepage With List of Products and Category filter and search"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container mx-auto px-4 bg-light">
          <div
            className={
              styles.relativeIndex +
              " flex flex-col md:flex-row w-full justify-between"
            }
          >
            <Input
              placeholder="search"
              type="text"
              value={search}
              onChange={handleSearch}
            />
            <CategoryDrop
              catlist={categories}
              onSel={(e) => FetchProductsByCat(e)}
              selectedCat={catsel}
            />
          </div>
          <div className={styles.paddingTop + " max-w-4xl mx-auto mb-8 "}>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <>
                {products
                  .filter((prod) => prod.name.toLowerCase().includes(search))
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      to={product.id}
                      avatar={product.avatar}
                      name={product.name}
                      price={product.price}
                    />
                  ))}
              </>
            </div>
          </div>
        </div>
      </main>
      <div
        className={
          styles.styckyBottom + " container relative mx-auto px-4 mt-4 mb-3"
        }
      >
        <span className={styles.plus}>
          <Link href="creatproduct">
            <PlusCircleIcon
              className={(styles.h20, styles.w20 + " h-20 w-20 text-black-500")}
            />
          </Link>
        </span>
      </div>
    </div>
  );
}
