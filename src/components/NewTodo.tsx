import React, { useRef } from "react";

import "./NewTodo.css";

interface AddTodoItem {
    onAddTodo: (text: string) => void
}

const NewTodo: React.FC<AddTodoItem> = (props) => {
    const formInputText = useRef<HTMLInputElement>(null);

    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const inputData = formInputText.current!.value;

        if (inputData.trim().length === 0) {
            return
        }
        props.onAddTodo(inputData);
        formInputText.current!.value = ""
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="form-control">
                <label htmlFor="todo-input">Enter Todo: </label>
                <input type="text" id="todo-input" ref={formInputText} />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo