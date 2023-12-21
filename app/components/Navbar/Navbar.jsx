import Link from 'next/link';
import './navbar.css';


export default function NavBar() {
    return (<nav>
        <ul>
           <li >
            <Link href="/" className='link'>
            HOME</Link>
          </li>
          <li>
            <Link href="/about" className='link'>
            ABOUT</Link>
          </li>
          <li>
            <Link href="/space_pictures" className='link'>
            PICTURES</Link>
          </li>
        </ul>
      </nav>)
}
  