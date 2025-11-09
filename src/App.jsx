import {useState} from "react";

import Button from "./components/Button.jsx";
import Menu from "./components/Menu.jsx";
import NewProject from "./pages/NewProject.jsx";
import NoSelectedProject from "./pages/NoSelectedProject.jsx";
import BodyContent from "./BodyContent.jsx";

function FormInput({label}) {
    return <>
        <label className="text-stone-600 font-bold capitalize size-6">{label}</label>
        <input className="border-stone-500 border-1 bg-stone-300 h-10 text-stone-800" type="text"/>
    </>;
}

function App() {
    const [projects, setProjects] = useState([]);


    return (
        <>
            <BodyContent/>
        </>
    );
}

export default App;
