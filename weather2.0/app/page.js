
import Navbar from './components/navbar'
import Front from './components/front'

export default function Home() {
  return (
   <div className='bg-gradient-to-r from-[#1F6E8C] to-[#2E8A99] min-h-screen overflow-x-hidden'>
    <Navbar></Navbar>
    <Front></Front>
   </div>
  )
}
