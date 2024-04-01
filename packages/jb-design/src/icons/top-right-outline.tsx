import { SVGProps } from 'react';

export function ArrowTopRightOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.646 11.354a.5.5 0 0 1 0-.707L10.293 4H6a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-1 0V4.707l-6.646 6.647a.5.5 0 0 1-.708 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
