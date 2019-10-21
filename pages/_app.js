import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { initStore } from "../state/store";
import  ProgressBar  from "../components/Default/ProgressBar";

import theme from '../layouts/theme';

class MyApp extends App {
   static async getInitialProps({ Component, ctx }) {
       const pageProps = Component.getInitialProps
           ? await Component.getInitialProps(ctx)
           : {};
            return { pageProps };
   }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
    }

   render() {
       const { Component, pageProps, store } = this.props;
       return (
           <>
               <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <ProgressBar />
                        <CssBaseline />
                        <Component {...pageProps} />
                   </ThemeProvider>
               </Provider>
           </>
       );
   }
}


export default withRedux(initStore)(MyApp);