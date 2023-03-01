export type buttonProps = {
    icon?: string;
    className?: string;
    style?: React.CSSProperties;
    text?: string;
    children?: React.ReactNode;
    loading?: boolean;
    block?:boolean
    iconPosition?: "left" | "right";
    type?: "primary" | "default" | "secondary" | "link";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };