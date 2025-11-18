import {useState, useEffect, useRef} from "react";

export default function ProjectManagement({project, onAddTask, onClearTask, onDeleteProject}) {
    function initialTask() {
        return {name: '', status: PENDING}
    }

    const PENDING = 'PENDING';
    const [currTask, setCurrTask] = useState(initialTask());

    const taskInput = useRef();

    useEffect(() => {
        console.log(taskInput.current);
        taskInput?.current.focus();
    }, [project])

    return <div className={"mx-15"}>
        <button className="float-right cursor-pointer" onClick={() => {
            onDeleteProject(project);
        }}>Delete
        </button>
        <h1 className="text-4xl text-gray-800 mt-2">{project.title}</h1>
        <h5 className="text-xl text-gray-500  mt-1">{project.dueDate}</h5>
        <h6 className="text-lg mt-1">{project.description}</h6>

        <hr className="my-4"/>
        <h2 className="text-2xl mb-3">Tasks</h2>
        <input
            ref={taskInput}
            className="bg-gray-300"
            value={currTask.name}
            onChange={e => setCurrTask(() => {
                return {
                    ...currTask, name: e.target.value
                }
            })}
        />
        <button className="ml-5 cursor-pointer" onClick={() => {
            onAddTask(project, currTask)
            setCurrTask(() => {
                return {name: '', status: PENDING}
            });
        }}>Add task
        </button>

        <ul className="mt-2">
            {project.tasks?.filter(t => t.status === PENDING).map((task, index) => {
                return (<li key={index}>
                    <div className="w-full h-15 my-3 rounded-2xl bg-gray-200 content-center p-4 ">
                        <span
                            className="float-right">
                            <button className="float-right cursor-pointer" onClick={() => {
                                onClearTask(task)
                            }}>Clear
                    </button></span>
                        {task.name}
                    </div>
                </li>)
            })}
        </ul>
    </div>
}