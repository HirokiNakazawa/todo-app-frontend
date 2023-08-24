import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";
import { useRecoilState } from "recoil";
import { limitDateState } from "../recoil/MainState";

const LimitDateField = () => {
  const [limitDate, setLimitDate] = useRecoilState(limitDateState);

  const handleDateChange = (date) => {
    setLimitDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <DatePicker
        label="期限"
        name="limitDate"
        value={limitDate}
        onChange={handleDateChange}
        slotProps={{ textField: { variant: "outlined" } }}
      />
    </LocalizationProvider>
  );
};

export default LimitDateField;
