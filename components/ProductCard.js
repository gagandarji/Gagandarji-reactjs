import Link from "next/link";

export default function ProductCard(props) {
  return (
    <>
      {/* // {products.filter(prod => prod.name.toLowerCase().includes(props.search.toLowerCase()) && prod.category.toLowerCase().includes(props.filterCat.toLowerCase())).map(product => ( */}
      <Link href={"/products/"+props.to}>
      <div className="group relative cursor-pointer">
        <div className="w-full h-60 min-h-50 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xxl overflow-hidden group-hover:opacity-75 lg:h-50 lg:aspect-none">
          <img
            src={props.avatar}
            alt={props.name}
            className="productimage w-full h-full object-center object-contain  lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-3 flex justify-between">
          <div className="w-full">
            <h3 className="text-xl font-medium px-2 text-gray-900">
              {props.name.length > 15
                ? `${props.name.substr(0, 15)}...`
                : props.name}
            </h3>
            <p className="text-xl font-medium text-gray-900 text-center">
              $ {props.price}
            </p>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}
