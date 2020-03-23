import { Box, Card, TextField } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";

import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

export default function EditingItem(props) {
  const { data, onCancel, onSave } = props;

  const [value, setValue] = useState(data.title);

  const handleSave = useCallback(() => {
    onSave({
      ...data,
      title: value,
    });
  }, [data, onSave, value]);

  const handleValueChange = useCallback(({ target }) => {
    setValue(target.value);
  }, []);

  return (
    <Card>
      <Box p={2} display="flex">
        <Box flex={1}>
          <TextField fullWidth value={value} onChange={handleValueChange} />
        </Box>
        <CheckIcon onClick={handleSave} />
        <ClearIcon onClick={onCancel} />
      </Box>
    </Card>
  );
}
