import { SVGProps } from 'react';

export function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 11.5L9.5 8L6 4.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
export default ChevronRight;
