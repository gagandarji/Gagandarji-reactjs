import Link from "next/link"

const Header = () => {
  return (

    <div className="container mx-auto px-4 mt-4 mb-3">
        <div className="py-2 px-3 header font-medium flex flex-row w-full justify-between shadow-lg">
            <Link href="/"><h3 className="px-3">UPayments Store</h3></Link>
            <h3  className="px-3">Register</h3>
        </div>
    </div>
  )
}

export default Header