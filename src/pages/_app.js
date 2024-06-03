// pages/_app.js
import React from 'react'
import "@/styles/globals.css";

const PageLayout = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    );
};

export default PageLayout;
