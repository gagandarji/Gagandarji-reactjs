import Link from "next/link";

export default function ProductCard(props) {
  const products = props.prodlist; 
  return (
    <>
      {/* {products.map((product) => ( ) )} */}

      {products.filter(prod => prod.name.includes(props.search) && prod.category.includes(props.filterCat)).map(product => (
          <Link key={product.id} href={"products/"+product.id}>
          <div key={product.id} className="group relative cursor-pointer">
            <div className="w-full h-60 min-h-50 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xxl overflow-hidden group-hover:opacity-75 lg:h-50 lg:aspect-none">
              <img
                src={product.avatar}
                alt={product.name}
                className="productimage w-full h-full object-center object-contain  lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-3 flex justify-between">
              <div className="w-full">
                <h3 className="text-xl font-medium px-2 text-gray-900">
                  {product.name.length > 15
                    ? `${product.name.substr(0, 15)}...`
                    : product.name}
                </h3>
                 
                <p className="text-xl font-medium text-gray-900 text-center">
                 {product.category}
                </p>
                 
                <p className="text-xl font-medium text-gray-900 text-center">
                  $ {product.price}
                </p>
              </div>
            </div>
          </div>
         </Link>
      ))}
    </>
  );
}
