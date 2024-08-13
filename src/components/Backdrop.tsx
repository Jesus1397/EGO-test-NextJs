"use client";

import "@/styles/Sidebar.scss";

const Backdrop: React.FC<{ show: boolean; onClick: () => void }> = ({
  show,
  onClick,
}) => {
  return show ? <div className="backdrop" onClick={onClick}></div> : null;
};

export default Backdrop;
