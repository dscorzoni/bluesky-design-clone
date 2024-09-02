import Image from "next/image";
import LeftSideBar from "./components/LeftSideBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w=[1150px] flex">
        <LeftSideBar />
      </div>
      </main>
  );
}
