import Head from "next/head";
import st from '../../styles/AboutItem.module.scss'

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { comment: data },
  }
};

const AboutItem = ({comment}) => (
  <>
    <Head>
      <title>Contact page</title>
    </Head>
   <div className={st.center_item}>
    <p>Id: {comment.id}</p>
    <p>Email: {comment.email}</p>
    <p>Title: {comment.name}</p>
    <p>Body: {comment.body}</p>
   </div>
  </>
);

export default AboutItem;