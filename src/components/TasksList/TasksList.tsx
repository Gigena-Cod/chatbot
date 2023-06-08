import styled from "styled-components";
import { TasksListProps } from "./types";
import Task from "./subcomponents/Tasks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function TasksList(tasksListProps: TasksListProps) {
  const { tasksList } = tasksListProps;

  return (
    <Container>
      {tasksList.map((task) => (
        <Task task={task} />
      ))}
    </Container>
  );
}
