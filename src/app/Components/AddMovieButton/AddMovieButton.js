import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function AddMovieButton() {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Button>+ Add movie</Button>
    </Box>
  );
}
