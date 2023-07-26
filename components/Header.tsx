import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const user = false;

  return (
    <header className="mb-4 bg-primary-dark">
      <div className="flex items-center px-4">
        <nav>
          <ul className="flex flex-col lg:flex-row gap-2">
            <li>
              <Link className="block py-3" href="/">Home</Link>
            </li>
            <li>
              <Link className="block py-3" href="/">Home</Link>
            </li>
            <li>
              <Link className="block py-3" href="/">Home</Link>
            </li>
            <li>
              <Link className="block py-3" href="/">Home</Link>
            </li>
          </ul>
        </nav>
        <span className="ml-auto">
          {user ? (
            <>
              <span>Olá {user}</span>
              <small>sair</small>
            </>
          ) : (
            <Button label={'login'} isSquared={false}/>
          )}
        </span>
      </div>
    </header>
  );
}
