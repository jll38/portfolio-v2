import socialstyle from '../styles/socialbox.module.css';

import Link from 'next/link';
import Head from 'next/head';
export default function SocialBox() {
    return (
        <>
            <Head>
                <script defer src="https://kit.fontawesome.com/a7908c27f8.js" crossorigin="anonymous"></script>
            </Head>
            <div className={`${socialstyle.container}`}>
            <a href='https://www.linkedin.com/in/julianllechner/' target={'_blank'}><i className="fab fa-linkedin fa-2xl text-pink-600 mb-4"></i></a>
                <br/>
                <a href='https://github.com/jll38' target={'_blank'}><i className="fab fa-github fa-2xl text-pink-600"></i></a>
                <div className={`${socialstyle.divider}`}></div>
            </div>

        </>
    );
}