import Aos from "@/components/shared/Aos";
const layout = ({children}: { children:React.ReactNode}) => {
  return (
    <main className='root'>
      <Aos />
      {children}

      

    </main>
  )
}

export default layout