import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Typography variant="h6" component="span">
        {count}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </div>
  );
}
