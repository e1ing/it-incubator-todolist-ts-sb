import React from 'react';
import {Story, Meta} from '@storybook/react';
import {AddItemForm, AddItemFormPropsType} from '../AddItemForm';
import AppWithRedux from "../AppWithRedux";
import {store} from "../store/store";
import {Provider} from "react-redux";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";

export default {
    title: 'TODOLIST/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story<AddItemFormPropsType> = () =>
    <AppWithRedux/>

export const AppWithReduxExample = Template.bind({});
AppWithReduxExample.args = {}
