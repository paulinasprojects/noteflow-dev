
interface MainSectionProps {
  children: React.ReactNode
}

export const MainSection = ({ children }: MainSectionProps) => {
  return (
    <main>
      {children}
    </main>
  )
}
