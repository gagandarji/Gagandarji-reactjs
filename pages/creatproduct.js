import Head from "next/head";
import Input from "../components/form/Input";
import Textarea from "../components/form/TextArea";
import styles from "../styles/Create.module.css";
import CreateCatDrop from "../components/form/CreateCatDrop";
import Button from "../components/form/Button";
import InputNumber from "../components/form/InputNumber";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/Provider";
import { createProduct } from "../helpers/apiPost";
import { allCats } from "../helpers/apiGet";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const catRes = await allCats();
  const categories = await catRes.data;

  return {
    props: {
      categories,
    },
  };
}

const creatproduct = (categories) => {
  const { loading, category } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    setCreateproduct({ ...createproduct, category: category[0] });
  }, [category]);

  const [createproduct, setCreateproduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    avatar: "",
    DeveloperEmail: "gagan.darji@gmail.com",
  });

  const onProductInputChange = (e) => {
    const { name, value } = e.target;
    setCreateproduct({ ...createproduct, [name]: value });
  };

  // const handleSubmit = () => {console.log(createproduct , category[0]) }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(createproduct);

    createProduct(createproduct)
      .then((response) => {
        // console.log(response.status);
        if (response.status === 201) {
          alert(response.statusText);
          console.log(response);
          // window.location.reload();
          category[1]("");
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              <form
                className="flex flex-col gap-5 items-center"
                onSubmit={handleSubmit}
              >
                <div className="relative inline-block text-left max-w-sm w-full">
                  <div className="relative rounded-md text-center ">
                    <h3 className="text-black-900 text-sxl">Create Product</h3>
                  </div>
                </div>

                <Input
                  required={true}
                  placeholder="Product Name"
                  type="text"
                  name="name"
                  value={createproduct.name}
                  onChange={onProductInputChange}
                />
                <Textarea
                  required={true}
                  placeholder="Description"
                  name="description"
                  value={createproduct.description}
                  onChange={onProductInputChange}
                />
                <Input
                  required={true}
                  placeholder="Image URL"
                  type="text"
                  name="avatar"
                  value={createproduct.avatar}
                  onChange={onProductInputChange}
                />
                <CreateCatDrop required={true} catlist={categories} />
                <InputNumber
                  required={true}
                  placeholder="Price"
                  type="text"
                  name="price"
                  value={createproduct.price}
                  onChange={onProductInputChange}
                />
                <Button required={true} type="submit" text="Submit" />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default creatproduct;
