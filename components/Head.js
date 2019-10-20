
import Head from 'next/head'

export default function Heads ( {title, description } ) {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name='description' content={description} />
        </Head>
    )
}