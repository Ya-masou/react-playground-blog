import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { useRouter } from "next/dist/client/router";

// type Params { id: string }
// type Path { params: Params }

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths, // Path[]
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post(props) {
  const { postData } = props;
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
