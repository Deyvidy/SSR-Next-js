import Link from 'next/link'
import { useState } from 'react'

export default function Lista ( {poke} )  {
    const [ loading, setLoading ] = useState(false)
  
    return (
        <li>
            <div className="container-pokemon">
                <div className="container-imagem">
                    <img src={poke.sprites.front_default} alt={poke.name} onError={ () => setLoading(false) } onLoad={ () => setLoading(true) }/>
                    {!loading ? (<img className="loading-img" src="./static/img/loading.gif" alt={poke.name}/>) :  null}  
                    <p>{poke.name}</p>
                </div>
                <hr />
                <div className="container-detalhes">
                    <ul>
                        {poke.stats.map( stat => (<li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li> ))}
                    </ul>
                </div>
                <div className="container-footer">
                    {poke.types.map( type => (<span key={type.type.name}>{type.type.name}</span> ))}
                </div>
            </div>
            <style jsx>{`
               .container-pokemon {
                    width: 200px;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid  #ffdd56;
                    border-radius: 1rem;
                    position: relative;
                    height: 15rem;
                    height: auto;
                    margin: 45px 15px;
               }

               .container-imagem {
                    height: 5rem;
                }

               .container-imagem img {
                    position: absolute;
                    border: 1px solid  #ffdd56;
                    border-radius: 100%;
                    top: -3rem;
                    left: 3rem;
                    background: #ffff;
                }

                .loading-img {
                    width: 50%;
                }

                .container-pokemon p {
                    margin-top: 3.5rem;
                    font-size: 24px;
                    font-weight: 700;
                    text-transform: capitalize;
                    text-align: center;
                    color: #fff
                }

                .container-pokemon span {
                    text-align: center;
                    background: #ffdd57;
                    padding: 2px 10px;
                    border-radius: 50px;
                    color: #4a4a4a;
                    margin: 5px 0;
                }

                hr {
                    background: linear-gradient(to right,#a86e3c,#f5ae67);
                    width: 70%;
                    height: 2px;
                    border: none;
                    border-radius: 30%;
                    margin: 10px auto;
                }

                ul {
                    list-style-type: none;
                    padding: 0 2rem;
                    color: #fff;
                    text-transform: capitalize;
                }

                .container-footer {
                    padding: .5rem 2rem;
                    border-top: 1px solid #d3d3d3;
                    margin-top: 15px;
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                }

            `}</style>
        </li>
    )
}
  