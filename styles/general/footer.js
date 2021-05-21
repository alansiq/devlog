import css from "styled-jsx/css";
import { colors } from '../colors';

export const footerStyles = css.global`
  .socials {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 16px;    
  }

  svg { 
    color: ${colors.gray};
    font-size: 1.4rem;
    transition: all 0.1s;
  }

  svg:hover {
    font-size: 1.6rem;
  }

  footer {
    max-width: 700px;
    margin: 0 auto;
    color: ${colors.gray};
    font-family: "Lato", sans-serif;
    font-size: 16px;
    font-style: italic;
    text-align: center;
  }

  footer p {
    border-top: 1px solid ${colors.l1};
    padding: 2rem 0;
    margin-bottom: 0;
  }

  footer a {
    font-weight: bold;
  }

  .footer-logo {
    width: 30px;
    margin-top: 10px;
  }
`;
