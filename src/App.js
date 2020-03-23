import { Box, Button, Container, TextField, Typography } from "@material-ui/core";
import React, { useCallback, useState } from "react";

import EditingItem from "./EditingItem";
import TodoItem from "./TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleChangeNewItem = useCallback(({ target }) => {
    setNewItem(target.value);
  }, []);

  const handleAddItem = useCallback(() => {
    setTodos((prev) => [...prev, { id: `${Date.now()}`, title: newItem }]);
    setNewItem('');
  }, [newItem]);

  const handleDeleteItem = useCallback((item) => {
    setTodos((prev) => prev.filter((it) => it.id !== item.id));
  }, []);

  const handleSaveItem = useCallback((item) => {
    setTodos((prev) => prev.map((it) => {
      if (it.id !== item.id) {
        return it;
      }

      return item;
    }));
    setSelectedItem(null);
  }, []);

  const handleSelectItem = useCallback((id) => {
    setSelectedItem(id);
  }, []);

  const handleUnselectItem = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <Container maxWidth="md">
      <Box pt={4} display="flex" flexDirection="column" alignItems="stretch">
        <Box display="flex" flexDirection="row">
          <Box flex={1}>
            <TextField fullWidth value={newItem} onChange={handleChangeNewItem} />
          </Box>
          <Button onClick={handleAddItem}>Add</Button>
        </Box>

        {todos.map(item => (
          <Box mt={2}>
            { item.id === selectedItem ? (
              <EditingItem data={item} onCancel={handleUnselectItem} onSave={handleSaveItem} />
            ) : (
              <TodoItem data={item} onClick={handleSelectItem} onDelete={handleDeleteItem} />
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
}
