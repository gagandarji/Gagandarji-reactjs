import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../context/Provider";
import styles from "../styles/Details.module.css";

const Details = (props) => {
  const { loading, category } = useContext(GlobalContext);
  const router = useRouter();

  const handleFilterCat = (e) => { 
    category[1](e); 
    router.push("/?category="+e);
  }; 

  return (
    <>
      <div className="group flex items-center gap-10">
        <div className="max-width-250 w-250-h-300 min-h-50 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xxl overflow-hidden   lg:h-50 lg:aspect-none">
          <img
            src={props.avatar}
            alt=""
            className="productimage w-full h-full object-center object-contain lg:w-full lg:h-full"
          />
        </div> 
        <div className="flex flex-col justify-between h-full ">
          <h1 className={styles.textxxxl + " mt-2 font-medium text-black-700 "}>
            {props.name}
          </h1>
          <h1 className="text-sxl mb-2 font-medium text-black-500">
            $ {props.price}
          </h1>
        </div>
      </div>
      <div className="dtlProdcon">
        <h3 className="text-sxl">Description</h3>
        <p>{props.description}</p>
      </div>
      <div className="dtlProdcon">
        <h3 className="text-sxl cursor-pointer" onClick={(e) => handleFilterCat(props.category) }>Category - {props.category}</h3>
      </div>
    </>
  );
};

export default Details;
