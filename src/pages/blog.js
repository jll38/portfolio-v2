import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Navbar from '../components/Navbar'
import SocialBox from '../components/socialbox'
export default function Blog({ allPostsData }) {
    return (
        <>
            <Head>
                <title>My Blog</title>
            </Head>
            <div className="flex min-h-screen flex-col px-16 md:px-48 content-center justify-center items-center">
                <Navbar />
                <SocialBox />
                <section className='flex flex-col'>
                    <Link href='/'>&#8592; Go Home</Link>
                    <h1 className='text-4xl text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700 font-bold mb-2 divider'>Blog</h1>
                    <ul>
                        {allPostsData.map(({ id, date, title }) => (
                            <li key={id}>
                                <Link href={`/posts/${id}`} className='text-xl text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-yellow-500 font-bold'>{title}</Link>
                                <br />
                                <small>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}