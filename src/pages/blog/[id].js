import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Navbar from "../../components/Navbar";
import SocialBox from "../../components/socialbox";
import Link from "next/link";
import Image from "next/image";

const tailwindRenderer = {
  h1: (props) => (
    <h1
      as="h1"
      className="text-3xl text-bold my-5 text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700 font-bold"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      as="h2"
      className="text-2xl my-5 text-transparent bg-clip-text bg-gradient-to-t from-pink-500 to-yellow-400 font-bold"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      as="h3"
      className="text-xl my-5 text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-400 font-bold"
      {...props}
    />
  ),
  h4: (props) => <h4 as="h4" size="md" my="5" {...props} />,
  h5: (props) => <h5 as="h5" size="sm" my="5" {...props} />,
  h6: (props) => <h6 as="h6" size="xs" my="5" {...props} />,
  p: (props) => <p {...props} />,
  ol: (props) => <ol pl="1.5rem" {...props} />,
  ul: (props) => <ul pl="1.5rem" {...props} />,
  li: (props) => <li {...props} />,
  img: (props) => (
    <Image
      className="w-full h-auto my-5"
      width="1000"
      height="1000"
      {...props}
    />
  ),
  strong: (props) => (
    <span
      className="text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700 font-bold"
      {...props}
    />
  ),
  // Add more custom renderers for other elements as needed
};

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navbar />
      <SocialBox />
      <div className="container mx-auto p-10 md:p-0">
        <article className="my-10 md:mx-5">
          <div className="xl:mx-auto xl:w-1/2">
            <div name="return-nav">
              <Link href="/blog">&#8592; Go Back</Link>
            </div>
            <div
              name="Article Header"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-red-700 xl:text-center"
            >
              <h1 className="text-4xl ">{postData.title}</h1>
              <div>
                <Date dateString={postData.date} />
              </div>
            </div>
            <div className="my-5 px-5">
              <ReactMarkdown
                components={tailwindRenderer}
                rehypePlugins={[rehypeRaw]}
              >
                {postData.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
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
