import React from "react";
import pythonIcon from '../assets/python.png';
import jsIcon from '../assets/js.png'
import reactIcon from '../assets/react.png';
import mysqlIcon from '../assets/SQL.png';
import tailwindIcon from '../assets/css.png';
import apiIcon from '../assets/API.png'


const ProjectsSection = () => {
    return (
    <div className="projects-container bg-black  p-6 mx-auto my-8 max-w-full lg:max-w-4xl rounded-lg">
      <h2 className="text-white text-4xl font-sans mb-6 text-center">My Projects</h2>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="project-item bg-black  p-4 ">
          <h3 className="text-white text-xl mb-2">Socket.io Chatroom</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Socket.io, Flask, Python functional chatroom.</p>
          <button className="w-20 bg-[#0c2e2e] h-9 text-[#85cfc5] px-2  my-2 mr-4 border- rounded-md">Project</button><button className="w-20 bg-[#0e0e0e] h-9 text-[#d8d8d8] px-2  my-2 mr-4 border- rounded-md">Repo</button>
        </div>

        <div className="project-item bg-gray-800  border-white p-4 rounded-md">
          <h3 className="text-white text-xl mb-2">Skynet Authenticator</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Incomplete, trying styles, design options. Soon these will each have buttons, photos, links, hover effects.</p>
        </div>

        <div className="project-item bg-gray-800  border-white p-4 rounded-md">
          <h3 className="text-white text-xl mb-2">C++ Compiler</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Incomplete, trying styles, design options. Soon these will each have buttons, photos, links, hover effects.</p>
        </div>

            <div className="flex space-x-4 max-h-[45px] justify-center mt-8 ">
                <img className="hover:max-h-[42px]" src={pythonIcon} alt="Python" width="40"  />
                <img className="hover:max-h-[42px]" src={jsIcon} alt="JavaScript" width="40" />
                <img className="hover:max-h-[42px]" src={reactIcon} alt="React" width="40" />
                <img className="hover:max-h-[42px]" src={mysqlIcon} alt="MySQL" width="40" />
                <img className="hover:max-h-[42px]" src={tailwindIcon} alt="Tailwind CSS" width="40" />
                <img className="hover:max-h-[42px]" src={apiIcon} alt="Api" width="40" />
            </div>

        </div>
    </div>
    );
};

export default ProjectsSection;