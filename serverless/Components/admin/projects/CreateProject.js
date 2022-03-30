import React, { useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import {createNewProject} from '../../../services/ProjectService'
// components

const CreateProject =()=> {
    const [projectname, setProjectname] = useState('');
    const [cptgbp, setCptgbp] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [streetname, setStreetname] = useState('');
    const [city, setCity] = useState('');
    const [county, setCounty] = useState('');
    const [country, setCountry] = useState('');
    const [totalsupply, setTotalsupply] = useState('');
    const [ownername, setOwnername] = useState('');
    const [type, setType] = useState('');
    const [website, setWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [ownerpic,setOwnerpic] = useState('');
    const [datefounded, setDatefounded] = useState('');

    let projectimage1= 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/farm-quotes-1580917869.jpg?crop=0.723xw:1.00xh;0.189xw,0&resize=640:*'
    let projectimage2= 'https://www.immunology.org/sites/default/files/Farm%20barn%20small.jpg'
    let projectimage3= 'https://www.greenqueen.com.hk/wp-content/uploads/2020/12/Veganic-Farming.png'
    let projectimage4= 'https://i.guim.co.uk/img/media/92ff23fe9c9b9372d2bf6bc5f58b5317d09640ba/140_163_3360_2017/master/3360.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=a50edccf40f1867e8ae0407b8f249ef2'
    let projectimage5= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagVhujggQsNickn5lifRjb4EQzXgYvuaoyaqY06JjzDmgf6BLQ0qQGJQm-gUs0YQkNu4&usqp=CAU'
    const project= {projectname:projectname,cptgbp:parseFloat(cptgbp),latitude:parseFloat(latitude),longitude:parseFloat(latitude),streetname:streetname
                    , city:city, county:county,
                country:country,totalsupply:parseFloat(totalsupply),remainingsupply:totalsupply,ownerpicture:ownerpic
        ,type:type,website:website,description:description,datefounded:datefounded,ownername:ownername,
        projectimage1:projectimage1,projectimage2:projectimage2,projectimage3:projectimage3,projectimage4:projectimage4,
        projectimage5:projectimage5}

    const router = useRouter()
    const handleSubmit = async (e) => {

        e.preventDefault();

                    await createNewProject(project).then(res => {
                        if (res.status === 200)
                            toast.success('Success! project has been created', {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        router.push('/adminDashboard')} )
                        .catch(err => {
                            console.log(err);
                        });

    }


    return (
        <>

            <div
                className="relative flex flex-col min-w-0 break-words m-10 shadow-lg rounded-lg bg-blue-50 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 bg-gray-50 text-xl font-bold">Create New Project</h6>
                    </div>
                </div>

                <ToastContainer position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                />

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={handleSubmit}>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold capitalize">
                            Project Information
                        </h6>
                        {/*Image uploade*/}
                        <div>
                            <label className="block text-sm font-medium text-gray-700"> Image </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file" className="relative cursor-pointer  rounded-md font-medium text-blue-300 hover:text-blue-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-300">
                                            <span>Upload a file</span>
                                            {/*<input id="file" name="file" multiple type="file" className="sr-only" accept="image/png, image/jpeg"*/}
                                            {/*       onChange={onFileChange}/>*/}
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-1">
                            <div className="w-full lg:w-6/12 px-4 ">
                                <div className="relative w-full  mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Project Name
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="The hackney farm" onChange={(e) => setProjectname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">

                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Total Supply
                                    </label>
                                    <input
                                        type="number"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="1000" onChange={(e) => setTotalsupply(e.target.value)}
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Cost per tonne of co2
                                    </label>
                                    <input
                                        placeholder='30£'
                                        type="number" onChange={(e) => setCptgbp(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Date project Was founded:
                                    </label>
                                    <input
                                        type="date"
                                        onChange={(e) => setDatefounded(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">

                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        About Project
                                    </label>
                                    <textarea
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        rows="4" onChange={(e) => setDescription(e.target.value)}
                                        placeholder="A beautiful farm with lots of animals "
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold capitalize">
                            Location Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Address
                                    </label>
                                    <input
                                        type="text" onChange={(e) => setStreetname(e.target.value)}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        City
                                    </label>
                                    <input onChange={(e) => setCity(e.target.value)}
                                           required
                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                           placeholder="New York"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        County/State
                                    </label>
                                    <input onChange={(e) => setCounty(e.target.value)}
                                           type="text"
                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                           placeholder="Essex"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Country
                                    </label>
                                    <input onChange={(e) => setCountry(e.target.value)}
                                           type="text"
                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                           placeholder="United Kingdom"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        latitude
                                    </label>
                                    <input onChange={(e) => setLatitude(e.target.value)}
                                           type="number" step="0.01"
                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                           placeholder="-20"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        longitude
                                    </label>
                                    <input onChange={(e) => setLongitude(e.target.value)}
                                           type="number" step="0.01"
                                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                           placeholder="0.5"
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300"/>

                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold capitalize">
                            About Owner
                        </h6>

                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Owner Name
                                </label>
                                <input
                                    required
                                    onChange={(e) => setOwnername(e.target.value)}
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Jack Smith"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Owner Image Url
                                </label>
                                <input
                                    required
                                    onChange={(e) => setOwnerpic(e.target.value)}
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    pattern="https?://.+"
                                    placeholder="https://www.cardiff.com"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Type of Owner
                                </label>
                                <input onChange={(e) => setType(e.target.value)}
                                       type="text"
                                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                       placeholder="Farm owner"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block capitalize text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    website
                                </label>
                                <input onChange={(e) => setWebsite(e.target.value)}
                                       type="url"  pattern="https?://.+"
                                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                       placeholder="https://www.cardiff.com"
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent
                    rounded-full shadow-sm text-sm font-medium bg-gray-700 active:bg-blue-600 text-white font-bold capitalize
                     hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                            >Create Project</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateProject;


