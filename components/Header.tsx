import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  const user = false;

  return (
    <header className="mb-4 bg-primary">
      <div className="space-between flex items-center bg-primary-light px-4 py-3">
        <Link href="/">
          <Image
            src="https://www.listerine.com/sites/listerine_us_2/themes/listerine_bootstrap_us/logo.png"
            alt="Listerine White Logo"
            width={166}
            height={29}
          />
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <form className="inline-flex gap-2 border-b-2 border-white py-2">
            <input
              type="text"
              className="bg-transparent text-lg text-white"
              placeholder="Search"
            />
            <MagnifyingGlassIcon width={24} className="text-white" />
          </form>
          <Button squared>
            <UserCircleIcon width={32}/>
          </Button>
        </div>
      </div>
      <div className="flex items-center px-4 text-gray-800">
        <nav>
          <ul className="flex flex-col items-center gap-5 py-2 lg:flex-row">
            <li>
              <Link
                className="block py-3 font-semibold text-white"
                href="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link className="block py-3 font-semibold text-white" href="#">
                About Listerine
              </Link>
            </li>
            <li className="ml-auto">
              <Button>
                <ShoppingCartIcon width={24} />
                <span className="whitespace-nowrap">WHERE TO BUY</span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
