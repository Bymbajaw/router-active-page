import {
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  NavLink,
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  const location = useLocation();
  const { pathname } = location;

  // /home
  const splitLocation = pathname.split("/");
  return (
    // <div className="container">
    //   <header>
    //     <nav className="bg-liht navbar navbar-expand-lg">
    //       <ul className="navbar-nav  ">
    //         <li className={splitLocation[1] === "home" ? "active" : ""}>
    //           <Link className="nav-link" to="/home">
    //             Home
    //           </Link>
    //         </li>
    //         <li className={splitLocation[1] === "about" ? "active" : ""}>
    //           <Link className="nav-link" to="/about">
    //             About
    //           </Link>
    //         </li>
    //         <li className={splitLocation[1] === "contact" ? "active" : ""}>
    //           <Link className="nav-link" to="/contact">
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //       <ul className="navbar-nav  ">
    //         <li className="nav-item">
    //           <NavLink
    //             className={({ isActive }) => (isActive ? "active" : "")}
    //             to="/home"
    //           >
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             className={({ isActive }) => (isActive ? "active" : "")}
    //             to="/about"
    //           >
    //             About
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             className={({ isActive }) => (isActive ? "active" : "")}
    //             to="/contact"
    //           >
    //             Contact
    //           </NavLink>
    //         </li>
    //       </ul>
    //       <Outlet />
    //     </nav>
    //   </header>
    //   <Routes>
    //     <Route exact path="/home/*" element={<Home />}>
    //       {/* <Route path="home" element={<HTMLhome />} />
    //       <Route path="introduction" element={<HTMLintroduction />} />
    //       <Route path="editors" element={<HTMLeditors />} />
    //       <Route path="basic" element={<HTMLbasic />} />
    //       <Route path="elements" element={<HTMLelements />} /> */}
    //     </Route>
    //     <Route path="/about/*" element={<About />}>
    //       {/* <Route path="home" element={<HTMLhome />} />
    //       <Route path="introduction" element={<HTMLintroduction />} />
    //       <Route path="editors" element={<HTMLeditors />} />
    //       <Route path="basic" element={<HTMLbasic />} />
    //       <Route path="elements" element={<HTMLelements />} /> */}
    //     </Route>
    //     <Route path="/contact/*" element={<Contact />}>
    //       {/* <Route path="home" element={<HTMLhome />} />
    //       <Route path="introduction" element={<HTMLintroduction />} />
    //       <Route path="editors" element={<HTMLeditors />} />
    //       <Route path="basic" element={<HTMLbasic />} />
    //       <Route path="elements" element={<HTMLelements />} /> */}
    //     </Route>
    //   </Routes>
    // </div>

    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!user && <ImageSection />}
              <Main user={user} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/newsdcards/:id" element={<NewsCards />} />
      </Routes>
    </div>
  );
}

export default App;
