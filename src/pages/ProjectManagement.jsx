import {useState} from "react";

export default function ProjectManagement({project, onAddTask, onClearTask, onDeleteProject}) {
    const PENDING = 'PENDING';
    const [currTask, setCurrTask] = useState({name: '', status: PENDING});


    return <>
        <h1>{project.title}</h1>
        <h5>{project.dueDate}</h5>
        <h6>{project.description}</h6>

        <hr/>
        <h2>Tasks</h2>
        <input
            onChange={e => setCurrTask(() => {
                return {
                    ...currTask,
                    name: e.target.value
                    }
            })}
        />
        <button onClick={() => {
            onAddTask(project, currTask)
        }}>Add task
        </button>

        {project.tasks?.map((task, index) => {
            return (<li key={index}>{task.name}</li>)
        })}
        <p>Project "{project.title}" has been selected!</p>
    </>
}