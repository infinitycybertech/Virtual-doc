import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body {
    overflow-x: hidden;
    scroll-behavior: smooth;
    background-color: #f9f9f9;
    color: #333;
    width: 100%;
  }

  #root {
    width: 100%;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Mobile-specific fixes */
  @media (max-width: 768px) {
    .container, 
    div[class*="Container"],
    section {
      max-width: 100vw;
      overflow-x: hidden;
    }
    
    /* Ensure all text is centered on mobile */
    h1, h2, h3, h4, h5, h6 {
      text-align: center !important;
    }
    
    /* Center content blocks */
    p {
      text-align: center !important;
      margin-left: auto;
      margin-right: auto;
    }
    
    /* Ensure grids stack properly */
    div[style*="grid-template-columns"] {
      grid-template-columns: 1fr !important;
    }
  }

  /* Extra small mobile devices */
  @media (max-width: 576px) {
    body {
      font-size: 14px;
    }
  }

  :root {
    --primary: #1E88E5;
    --primary-dark: #1565C0;
    --secondary: #26C6DA;
    --accent: #00BFA5;
    --text-primary: #333333;
    --text-secondary: #666666;
    --background: #F9F9F9;
    --white: #FFFFFF;
    --error: #F44336;
    --success: #4CAF50;
    --warning: #FFC107;
    --border-radius: 8px;
    --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export default GlobalStyle;
