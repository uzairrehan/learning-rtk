import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { decrement, increment } from "@/lib/slices/counterSlice";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Im Counter</h1>
      <h4>{count}</h4>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
