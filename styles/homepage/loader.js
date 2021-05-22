import css from "styled-jsx/css";
import { colors } from "../colors";


export const loaderStyles = css.global`

    .loader-container {
        height: 800px;
        max-height: 100vh;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loader-container .loader-phrase {
        color: ${colors.gray};
        font-weight: 400;
        font-family: "Fira Code", monospace;

    }

    .loader-container .loader-phrase::before {
        content: "$";
    }

    .loader-container .loader-phrase::after {
        content: "_";
        animation: flash 1s linear infinite;
        color: ${colors.accent};
    }

    @keyframes flash {
        50% {
            opacity: 0;
        }
    }

`