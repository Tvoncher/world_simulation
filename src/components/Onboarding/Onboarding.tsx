import { FC } from "react";
import { onboardingStore } from "../../stores/OnboardingStore";

const Onboarding: FC = () => {
  const handleClick = () => {
    onboardingStore.setIsOnboarding();
  };

  return (
    <div
      style={{
        height: "70vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>Lets say onboarding</div>
      <div style={{ fontSize: "20px" }}>
        Pick country by clicking on it. You will have unique set of
        characteristics, try to use your countries advantages to conquer whole
        world.
      </div>
      <div
        style={{
          background: "lightgray",
          padding: "15px",
          cursor: "pointer",
          border: "2px solid gray",
          borderRadius: "10px",
        }}
        onClick={handleClick}
      >
        Click here to start
      </div>
    </div>
  );
};

export default Onboarding;
