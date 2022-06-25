import { CircularProgress } from "@mui/material";
import { CircularProgressProps } from "@mui/material";

const Spinner: React.FC<CircularProgressProps> = ({
  size = 15,
  thickness = 6,
  ...props
}) => <CircularProgress size={size} thickness={thickness} {...props} />;

export default Spinner;
