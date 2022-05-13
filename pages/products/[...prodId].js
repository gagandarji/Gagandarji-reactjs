import Head from "next/head";
import { useRouter } from "next/router";
import Details from "../../components/Details"; 
import { allProducts, productDetails } from "../../helpers/apiGet";
import styles from "../../styles/Details.module.css";

  
export async function getStaticPaths() {
  const response = await allProducts(); 
  const products = await response.data; 

  const paths = products.map((prod) =>{
    return {
      params:{
        prodId:[`${prod.id}`]
      }
    }
  });
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context) { 
  const {params} = context;
  const res = await productDetails(params.prodId);
  const product = await res.data;  
  return { props: { product } }
}




export default function ProductDetails({product}) {
  const router = useRouter();
  const prodId = router.query.prodId || [] 
  return (
    <div className={styles.container}>
      <Head>
        <title>{product.name} - Upayments Store | Gagan Darji</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container mx-auto px-4 bg-light"> 
          <div className={styles.paddingTop + " max-w-4xl mx-auto mb-8"}>
            <div className="grid"> 
              <Details name={product.name} price={product.price} description={product.description} avatar={product.avatar} category={product.category}/>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
