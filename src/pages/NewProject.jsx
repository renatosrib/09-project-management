import { useState} from 'react'


export default function NewProject({onCancel, onSubmit}) {
    const INITIAL_PROJECT = {
        title: '',
        description: '',
        dueDate: '',
    }

    const [project, setProject] = useState(INITIAL_PROJECT)


    return (
        <form>
            <div className="flex mr-10 ml-10 justify-end mt-10">
                <div className="w-36 text-right"><button className="h-12 w-30 text-black cursor-pointer" onClick={e =>{
                    e.preventDefault();
                    onCancel();
                }}>Cancel</button></div>
                <div className="w-36 text-right"><button className="h-12 w-30 text-white bg-black font-bold cursor-pointer " onClick={(e) => {
                    e.preventDefault();
                    onSubmit(project);
                }}>Save</button></div>
            </div>

            <div className="flex flex-col  mr-10 ml-10 justify-items-center mt-10">
                <label className="text-stone-600 font-bold capitalize size-6">Title</label>
                <input className="border-stone-500 border-1 bg-stone-300 h-12 text-stone-800"
                       type="text"
                        value={project.title}
                       onChange={(e) => {
                           setProject(() => {
                               return { ...project, title: e.target.value};
                           }
                           )}}
                />
            </div>

            <div className="flex flex-col  mr-10 ml-10 justify-items-center mt-10">
                <label className="text-stone-600 font-bold capitalize size-6">Description</label>
                <textarea className="border-stone-500 border-1 bg-stone-300  text-stone-800 h-24"
                          onChange={(e) => {
                              setProject(() => {
                                      return { ...project, description: e.target.value};
                                  }
                              )}}
                          value={project.description}
                />
            </div>

            <div className="flex flex-col  mr-10 ml-10 justify-items-center mt-10">
                <label className="text-stone-600 font-bold capitalize">Due Date</label>
                <input className="text-stone-800 border-stone-500 bg-stone-300 h-12"
                       type="date"
                       onChange={(e) => {
                           setProject(() => {
                               return { ...project, dueDate: e.target.value };
                           })
                       }}
                       value={project.dueDate}
                />
            </div>
        </form>
    );
}