import { FC, useCallback } from "react";

import "./Popup.css";
import { observer } from "mobx-react-lite";
import { popupsStore } from "../../stores/PopupsStore";

import { IEvent } from "../../utils/types";

const Popup: FC<IEvent> = observer(({ type, title, text }) => {
  const handleClose = useCallback(() => {
    popupsStore.moveEventToHistory();
  }, []);

  return (
    <div className="popup__wrapper">
      <img className="popup_image" src={`./images/${type}.png`} alt="img" />
      <div className="popup_text">
        <div>
          <h2>{title}</h2>
        </div>
        <div>{text}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div></div>
          <div className="close_button" onClick={handleClose}>
            CLOSE
          </div>
        </div>
      </div>
    </div>
  );
});

export default Popup;
