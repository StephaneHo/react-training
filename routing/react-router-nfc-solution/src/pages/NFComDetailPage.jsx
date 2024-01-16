import React from "react";
import { useParams } from "react-router-dom";

export const NFComDetailPage = () => {
  const params = useParams();
  return (
    <div className="mx-20">Page de details concernant le NFC : {params.id}</div>
  );
};
