import {useState} from 'react'

import NoSelectedProject from "./pages/NoSelectedProject.jsx";
import NewProject from "./pages/NewProject.jsx";
import Menu from "./components/Menu.jsx";
import ProjectManagement from "./pages/ProjectManagement.jsx";

export default function BodyContent() {
    const SELECTED_PROJECT = "SELECTED_PROJECT";
    const MAIN = "MAIN";
    const NEW_PROJECT = "NEW_PROJECT";

    const [currentContext, setCurrentContext] = useState(MAIN);
    const [projects, setProjects] = useState([]);
    const [currentProject, setCurrentProject] = useState(null);

    const handleAddTask = (project, newTask) => {
        let updatedProject = {...project};
        console.log((updatedProject.tasks || []), "newTask", newTask);
        updatedProject.tasks = updatedProject?.tasks ? [...updatedProject.tasks, newTask] : [newTask];
        setCurrentProject(() => updatedProject);
        const idx = projects.findIndex(p => p.title === project.title);
        let updatedProjects = [...projects];
        updatedProjects[idx] = updatedProject;
        setProjects(() => updatedProjects);
    }

    console.log("currentProject", currentProject);
    console.log("projects", projects);

    function updateProject(project) {
        let newProject = projects.find((p) => p.title && p.title === project.title) || project;
        setProjects([...projects.filter(p => p.title !== project.title), newProject]);
        setCurrentContext(MAIN);
    }

    return (
        <>
            <Menu projects={projects} onSelectProject={(project) => setCurrentProject(() => project)} />
            <div className="flex-3/4 bg-stone-100">
                {currentContext === NEW_PROJECT &&
                    (<NewProject onCancel={() => setCurrentContext(MAIN)}
                                 onSubmit={(project) => {
                                     updateProject(project)
                                 }}
                    />)}
                {currentContext === MAIN && currentProject === null &&
                    (<NoSelectedProject
                        onNewProjectClick={() => {
                            setCurrentContext(NEW_PROJECT);
                        }}
                    />)}
                {currentProject !== null  && currentContext === MAIN &&
                    <ProjectManagement project={currentProject} onAddTask={handleAddTask} />}
            </div>
        </>)


}