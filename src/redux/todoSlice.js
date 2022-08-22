import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: 'todo1', isCompleted: false },
        { id: 2, title: 'todo2', isCompleted: true },
		{ id: 3, title: 'todo3', isCompleted: true },
		{ id: 4, title: 'todo4', isCompleted: false },
		{ id: 5, title: 'todo5', isCompleted: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                isCompleted: false,
            };
            state.push(todo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].isCompleted = action.payload.isCompleted;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        }
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;