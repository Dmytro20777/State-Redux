import { useDispatch, useSelector } from "react-redux"
import { deposit, minusDeposit } from './redux/balanceSlice';
import { LangSwitcher } from "./components/LangSwitcher";

export const App = () => {

  const dispatch = useDispatch();
  const balance = useSelector(state => state.balance.value);
  const newLang = useSelector(state => state.locale.lang);

  return (
    <div>
      <LangSwitcher />
      <p>Current lang: {newLang}</p>
      <p>Balance { balance }</p>
      <button onClick={() => dispatch(deposit(10))}>Add 10 credits</button>
      <button onClick={() => dispatch(minusDeposit(5))}>Withdraw 5  credits</button>
    </div>
  )
}
