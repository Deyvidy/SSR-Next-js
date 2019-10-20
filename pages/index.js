import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
import { useRouter } from 'next/router';


import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonThunks } from "../state/thunks/pokemonThunks";
import { pokemonsActions } from '../state/actions/PokemonActions'

import Layout from '../components/MyLayout.js'
import Lista from '../components/pokemon/lista'



export default function Index( { data, next, previous } ) {
    const state = useSelector( state => state)
    const  dispatch  = useDispatch();

    useEffect(()=>{
        // dispatch(pokemonThunks.getAll());
        dispatch( pokemonsActions.get( data ) )
    },[] )

   
    return (
        <Layout title={'My Blog'} description={'This is My blog'}>
            <h1>Pokemons</h1>
            { data ? (
                <ul> { data.map( pokemon => <Lista key={pokemon.name} poke={pokemon}/>) } </ul>
            ) : (
                <h1 className="loding">Carregando....</h1>
            ) } 
            <div className="paginacao">
                { previous ? <Link href={`/?offset=${previous}`}><a>Previous</a></Link> : null }
                <Link href={`/?offset=${next}`}><a>Next</a></Link>                
            </div>        

            <style jsx>{`
                h1 {
                    color: #fff;
                    font-size: 3rem;
                    text-align: center;
                }
                .loding  {
                    color: red;
                }
                ul {
                    list-style-type: none;
                    display: flex;
                    flex-direction: row;
                    flex-flow: wrap;
                }
                .paginacao {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .paginacao a {
                    margin: 0 15px;
                    text-decoration: none;
                    padding: 5px 30px;
                    border-radius: 50px;
                    background: #000;
                    color: #fff;
                } 
            `}</style>
        </Layout>
    )
}

Index.getInitialProps = async function( context ) {
    const url = context.query;       
    const baseUrl = url.offset || 'https://pokeapi.co/api/v2/pokemon';

    const response = await getAllPokemon(baseUrl)
    const result = await loadPokemon(response.results);  

    return {
        data: result,
        next: response.next ,
        previous: response.previous,
    };
};


function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}

const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon)
        return pokemonRecord
    }))
    return _pokemonData;
}

const splitUrl = ( url ) => {

}


