import Link from 'next/link'

export default function Fotos ({ show })  {
    // console.log(show)
    return (
        <li>
            {/* <Link href="/posts/[id]" as={`/posts/${show.id}`}>
            </Link> */}
                <span>{show.name}</span>
                <img src={show.sprites.front_default} alt={show.name}></img>
            <style jsx>{`
                li {
                    list-style: none;
                    margin: 15px;
                    display: flex;
                    flex-direction: column-reverse;
                    max-width: 200px;
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
  