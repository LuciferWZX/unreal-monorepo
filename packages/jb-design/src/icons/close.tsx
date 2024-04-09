import { SVGProps } from 'react';

export function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 13L13 3M13 13L3 3" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
