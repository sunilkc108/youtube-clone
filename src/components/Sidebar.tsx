// import { useState } from 'react'
import { MdOutlineCollections, MdOutlineHome, MdOutlinePlaylistPlay } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const navItems = [
  {
    label: 'Home', icon: <MdOutlineHome className='w-6 h-6' />, path:'/' },
  {
      label: 'Subscriptions', icon: <MdOutlinePlaylistPlay className='w-6 h-6' />, path:'/subscriptions' },
  { label: 'Library', icon: <MdOutlineCollections className='w-6 h-6' />, path:'/library' },
]

const Sidebar = () => {
  // const [activeItem, setActiveItem] = useState("Home")
  const location = useLocation()


  // const handleActive = (label: string) => {
  //   setActiveItem(label)
  // }

  return (
    <aside className= 'w-60 bg-white h-screen p-4 border-r-0 fixed top-14 left-0 overflow-y-auto hidden md:block' >
    <nav className='flex flex-col space-y-2' >
    {
      navItems.map(item => (
        <Link key= { item.label } to = { item.path }
          className = {`flex items-center space-x-4 px-3 py-2 rounded ${location.pathname === item.path ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'} text-left cursor-pointer`}
  // onClick = {() => handleActive(item.label)}
          >
  { item.icon }
  < span className = 'text-sm' > { item.label } </span>
    </Link>
        ))}
</nav>
  </aside>
  )
}

export default Sidebar