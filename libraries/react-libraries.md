# Useful Libraries I use often

## FORM FIELDS
- Date-time fields (React based):
1. MUI:
```
npm install date-fns @date-io/date-fns
```

Use like this:
```
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/materials'
import { useState } from 'react';

const MyComponent = () => {
  const [date, setDate] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker label='Date Picker' renderInput={(params) => <TextField {...params} />} />
    </LocalizationProvider>
  )
}
```

## CLICK-EVENT
- React-outside-clicker (React based)
```

```