import { orbitron } from '@/app/font.jsx';
import './heading.css';

export default function Heading({children}) {
    return (<h1 className={`headline ${orbitron.className}`}>{children}</h1>)
}
  