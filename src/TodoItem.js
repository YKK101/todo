import { Box, Card, Typography } from "@material-ui/core";
import React, { useCallback } from "react";

import DeleteIcon from "@material-ui/icons/Delete";

export default function TodoItem(props) {
  const { data, onClick, onDelete } = props;

  const handleDelete = useCallback(() => {
    onDelete(data);
  }, [data, onDelete]);

  const handleClick = useCallback(() => {
    onClick(data.id);
  }, [data, onClick]);

  return (
    <Card onClick={handleClick}>
      <Box p={2} display="flex">
        <Box flex={1}>
          <Typography>{data.title}</Typography>
        </Box>
        <DeleteIcon onClick={handleDelete} />
      </Box>
    </Card>
  );
}
