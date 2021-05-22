import React, { useEffect, useState } from "react";
import Head from "next/head";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-reactjs";

// Project components & functions
import DefaultLayout from "layouts";
import { Header, PostList, SetupRepo, Loader } from "components/home";
import { Client } from "utils/prismicHelpers";

/**
 * Homepage component
 **/


const Home = ({ doc, posts }) => {
  const [loadingState, setLoadingState] = useState(true);

  var hasLoaded = false;
  const splashScreenDuration = 3000;

  if (typeof window !== "undefined") {
    hasLoaded = sessionStorage.getItem('loader');
  }

  useEffect(() => {
    const timeout = setTimeout( () => {
      setLoadingState(false);
      sessionStorage.setItem('loader', 'true')
      clearTimeout(timeout);
      
      }
      , splashScreenDuration + 500)

  }, [loadingState])

  if (loadingState && !hasLoaded) {
    return <Loader text="cd alansiqueira/users" maxTime={splashScreenDuration} />
  }


  if (doc && doc.data) {
    return (
      <DefaultLayout>
        <Head>
          <title>{RichText.asText(doc.data.headline)}</title>
        </Head>
        <Header
          image={doc.data.image}
          headline={doc.data.headline}
          description={doc.data.description}
        />
        <PostList posts={posts} />
      </DefaultLayout>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle("blog_home", ref ? { ref } : null) || {}

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"), {
    orderings: "[my.post.date desc]",
    ...(ref ? { ref } : null)
  },
  )

  return {
    props: {
      doc,
      posts: posts ? posts.results : [],
      preview
    }
  }
}

export default Home;
