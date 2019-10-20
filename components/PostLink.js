import Link from 'next/link'

export default function PostLink ({ show })  {
    
    return (
        <li>
        <Link href="/posts/[id]" as={`/posts/${show.id}`}>
            <a>{show.name}</a>
        </Link>
        <style jsx>{`
            li {
            list-style: none;
            margin: 5px 0;
            }
    
            a {
            text-decoration: none;
            color: blue;
            font-family: 'Arial';
            }
    
            a:hover {
            opacity: 0.6;
            }
        `}</style>
        </li>
    )
}
  