import React, { useRef } from "react";

const NewTodo: React.FC = () => {
    const formInputText = useRef<HTMLInputElement>(null);

    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const inputData = formInputText.current!.value
        console.log(inputData)
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div>
                <label htmlFor="todo-input">Enter Todo</label>
                <input type="text" id="todo-input" ref={formInputText} />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo