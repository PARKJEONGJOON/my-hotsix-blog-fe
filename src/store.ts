import create from 'zustand';

interface StoreState {
  showCode: boolean;
  emailButton: string;
  codeButton: string;
  showTimer: boolean;
  firstPassword: string;
  secondPassword: string;
  setShowCode: (showCode: boolean) => void;
  setEmailButton: (emailButton: string) => void;
  setCodeButton: (codeButton: string) => void;
  setShowTimer: (showTimer: boolean) => void;
  setFirstPassword: (firstPassword: string) => void;
  setSecondPassword: (secondPassword: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  showCode: false,
  emailButton: 'normal',
  codeButton: 'normal',
  showTimer: false,
  firstPassword: '',
  secondPassword: '',
  setShowCode: (showCode) => set({ showCode }),
  setEmailButton: (emailButton) => set({ emailButton }),
  setCodeButton: (codeButton) => set({ codeButton }),
  setShowTimer: (showTimer) => set({ showTimer }),
  setFirstPassword: (firstPassword) => set({ firstPassword }),
  setSecondPassword: (secondPassword) => set({ secondPassword }),
}));
