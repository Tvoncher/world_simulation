import { FC, useCallback } from "react";

import "./Popup.css";
import { observer } from "mobx-react-lite";
import { popupsStore } from "../../stores/PopupsStore";

const Popup: FC<IEvent> = observer(({ title, text }) => {
  const handleClose = useCallback(() => {
    popupsStore.setIsShow(false);
  }, []);

  return (
    <div className="popup__wrapper">
      <div>
        <h2>{title}</h2>
      </div>
      <div>{text}</div>
      <div className="close_button" onClick={handleClose}>
        CLOSE
      </div>
    </div>
  );
});

export default Popup;
