import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import { ThemeProvider } from "./context/AnotherContext";
import HomePage from "./pages/Home/HomePage";
import Sidebar from "./components/layout/Sidebar";
import Watch from "./pages/Watch/WatchPage";
import Search from "./pages/Search/SearchPage";
import { useLocation } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";

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
              <Route
                path="/watch/:id"
                element={
                  <ProtectedRoute>
                    <Watch />
                  </ProtectedRoute>
                }
              />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
