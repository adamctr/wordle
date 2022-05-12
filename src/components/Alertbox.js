import React from "react";
import { styled } from "@stitches/react";
import Alert from "./Alert";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { handlePressEnter } from "../handlers/handlePressEnter";

const StyledAlertBox = styled("div", {
  position: "absolute",
  width: "fit-content",
  height: "600px",
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "flex-end",
  gap: "20px",
});

const Alertbox = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const handlePressEnter = (e) => {
      if (e.key === "Enter") {
        setAlerts((prevAlerts) => [
          ...prevAlerts,
          { message: "Test de Julien", id: uuidv4() },
        ]);
      }
    };

    document.addEventListener("keydown", handlePressEnter);

    return () => document.removeEventListener("keydown", handlePressEnter);
  });

  return (
    <StyledAlertBox>
      {alerts.map((alert) => {
        return (
          <Alert
            autoDestruct={setTimeout(() => {
              setAlerts((prevAlerts) =>
                prevAlerts.filter((thisAlert) => thisAlert.id !== alert.id)
              );
            }, 1000)}
            key={alert.id}
            message={alert.message}
          />
        );
      })}
    </StyledAlertBox>
  );
};

export default Alertbox;
