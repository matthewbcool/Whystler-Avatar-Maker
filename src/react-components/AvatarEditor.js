import React from "react";
import { MusicToggle } from "./MusicToggle";

export function AvatarEditor({ thumbnailMode, leftPanel, rightPanel, buttonTip, toolbar }) {
  return (
    <>
      <div className="main">
        {!thumbnailMode && leftPanel}
        {rightPanel}
        {buttonTip}
        <MusicToggle />
      </div>
      {!thumbnailMode && toolbar}
    </>
  );
}
