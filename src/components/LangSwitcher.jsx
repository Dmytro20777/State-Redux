import { useDispatch, useSelector } from "react-redux"
import { selectLang } from "../redux/localeSlcie";

export const LangSwitcher = () => {

    const dispatch = useDispatch();
    const useLang = useSelector(state => state.locale.lang)

  return (
      <div>
          <select value={useLang} onChange={(event) => dispatch(selectLang(event.target.value))}>
              <option value="en">EN</option>
              <option value="uk">UK</option>
              <option value="pl">PL</option>
          </select>
      </div>
  )
}
