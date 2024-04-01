import { SVGProps } from 'react';

export function ExpandOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M17 2a1 1 0 1 0 0 2h1.586l-4.293 4.293a1 1 0 0 0 1.414 1.414L20 5.414V7a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1zM4 18.586V17a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2H5.414l4.293-4.293a1 1 0 0 0-1.414-1.414z"
      ></path>
    </svg>
  );
}
