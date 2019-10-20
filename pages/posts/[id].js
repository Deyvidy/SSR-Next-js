import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown'
import Layout from '../../components/MyLayout.js'

export default function Post (props) {
    const router = useRouter()
    return (
        <Layout title={props.show.name} description={props.show.name}>
            <h1>{router.query.id}</h1>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
            <img src={props.show.image.medium} alt={props.show.name}/>
        </Layout>
    )
}

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();  
    return { show };
};
  

