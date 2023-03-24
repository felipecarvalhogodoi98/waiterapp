import { SvgXml } from "react-native-svg";

interface ProfileProps {
  color?: string;
}

export function Profile({ color }: ProfileProps) {
  const markup = `<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6 6.40002C13.8 7.60002 13.8 9.50002 12.6 10.6C11.4 11.7 9.49999 11.8 8.39999 10.6C7.29999 9.40002 7.19999 7.50002 8.39999 6.40002C9.59999 5.30002 11.4 5.20002 12.6 6.40002M4.39999 17C5.99999 15.5 8.09999 14.5 10.5 14.5C12.8 14.5 15 15.4 16.6 17M2.49997 14C1.89997 12.8 1.49997 11.4 1.49997 10C1.49997 5 5.49997 1 10.5 1C15.5 1 19.5 5 19.5 10C19.5 11.4 19.1 12.8 18.5 14"
      stroke="${color ? color : "#666"}"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`;

  return <SvgXml xml={markup} />;
}
