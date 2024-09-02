import React from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faSearch } from '@fortawesome/free-solid-svg-icons';

interface Props {
  placeholder: string
  name: string
}

const SearchBar: React.FC<Props> = ({ placeholder, name }) => {
  return (
    <div className="bg-[#F1F3F5] flex py-2 px-4 rounded-full font-roboto w-full">
      <FontAwesomeIcon icon={faSearch} size="lg" className="mr-3 text-gray-400" />
      <input type="text" placeholder={placeholder} name={name} id={name}
      className="font-roboto w-full bg-[#F1F3F5] font-light focus:outline-none"
      />
    </div>
  )
}

export default SearchBar;