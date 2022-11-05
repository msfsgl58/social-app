import React from "react";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";

export const LeftMenuData = [
  {
    title: "Ana Sayfa",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Ara",
    path: "/",
    icon: <AiIcons.AiOutlineSearch />,
    cName: "nav-text",
  },
  {
    title: "Oluştur",
    path: "/",
    icon: <AiIcons.AiOutlinePlusCircle />,
    cName: "nav-text",
  },
  {
    title: "Profil",
    path: "/profil",
    icon: <AiIcons.AiOutlineProfile />,
    cName: "nav-text",
  },
  {
    title: "Çıkış Yap",
    path: "/Login",
    icon: <ImIcons.ImExit />,
    cName: "nav-text",
  },
];
