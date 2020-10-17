export type Navigation = {
  navigate: (scene: string) => void;
  reset: (scene: any) => void;
  dispatch: (scene: any) => void;
};
