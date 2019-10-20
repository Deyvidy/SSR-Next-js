import Link from 'next/link'
import Style from '../assets/Style';

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={Style}>Home</a>
      </Link>
      <Link href="/about">
        <a style={Style}>About</a>
      </Link>
    </div>
  )
}
