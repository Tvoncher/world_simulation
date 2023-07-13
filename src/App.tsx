import { FC } from "react";
import { observer } from "mobx-react-lite";

import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import Onboarding from "./components/Onboarding/Onboarding";
import Popup from "./components/Popup/Popup";

import "./App.css";

import { onboardingStore } from "./stores/OnboardingStore";
import { popupsStore } from "./stores/PopupsStore";

const App: FC = observer(() => {
  return (
    <>
      {onboardingStore.isOnboarding ? (
        <Onboarding />
      ) : (
        <>
          {popupsStore.event && (
            <Popup
              type={popupsStore.event.type}
              title={popupsStore.event.title}
              text={popupsStore.event.text}
            />
          )}
          <Map />
          <Menu />
        </>
      )}
    </>
  );
});

export default App;
