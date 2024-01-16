import React from "react";

export const MyTextField = (props) => {
  const { placeholder } = props;
  const [value, setValue] = React.useState("theTest");
  // this is a test
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
