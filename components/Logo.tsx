import { SvgIcon } from "../node_modules/@mui/material/index";
import tgif from "../assets/tgif_logo.svg";

export const Logo: React.FC<{}> = () => {
  return (
    <SvgIcon component={tgif} style={{ fontSize: 60 }} viewBox="0 0 122 84" />
  );
};
