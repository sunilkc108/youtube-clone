import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Watch from "./pages/Watch";
import { useLocation } from "react-router-dom";
import Scroll from "./components/watch/InfiniteScroll";
import Subscriptions from "./pages/Subscriptions";
import Library from "./pages/Library";
import Search from "./pages/Search";


const App = () => {
  const location = useLocation()
  const isWatchPage = location.pathname.startsWith("/watch")

  return (
    <>
    <Header />
    < div className = {`flex pt-4`
}>
  {!isWatchPage && <Sidebar />}
<main className={ `flex-1 ${!isWatchPage ? 'ml-60' : ''} p-4` }>
  <Routes>
  <Route path="/" element = {< Home />}> </Route>
    < Route path = "/scroll" element = {< Scroll />}> </Route>
      < Route path = "/subscriptions" element = {< Subscriptions />}> </Route>
        < Route path = "/library" element = {< Library />}> </Route>
          < Route path = "/watch/:id" element = {< Watch />}> </Route>
            < Route path = "/search" element = {< Search />}> </Route>
              </Routes>
              </main>
              </div>
              </>
  )
}

export default App




// Code before implementing Routes
// import Header from './components/Header'
// import Home from './components/Home'
// import Sidebar from './components/Sidebar'

// const App = () => {
//   return (
//     <div className= '' > 
//       <Header />
//       <div className='flex pt-14'>
//       <Sidebar />
//       <main className='flex-1 ml-60 p-4'>
//         <Home />
//       </main>
//       </div>
//     </div>
//   )
// }

// export default App