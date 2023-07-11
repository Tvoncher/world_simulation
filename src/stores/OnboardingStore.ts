import { action, makeObservable, observable } from "mobx";

export class OnboardingStore {
  @observable
  isOnboarding = true;

  public constructor() {
    makeObservable(this);
  }

  @action
  setIsOnboarding() {
    this.isOnboarding = false;
  }
}

export const onboardingStore = new OnboardingStore();
