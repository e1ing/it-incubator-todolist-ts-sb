import React from 'react';
import {Story, Meta} from '@storybook/react';
import {Task, TaskPropsType} from "../Task";
import {action} from "@storybook/addon-actions";

export default {
    title: 'TODOLIST/Task',
    component: Task,
    argTypes: {
        onClick: {description: 'Button clicked'},
    },
} as Meta;

const changeTaskStatus = action("Change status click")
const removeTask = action("Change title click")
const changeTaskTitle = action("Remove task clicked")

 const baseArg = {
     changeTaskStatus: changeTaskStatus,
     removeTask: removeTask,
     changeTaskTitle: changeTaskTitle
 }


const Template: Story<TaskPropsType> = (args) => <Task {...args} />;

export const TaskIsDoneExample = Template.bind({});
TaskIsDoneExample.args = {
   ...baseArg,
    task: {id: '1', title: "JS", isDone: true},
    todolistId: "todolistId",
};

export const TaskIsNotDoneExample = Template.bind({});
TaskIsNotDoneExample.args = {
    ...baseArg,
    task: {id: '1', title: "JS", isDone: false},
    todolistId: "todolistId",
}
