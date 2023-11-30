import { Box, List } from "@mui/material";

import { FC } from "react";
import { useStateContext } from "../../stateContext/StateContext";
import TaskListElement from "./TaskListElement";
import { styles } from "../../styles/styles";

const TasksList: FC = () => {
  const { groupsOfTasks } = useStateContext();

  return (
    <Box sx={styles.taskBox}>
      <List
        sx={styles.taskList}
        component="div"
        aria-labelledby="nested-list-subheader"
      >
        {groupsOfTasks.map((taskGroup, index) => (
          <TaskListElement
            taskGroup={taskGroup}
            key={index}
            isLast={index === groupsOfTasks.length - 1}
          />
        ))}
      </List>
    </Box>
  );
};

TasksList.displayName = "TasksList";

export default TasksList;
