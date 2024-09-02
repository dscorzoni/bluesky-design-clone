import React, { PropsWithChildren } from "react";

const CenterPannel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      { children }
    </div>
  )
}

export default CenterPannel;