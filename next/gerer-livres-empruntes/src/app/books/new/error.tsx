"use client";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

import React from "react";

function ErrorPage({ error }: ErrorPageProps) {
  return <div>{error.message}</div>;
}

export default ErrorPage;
