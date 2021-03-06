import fetch from 'isomorphic-unfetch';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from "next/link";
// import Menu from '../components/Default/Menu';
// import Footer from '../components/Default/Footer';

import Layout from '../components/MyLayout.js'

const useStyles = makeStyles( ( theme ) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(1100 + theme.spacing(3, 2))]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        marginBottom: theme.spacing(4),
    },
    toolbarTitle: {
        flex: 1,
    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing(6)}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    cardGrid: {
        margin: theme.spacing(3, 0)
    },
    card: {
        display: 'flex',
        marginBottom: theme.spacing(3)
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}))

export default function Blog( { posts } ) {
    const classes = useStyles();

    return (
        <>
            <Layout title={'My Blog'} description={'This is My blog'}>
                <div className={classes.layout}>
                    <Toolbar className={classes.toolbarMain}>
                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                            className={classes.toolbarTitle}
                        >
                        Awesome Blog
                        </Typography>
                    </Toolbar>


                    <main className={classes.content}>
                        <div className={classes.toolbar} />               
                        <Grid container spacing={2} className={classes.cardGrid}>
                            {posts ? (<>{posts.map(post => (
                                <Grid item key={post.title} xs={12} md={6}>                            
                                    <Card className={classes.card}>
                                        <div className={classes.cardDetails}>
                                            <CardContent>
                                                <Typography component="h2" variant="h5">
                                                    {post.title}
                                                </Typography>
                                                <Link href={{pathname: '/post', query: {postId: post.id}}}>
                                                    <a>
                                                        <Typography variant="subtitle1" color="primary">Continuar lendo...</Typography>
                                                    </a>
                                                </Link>
                                            </CardContent>
                                        </div>
                                        <Hidden xsDown>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                                title="Image title"
                                            />
                                        </Hidden>
                                    </Card>                            
                                </Grid>
                            ))}</>) : null}
                            
                        </Grid>

                    </main>
                </div>
            </Layout>         
        </>
    );
}


Blog.getInitialProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.ok) {
      const posts = await response.json();
    //   console.log(posts)
      return { posts };
    }
  
    return [];
};
