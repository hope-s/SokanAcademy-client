import React from "react";
import { Button, styled } from "@nextui-org/react";
import PropTypes from "prop-types";

export default function CustomButton(props: any) {
  const MyStyledButton = styled<any, any>(Button, {
    boxShadow: "$md",
    borderRadius: "10px 10px 10px 15px",
    padding: "0 16px !important",
    whiteSpace: "nowrap !important",
    fontSize: "1rem",
    minWidth: "unset !important",
    "&:hover": {
      fontWeight: "700",
      boxShadow: "0 5px 10px rgba(142,105,2,.18)!important",
    },
    variants: {
      color: {
        normal: {
          color: "$main !important",
          width: "120px !important",
        },
        outlined: {
          color: "$primary !important",
          borderRadius: "10px 10px 15px 10px !important",
          width: "170px !important",
          border: "1px solid",
          "&:hover": {
            color: "$main !important",
            boxShadow: "none !important",
          },
        },
      },
    },
  });
  return (
    <MyStyledButton {...props} color={props.ghost ? "outlined" : "normal"}>
      {props.children}
    </MyStyledButton>
  );
}

CustomButton.propTypes = {
  children: PropTypes.any,
  ghost: PropTypes.bool,
  className: PropTypes.string
};
