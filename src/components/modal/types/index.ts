export type modalProps = {
  open:boolean,
  closabel?:boolean
  onCancel?: () => void
  headerTitle?:string
  footer?: null | boolean | React.ReactNode[]
  children?:React.ReactNode
  };