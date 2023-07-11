import { FC } from "react";
import Map from "./components/Map/Map";
import Menu from "./components/Menu/Menu";
import Onboarding from "./components/Onboarding/Onboarding";

import "./App.css";
import { onboardingStore } from "./stores/OnboardingStore";
import { observer } from "mobx-react-lite";

const App: FC = observer(() => {
  return (
    <>
      {onboardingStore.isOnboarding ? (
        <Onboarding />
      ) : (
        <>
          <Map />
          <Menu />
        </>
      )}
    </>
  );
});

export default App;
