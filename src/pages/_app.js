// pages/_app.js
import React from 'react'
import "@/styles/globals.css";
import Layout from '@/app/layout';

const PageLayout = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default PageLayout;
