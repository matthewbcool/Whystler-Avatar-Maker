import React from "react";
import { Toolbar } from "./Toolbar";
import { dispatch } from "../dispatch";
import constants from "../constants";

function dispatchResetView() {
  dispatch(constants.resetView);
}

function dispatchExportAvatar() {
  dispatch(constants.exportAvatar);
}

export function ToolbarContainer({ randomizeConfig }) {
  return (
    <Toolbar>
      <button onClick={randomizeConfig}>Randomize avatar</button>
      <button onClick={dispatchResetView}>Reset camera view</button>
      <button onClick={dispatchExportAvatar} className="primary">
        Export avatar
      </button>
    </Toolbar>
  );
}
