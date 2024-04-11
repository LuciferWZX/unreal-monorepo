import { SVGProps } from 'react';

export function MoreHorizontal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="3" cy="8" r="1" transform="rotate(-90 3 8)" fill="currentColor" />
      <circle cx="8" cy="8" r="1" transform="rotate(-90 8 8)" fill="currentColor" />
      <circle cx="13" cy="8" r="1" transform="rotate(-90 13 8)" fill="currentColor" />
    </svg>
  );
}
export default MoreHorizontal;
