import React, { useCallback } from "react";
import Todo from "../Todo";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { reorderTodoList } from "../../redux/todoActions";
import { TodoType, AppState } from "../../Types/Types";
import { useDispatch, useSelector } from "react-redux";
import CSS from "csstype";

const DisplayTodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: AppState) => state.todoList);

  const reorder = (
    list: TodoType[],
    startIndex: number,
    endIndex: number
  ): TodoType[] => {
    const result: TodoType[] = Array.from(list);
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
        todoList,
        result.source.index,
        result.destination.index
      );
      dispatch(reorderTodoList(items));
    },
    [reorderTodoList, todoList]
  );

  const getListStyle = (
    isDraggingOver: boolean,
    defaultStyle: CSS.Properties
  ): CSS.Properties => ({
    ...defaultStyle,
    background: isDraggingOver ? "#edfff1" : "none",
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
            {todoList.map((todo, index) => (
              <Todo key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const styles: { container: CSS.Properties } = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
};

export default DisplayTodoList;
