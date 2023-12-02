import { createContext, useEffect, useState } from "react";

export const siteContext = createContext({});

const fetchCurrentPageName = () => {
  const page = localStorage.getItem("page");
  if (!page) {
    return "Home";
  }
  return page;
};

const fetchGlobalCount = () => {
  const globalCount = localStorage.getItem("globalCount");
  if (!globalCount) {
    return 1;
  }
  return parseInt(globalCount, 10);
};

export const SiteContextProvider = ({ children }) => {
  const currentPage = fetchCurrentPageName();
  const globalCount = fetchGlobalCount();

  const [user, setUser] = useState("John Smith");
  const [navLinks, setNavLinks] = useState([
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Login", link: "/login" },
  ]);

  const [count, setCount] = useState(globalCount);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    localStorage.setItem("globalCount", count.toString());
  }, [count]);

  return (
    <siteContext.Provider
      value={{
        user,
        setUser,
        navLinks,
        setNavLinks,
        count,
        setCount,
        page,
        setPage,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
