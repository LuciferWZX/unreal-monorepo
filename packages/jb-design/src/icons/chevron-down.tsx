import { SVGProps } from 'react';

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.5 6.25L8 9.75L4.5 6.25" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
export default ChevronDown;
