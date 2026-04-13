interface Props {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <div className="border border-black p-2">
      {children}
    </div>
  )
}

export { Button }
