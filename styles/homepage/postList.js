import css from "styled-jsx/css";
import { colors } from "../colors";

export const postListStyles = css.global`

  .blog-placeholder {
    text-align: center !important;
    margin-bottom: 3rem;
  }

  .blog-main {
    max-width: 700px;
    margin: auto;
  }

  .blog-post {
    margin-bottom: 3rem;
  }

  .blog-post h2 {
    margin: 0;
  }

  .blog-post-meta {
    color: ${colors.grayDarker};
    font-family: "Lato", sans-serif;
    margin-bottom: 8px;
  }

  @media (max-width: 767px) {
    .blog-post-meta,
    .blog-post-meta {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    .blog-post-meta {
      font-size: 16px;
    }
  }
`;
