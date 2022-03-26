import {React, useContext} from "react";

import CreateProject from "./CreateProject";
import {ViewContext} from "../../../Contexts/ViewContext";


import CurrentProject from "./CurrentProject";
import EditProject from "./EditProject";

const Projects= (props) => {

    const allProjects= props.projects
    const {setView} = useContext(ViewContext);
    const {view} = useContext(ViewContext);

    const {editPrj} = useContext(ViewContext);

    console.log(view)



    return(

        <div >
            <div className=" border shadow border-gray-800 md:w-8/12  lg:w-10/12 m-10 rounded  ">

                <div className="flex justify-between mb-2" >
                    <h3 className='font-bold py-6 capitalize font-serif text-gray-700 text-2xl px-10 '>
                        Admin project Dashboard
                    </h3>

                    <div>
                        <button onClick={() => setView('current projects')} className='mt-4 p-4 mr-10 bg-[#77C9D4] active:bg-blue-600 text-white font-bold capitalize text-xs px-4 p-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'>
                            Current projects</button>

                        <button onClick={() => setView('create project')} className='mt-6 p-4 mr-5 bg-[#0E9F6E] active:bg-blue-600 text-white font-bold capitalize text-xs px-4 p-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'>
                            Create Project</button>

                    </div>


                    </div>

                <div className=''>

                    { view === 'current projects' ? <CurrentProject projects={allProjects}/> : view === 'create project' ? <CreateProject /> : view === 'edit' ? <EditProject projects={editPrj}/> : "loading ..."}

                </div>


            </div>


        </div>

    )

}


export default Projects;