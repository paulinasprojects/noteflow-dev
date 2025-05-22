
interface Props {
  children: React.ReactNode
}

const Homepage = ({children}: Props) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Homepage