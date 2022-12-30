//
import Home from "../pages/home/Home";
import Project from "../pages/project/Project";
import History from "../pages/history/History";
import Contact from "../pages/contact/Contact";

/*

pages

1 = home
2 = portfolio
3 = history
4 = contact

*/

export const pages = [
  {
    basenamePage: "home",
    component: Home,
  },
  {
    basenamePage: "project",
    component: Project,
  },
  {
    basenamePage: "history",
    component: History,
  },
  {
    basenamePage: "contact",
    component: Contact,
  },
];
