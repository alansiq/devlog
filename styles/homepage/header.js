import css from "styled-jsx/css";
import { colors } from "../colors";


export const headerStyles = css.global`
  .home {
    text-align: center;
    max-width: 700px;
    margin: auto;
    border-bottom: 1px solid ${colors.l1};
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;

  }

  .blog-logo-container {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
  
  .blog-logo {
    display: inline-flex;
    margin: 0;
    padding: 0;

    position: relative;
    font-family: "Fira Code";
    font-weight: 400;

  }

  .blog-bash {
    content: '$ users/alansiq';
    font-family: "Fira Code";
    font-size: 70%;
    color: ${colors.grayDarker};
  }

  .blog-bash::after {
    content: "_";
    opacity: 1;
    animation: flash 1s linear infinite;
    color: ${colors.accent};
  }

  .blog-logo span {
    color: ${colors.accent};
  }

  .blog-avatar {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    margin: 1em auto;
    border: 6px solid ${colors.white};
  }

  .blog-title {
    margin-top: 3rem;
  }

  .blog-description {
    font-size: 18px;
    color: ${colors.gray};
    line-height: 30px;

    font-family: "Lato", sans-serif;
  }

  @keyframes flash {
        50% {
            opacity: 0;
        }
    }
`;
