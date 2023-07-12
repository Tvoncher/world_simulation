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
          {popupsStore.isShown && (
            <Popup
              title={popupsStore.events[0].title}
              text={popupsStore.events[0].text}
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
