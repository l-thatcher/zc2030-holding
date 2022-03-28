import React, {useContext} from "react";
// import {ViewContext} from "../Contexts/ViewContext";
import Link from 'next/link'
import ProgressBar from "@ramonak/react-progress-bar";


const Card = (props) => {
    // const project = props.project
    // const {setView} = useContext(ViewContext);
    // const {view} = useContext(ViewContext);
    // const {setEditPrj} = useContext(ViewContext);

    // function changeView() {
    //     setEditPrj(project)
    //     setView('edit')
    // }

    // storing input name

    // console.log(project)

    // console.log(project)

    const project = {
        projectimage1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        projectname: "Test Project",
        city: "Landaan",
        country: "United Kingdom",
        county: "Leicester",
        totalsupply: "10000",
        cptgbp: "35",
        id: "234",
        remaininsupply:"100"
    }

    const widthPercentage = (project.remainingsupply / project.totalsupply) * 100


    return (
        <div className="w-1/3 border border-gray-500
            overflow-hidden rounded-lg shadow-md bg-zc30-blue hover:shadow-xl hover:scale-104 transition duration-200 ease-in-out">
            <div className='relative'>
                <div className=" rounded-lg ">
                    <img
                        src={project.projectimage1}
                        alt="uploaded cover image"
                        className="w-full object-cover  h-48 sm:h-48 rounded-lg ">

                    </img>

                </div>
                <div>
                    <div className=' text-xl text-black ml-2 mt-3 font-bold '>{project.projectname}  </div>
                </div>

                <div
                    className=" font-semibold ml-2  underline flex items-center text-sm text-white truncate capitalize">
                    {/*location*/}
                    {project.city} , {project.county}, {project.country}
                </div>

                <div className="text-white ml-2 mt-2 no-underline flex items-center font-semibold text-xs text-white ">
                    {/*total supply*/}
                    Offset Purchased: <span className='text-white ml-2'> {project.totalsupply} /tC02e</span>
                </div>

                <div className=' flex items-center '>

                    <div>
                        <div className=" flex items-center  rounded-full">

                            <div
                                className=' ml-2 no-underline flex items-center text-xs text-white font-semibold  capitalize'>Total Carbon Supply:  {project.totalsupply} /tC02e
                            </div>
                            {/*<div className='w-[150px] ml-1'><*/}
                            {/*    ProgressBar baseBgColor={'grey'} labelSize={'10px'}*/}
                            {/*                                             height={'15px'} bgColor={'#2D3B4F'}*/}
                            {/*                                             completed={widthPercentage}/></div>*/}


                        </div>
                    </div>

                    <div
                        className=" absolute   bottom-[95px] w-[100px] bg-zc30-orange py-1 text-black text-center font-light">

                        {/*<div className='bg-zc30-green text-white text font-bold text-sm'>*/}
                        {/*    £{project.cptgbp} <span> /tCo2e</span>*/}
                        {/*</div>*/}
                        <div className='bg-red-500 text-white text font-bold text-sm'>
                            SOLD OUT
                        </div>
                    </div>


                </div>


            </div>

            <div className="flex justify-end">


                <Link href={"./projects/" + project.id}>
                    <a className='mt-3 no-underline mb-3 mr-5 bg-logo-green  justify-center font-bold capitalize text-xs px-4 py-2
                         rounded shadow hover:shadow-md hover: mr-1 ease-linear transition-all duration-150'
                    >
                              <span className='text-white
                              '>More Details</span>
                    </a>
                </Link>

            </div>


        </div>

    )

}


export default Card;
