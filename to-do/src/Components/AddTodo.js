import React, { useState } from 'react';

function AddTodo(props) {
    const [content, setContent] = useState('');

    const handleChange = (e) => {
        setContent(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(content);
        if (content !== '') {
            props.addTodo(content);
        }
        setContent('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="addTodo-label">Add new todo:</label>
                <i class="fas fa-plus-circle"></i>
                <input type="text" onChange={handleChange} value={content} />
            </form>
        </div>


    );
}
export default AddTodo;
