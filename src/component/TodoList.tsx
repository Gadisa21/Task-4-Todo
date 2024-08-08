import { useState } from "react";

interface Prop {
    todo: { todo: string }[];
    setTodo: (todos: { todo: string }[]) => void;
}

function TodoList({ todo, setTodo }: Prop) {
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editingValue, setEditingValue] = useState<string>("");

    const handleEdit = (index: number, currentTodo: string) => {
        setEditingIndex(index);
        setEditingValue(currentTodo);
    };

    const handleSave = (index: number) => {
        const updatedTodos = todo.map((item, i) =>
            i === index ? { todo: editingValue } : item
        );
        setTodo(updatedTodos);
        setEditingIndex(null); 
        setEditingValue(""); 
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditingValue(e.target.value);
    };

    const handleDelete=(index:number)=>{
        const updatedTodos=todo.filter((_,i)=>i!==index)
        setTodo(updatedTodos)
    }

    return (
        <div className="container">
            {todo.map((item, index) => (
                <table className="table" key={index}>
                    <tbody>
                        <tr className="row">
                            <th scope="row" className="col">{index + 1}</th>
                            <td className="col">
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editingValue}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    item.todo
                                )}
                            </td>
                            <td className="col">
                                {editingIndex === index ? (
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => handleSave(index)}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => handleEdit(index, item.todo)}
                                    >
                                        Edit
                                    </button>
                                )}
                            </td>
                            <td className="col">
                                <button type="button" className="btn btn-danger" onClick={()=>handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}

export default TodoList;
