import React, { PropsWithChildren } from "react";

const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="flex justify-center items-center p-2 pl-4 pr-4 text-center bg-[#0085FF] text-white rounded-full">{children}</button>
  )
}

export default Button;