export type modalProps = {
  open:boolean
  width?:string | number
  closabel?:boolean
  onCancel?: () => void
  headerTitle?:string
  footer?: null | boolean | React.ReactNode[]
  children?:React.ReactNode
  };