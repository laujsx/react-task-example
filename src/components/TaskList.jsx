import TaskCard from './TaskCard';
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

function TaskList(){
    //console.log(props.tasks)
    const {tasks} = useContext(TaskContext);
    
    if(tasks.length === 0){
        return (
        <>
            <h1 className="text-white text-4xl font-bold text-center">No hay tareas aún</h1>
        </>);
    }

    return(
        <div className="grid grid-cols-4 gap-2">
            {tasks.map((task, index) => (
                <TaskCard key={index} task={task} />
            ))}
        </div>
    );
}

export default TaskList;