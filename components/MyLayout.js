import Header from './Header'
import Head from './Head'

const layoutStyle = {
  margin: 'auto',
  padding: 20,
  border: '1px solid #DDD',
  maxWidth: 780,
  minHeight: '50vh'
}

export default function Layout(props) {
    return (
        <div>
            <Head title={props.title} description={props.description} />
            <div style={layoutStyle}>
                <Header />
                { props.children }
            </div>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700|Nunito:600');
                html, body {
                    background: linear-gradient(to bottom right,#024,#402) !important;
                }

                #app {
                    font-family: Cinzel Decorative, sans-serif;
                }
            `}</style>
        </div>
    )
}
