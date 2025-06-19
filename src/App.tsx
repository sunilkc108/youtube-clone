import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import { ThemeProvider } from "./context/AnotherContext";
import HomePage from "./pages/HomePage/HomePage";
import Sidebar from "./components/layout/Sidebar";
import Watch from "./pages/Watch/WatchPage";
import Search from "./pages/SearchPage/SearchPage";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isWatchPage = location.pathname.includes("/watch");
  return (
    <>
      <ThemeProvider>
        <Header />
        <div className={`flex pt-4 ${!isWatchPage ? "pl-60" : ""}`}>
          {!isWatchPage && <Sidebar />}
          <main className={`flex-1 p-4`}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/watch/:id" element={<Watch />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
