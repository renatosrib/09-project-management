import Button from "./Button.jsx";
import {createPortal} from 'react-dom';

function Menu({projects, currentProject, onSelectProject}) {

    return createPortal((<div className="">
            <h2 className="font-extrabold text-xl mt-5 ml-8">Selected
                Project: {currentProject ? currentProject.title : '-'}</h2>
            <h1 className="font-extrabold text-2xl mt-15 ml-8">Your Projects</h1>
            <menu className="ml-10 mt-6">
                <ul>
                    {projects?.sort()?.map(item => <li key={item.title}><button  className="cursor-pointer" onClick={(() => onSelectProject(item))}>{item.title}</button></li>)}

                </ul>
                <Button classname="w-2/3 mt-10">+ Add Project</Button>


            </menu>
        </div>),
        document.getElementById('menu'));


}

export default Menu;