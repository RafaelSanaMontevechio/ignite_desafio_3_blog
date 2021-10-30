/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { FiUser } from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';
import { getPrismicClient } from '../services/prismic';

import LoadMoreButton from '../components/LoadMoreButton';

import commonStyles from '../styles/common.module.scss';

import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/posts/slug">
            <a>
              <strong>Como utilizar hooks</strong>
              <p>
                Nesse arquivo você deve configurar a importação da fonte Inter
                do Google Fonts.
              </p>
              <div>
                <span>
                  <FiCalendar /> 19 Abr 2020
                </span>
                <span>
                  <FiUser /> Rafael
                </span>
              </div>
            </a>
          </Link>
          {/* {posts.map(post => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))} */}
        </div>
      </main>

      {/* <LoadMoreButton
        loadMore={() => {
          console.log('more posts');
        }}
      /> */}
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
