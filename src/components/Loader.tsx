import { Spinner, Box } from "@chakra-ui/react";

interface Props {
  color?: string;
  size?: string;
}

function Loader({ color }: Props) {
  const textColor = color ? color : "#1877f2";
  // const textSize = size ? size : "25px";

  return (
    <Box
      position="fixed"
      top={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Spinner color={textColor} />
    </Box>
  );
}

export default Loader;
