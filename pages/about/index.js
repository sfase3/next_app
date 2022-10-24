import Head from "next/head";
import Link from "next/link";
import st from '../../styles/AboutItem.module.scss'

export const getStaticProps = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();
    
      if (!data) {
        return {
          notFound: true,
        }
      }
    
      return {
        props: { about: data },
      }
    };

    const About = ({ about }) => { 
      return (
        <>
          <Head>
            <title>about</title>
          </Head>
          <h3>Static Site Generators for comments</h3>
          <ul className={st.center_ul}>
            {about && about.map(({ id,  email }) => (
              <li key={id}>
                {id}:&nbsp; 
                <Link href={`/about/${id}`}>
                 {email}
                </Link>
              </li>
            ))}
          </ul>
        </>
      );
    };
    
    export default About;