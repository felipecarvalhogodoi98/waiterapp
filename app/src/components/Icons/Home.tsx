import { SvgXml } from "react-native-svg";

interface HomeProps {
  color?: string;
}

export function Home({ color }: HomeProps) {
  const markup = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd" d="M17.0283 5.98621L11.2683 1.50589C10.2286 0.696606 8.77231 0.696606 7.73167 1.50589L1.97167 5.98621C1.26991 6.53245 0.859985 7.37149 0.859985 8.25949V15.2992C0.859985 16.8899 2.14927 18.1792 3.73999 18.1792H15.26C16.8507 18.1792 18.14 16.8899 18.14 15.2992V8.25949C18.14 7.37149 17.7301 6.53245 17.0283 5.98621Z"
      stroke="${color ? color : "#666"}"
      stroke-width="1.5"
    />
  </svg>`;

  return <SvgXml xml={markup} />;
}
