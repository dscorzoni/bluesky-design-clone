import React from "react";
import SearchBar from "./SearchBar";

const linksList = [
  {
    "textDisplay": "Following",
    "link": "/following"
  },
  {
    "textDisplay": "Discover",
    "link": "#"
  },
  {
    "textDisplay": "Popular With Friends",
    "link": "#"
  },
  {
    "textDisplay": "Brasil Supercluster",
    "link": "#"
  },
  {
    "textDisplay": "GameDev",
    "link": "#"
  }
]

const footerLinks = [
  {
    "textDisplay": "Feedback",
    "link": "#"
  },
  {
    "textDisplay": "Privacy",
    "link": "#"
  },
  {
    "textDisplay": "Teams",
    "link": "#"
  },
  {
    "textDisplay": "Help",
    "link": "#"
  },
]

const RightSideBar: React.FunctionComponent = () => {
  return (
    <div className="bg-white p-4 w-[325px] flex flex-col h-full">

      <SearchBar name="searchbar" placeholder="Search" />

      <div className="flex flex-col text-md text-gray-600 font-light p-2 py-4 border-t-[1px] border-b-[1px] mt-6">
        {linksList.map((link) => {
          return(
            <a href={link.link} key={link.textDisplay}
            className="py-1 hover:underline"
            >{link.textDisplay}</a>
          )
        })}
        <a href="#" className="py-1 hover:underline decoration-[#0f83fe] text-[#0f83fe]">More feeds</a>
      </div>

      <footer className="flex justify-center items-center p-2 my-2">
        {footerLinks.map((link) => {
          return (
            <a href={link.link} key={link.textDisplay}
              className="py-1 hover:underline decoration-[#0f83fe] px-2 font-light text-[#0f83fe]"
            >{link.textDisplay}</a>
          )
        })}
      </footer>
    </div>
  )
}

export default RightSideBar;