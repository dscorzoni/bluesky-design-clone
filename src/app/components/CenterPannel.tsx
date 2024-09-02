import React, { PropsWithChildren } from "react";

const CenterPannel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="border-l-[1px] border-r-[1px] w-[615px]">
      { children }
    </div>
  )
}

export default CenterPannel;