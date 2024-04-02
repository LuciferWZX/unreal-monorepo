import { SVGProps } from 'react';

export function IndeterminateRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M7 13q-.425 0-.712-.288T6 12q0-.425.288-.712T7 11h10q.425 0 .713.288T18 12q0 .425-.288.713T17 13z"
      ></path>
    </svg>
  );
}
