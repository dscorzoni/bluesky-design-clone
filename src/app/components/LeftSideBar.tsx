import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faAngleLeft,
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



const LeftSideBar: React.FunctionComponent = () => {
  return (
    <div className="bg-white p-4 w-[210px] flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <FontAwesomeIcon icon={faIdCardClip} size="xl" />
      </div>
      <ul className="text-lg flex flex-col w-full font-light">
        <a href="#" className="rounded-lg hover:bg-[#F1F3F5]"><li className="p-2 w-full my-1"><FontAwesomeIcon icon={faHome} size="lg" /><span className="ml-4">Home</span></li></a>
        <a href="#" className="rounded-lg hover:bg-[#F1F3F5]"><li className="p-2 my-1"><FontAwesomeIcon icon={faSearch} size="lg" /><span className="ml-4">Search</span></li></a>
        <a href="#" className="rounded-lg hover:bg-[#F1F3F5]"><li className="p-2 my-1"><FontAwesomeIcon icon={faBell} size="lg" /><span className="ml-4">Notifications</span></li></a>
        <a href="#" className="rounded-lg hover:bg-[#F1F3F5]"><li className="p-2 my-1"><FontAwesomeIcon icon={faComment} size="lg" /><span className="ml-4">Chat</span></li></a>
        <a href="#" className="rounded-lg hover:bg-[#F1F3F5]"><li className="p-2 my-1"><FontAwesomeIcon icon={faHashtag} size="lg" /><span className="ml-4">Feeds</span></li></a>
        <a href="#" className="rounded-lg hover:bg-[#F1F3F5]"><li className="p-2 my-1"><FontAwesomeIcon icon={faList} size="lg" /><span className="ml-4">Lists</span></li></a>
        <a href="#" className="rounded-lg hover:bg-[#F1F3F5]"><li className="p-2 my-1"><FontAwesomeIcon icon={faUser} size="lg" /><span className="ml-4">Profile</span></li></a>
        <a href="#" className="rounded-lg hover:bg-[#F1F3F5]"><li className="p-2 my-1"><FontAwesomeIcon icon={faGear} size="lg" /><span className="ml-4">Settings</span></li></a>
      </ul>
      <p className="mt-6"><Button><FontAwesomeIcon icon={faPenToSquare} size="lg" /><span className="px-2 font-normal">New Post</span></Button></p>
    </div>
  )
}

export default LeftSideBar;