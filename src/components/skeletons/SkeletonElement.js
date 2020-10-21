import React from "react";
import "./Skeleton.css";

const SkeletonElement = props => {
  const classes = `skeleton ${props.type}`;

  return <div className={classes}></div>;
};

export default SkeletonElement;
