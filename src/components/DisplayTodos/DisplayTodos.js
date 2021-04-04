import React, { useCallback } from "react";
import Todo from "./Todo.container";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const DisplayTodos = ({ todos, reorderTodos }) => {
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = useCallback(
    (result) => {
      // the only one that is required
      if (!result.destination) {
        return;
      }

      const items = reorder(
        todos,
        result.source.index,
        result.destination.index
      );
      reorderTodos(items);
    },
    [reorderTodos, todos]
  );

  const getListStyle = (isDraggingOver, defaultStyle) => ({
    ...defaultStyle,
    background: isDraggingOver ? "#edfff1" : null,
    padding: "0 10px",
  });
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver, styles.container)}
          >
            {todos.map((todo, index) => (
              <Todo key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
};

export default DisplayTodos;
