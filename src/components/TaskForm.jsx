import {useState, useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

function TaskForm(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask} = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //console.log(title);
        createTask({title, description});
        //console.log(description);
        setTitle("");
        setDescription("");
    }

    return(
        <div className="max-w-md mx-auto">
            <form onSubmit={ handleSubmit } className="bg-neutral-700 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tus tareas</h1>
                <input placeholder="Escribe la tarea"
                    onChange={ (e) => setTitle(e.target.value) }
                    value={title}
                    autoFocus
                    className="bg-slate-200 p-3 w-full mb-2"
                />
                <textarea placeholder="Describe la tarea"
                    onChange={ (e) => setDescription(e.target.value) }
                    value={description}
                    className="bg-slate-200 p-3 w-full mb-2"
                ></textarea>
                <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
            </form>
        </div>
    );
}

export default TaskForm;