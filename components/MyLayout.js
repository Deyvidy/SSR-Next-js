// import Header from './Header'
import Menu from './Default/Menu';
import Footer from './Default/Footer';
import Head from './Head'


export default function Layout(props) {
    return (
        <>
            <Head title={props.title} description={props.description} />
            <Menu />
                { props.children }           
            <Footer/>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700|Nunito:600');
                * {
                    margin: 0;
                    padding: 0;
                }
                html, body {
                    background: linear-gradient(to bottom right,#024,#402) !important;
                }

                #app {
                    font-family: Cinzel Decorative, sans-serif;
                }
            `}</style>
        </>
    )
}
