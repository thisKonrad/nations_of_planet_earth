import Link from 'next/link';
import Heading from "../Heading/Heading";
import './navbar.css';


export default function NavBar() {
    return (<nav>
        <Heading>Nations Of Planet Earth</Heading>
        <ul>
           <li >
            <Link href="/" className='link'>
            HOME</Link>
          </li>
         {/*  <li>
            <Link href="/maps" className='link'>
            Maps</Link>
          </li> */}
          <li>
            <Link href="/about" className='link'>
            About</Link>
          </li>
        </ul>
      </nav>)
}
  