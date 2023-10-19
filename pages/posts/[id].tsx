import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from "querystring";

//ts
type PostProps = {
  id: string
}
//ts
const Post: NextPage<PostProps> = (props) => {
  const {id} = props;
  const router = useRouter();

  if(router.isFallback) {
    return <div>Loding...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
        <p>{`/posts/${id}에 대응하는 페이지입니다.`}</p>
      </main>
    </div>
  )
}

//ts
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ]

  return { paths, fallback: false}
}

//ts
interface PostParams extends ParsedUrlQuery {
  id: string
}

//ts
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
  return {
    props: {
      id: context.params!['id'],
    },
  }
}

export default Post