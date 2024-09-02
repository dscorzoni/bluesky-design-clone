import Image from "next/image";
import LeftSideBar from "./components/LeftSideBar";
import CenterPannel from "./components/CenterPannel";
import RightSideBar from "./components/RightSideBar";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="flex min-h-screen justify-between w-[1150px]">
        <LeftSideBar />
        <CenterPannel>
          Center Pannel
        </CenterPannel>
        <RightSideBar />
      </div>
      </main>
  );
}
