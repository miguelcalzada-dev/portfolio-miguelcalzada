import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 18, children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Icon>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4v16" />
      <path d="m6 14 6 6 6-6" />
    </Icon>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 12H4" />
      <path d="m10 6-6 6 6 6" />
    </Icon>
  );
}

export function Close(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m5 5 14 14" />
      <path d="M19 5 5 19" />
    </Icon>
  );
}

export function Menu(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </Icon>
  );
}

export function Send(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  );
}

export function Chat(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 9h8" />
      <path d="M8 12h5" />
    </Icon>
  );
}

export function Plus(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </Icon>
  );
}

export function External(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 5h5v5" />
      <path d="m19 5-8 8" />
      <path d="M19 14v5H5V5h5" />
    </Icon>
  );
}

export function BrandMark({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" fill="currentColor" />
      <path d="M9 23V9h4.2l2.8 6.2L18.8 9H23v14h-3.5V15.1L16.8 21h-1.6L12.5 15.1V23H9Z" fill="var(--mark-ink, #E9E5DA)" />
      <circle cx="24.5" cy="23" r="1.5" fill="var(--cobalt)" />
    </svg>
  );
}
