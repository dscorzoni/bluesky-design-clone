import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faHome,
  faSearch,
  faBell,
  faComment,
  faHashtag,
  faList,
  faUser,
  faGear,
  faIdCardClip,
  faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const menuItems = [
  {
    icon: faHome,
    text: "Home",
    link: "#"
  },
  {
    icon: faSearch,
    text: "Search",
    link: "#"
  },
  {
    icon: faBell,
    text: "Notifications",
    link: "#"
  },
  {
    icon: faComment,
    text: "Chat",
    link: "#"
  },
  {
    icon: faHashtag,
    text: "Feed",
    link: "#"
  },
  {
    icon: faList,
    text: "Lists",
    link: "#"
  },
  {
    icon: faUser,
    text: "Profile",
    link: "#"
  },
  {
    icon: faGear,
    text: "Settings",
    link: "#"
  }
]

const LeftSideBar: React.FunctionComponent = () => {
  return (
    <div className="bg-white p-4 w-[210px] flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <FontAwesomeIcon icon={faIdCardClip} size="xl" />
      </div>
      <ul className="text-lg flex flex-col w-full font-light">
        {menuItems.map((item) => {
          return (
            <a href={item.link} key={item.text} className="rounded-lg hover:bg-[#F1F3F5]">
              <li className="p-2 w-full my-1"><FontAwesomeIcon icon={item.icon} size="lg" /><span className="ml-4">{item.text}</span></li>
            </a>
          )
        })}
      </ul>
      <p className="mt-6"><Button><FontAwesomeIcon icon={faPenToSquare} size="lg" /><span className="px-2 font-normal">New Post</span></Button></p>
    </div>
  )
}

export default LeftSideBar;