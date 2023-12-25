import Link from 'next/link';
import Heading from "../Heading/Heading";
import './navbar.css';


export default function NavBar({children}) {


    return (<nav>
        <Heading>Nations Of Planet Earth</Heading>
        <ul>
           <li >
            <Link href="/" className='link'>
            Home
            </Link>
          </li>
          <li>
            <Link href="/about" className='link'>
            About</Link>
          </li>
        </ul>
        <div>
          {children}
        </div>
      </nav>)
}
  