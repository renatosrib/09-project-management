import Button from "../components/Button.jsx";

export default function NoSelectedProject({onNewProjectClick}) {
    return (
        <div className="flex items-center flex-col justify-items-center gap-y-6 mt-10">
            <img className="w-22" src="logo.png" alt="logo"/>
            <h1 className="text-lg font-bold text-stone-700">No project selected</h1>
            <p className="text-stone-600">Select a project or get started with a new one</p>
            <Button classname="w-64" onClick={onNewProjectClick}>Create new project</Button>
        </div>
    );
}