import styled from "styled-components";
import { TaskProps } from "../types";

const Container = styled.div`
  border-radius: .5rem;
  background-color: rgb(0, 0, 0, 0.1);
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  display: flex;
  align-items: center;
`;

export default function Task(taskProps: TaskProps) {
  const { task } = taskProps;
  return <Container>{task}</Container>;
}
