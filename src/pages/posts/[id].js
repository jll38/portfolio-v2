import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const tailwindRenderer = {
    h1: (props) => <h1 as="h1" className='text-3xl text-bold my-5'{...props} />,
    h2: (props) => <h2 as="h2" className='text-2xl my-5'{...props} />,
    h3: (props) => <h3 as="h3" size="lg" my="5"{...props} />,
    h4: (props) => <h4 as="h4" size="md" my="5"{...props} />,
    h5: (props) => <h5 as="h5" size="sm" my="5"{...props} />,
    h6: (props) => <h6 as="h6" size="xs" my="5"{...props} />,
    p: (props) => <p {...props} />,
    ol: (props) => <ol pl="1.5rem" {...props} />,
    ul: (props) => <ul pl="1.5rem" {...props} />,
    li: (props) => <li {...props} />,
    // Add more custom renderers for other elements as needed
};

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className="text-3xl text-bold my-5">
                    {postData.title}
                </h1>
                <div>
                    <Date dateString={postData.date} />
                </div>
                <div maxW="1000px">
                    <ReactMarkdown
                        components={tailwindRenderer}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {postData.contentHtml}
                    </ReactMarkdown>
                </div>
            </article>
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}