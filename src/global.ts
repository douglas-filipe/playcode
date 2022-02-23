import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: 'Poppins', sans-serif;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body{
        -webkit-tap-highlight-color: transparent;
        background: #1d1c2a;
        color: white;
    }

    :root{
        --backgroud-color: #1D1C29;
        --primary-dark:    #090817;
        --second-dark:     #222432;
        --primary-light:   #FFFFFF;
        --second-light:    #535A6B;
        --contrast:        #30B2A8;
        --hover:           #2D2F3D;


    }

`;
