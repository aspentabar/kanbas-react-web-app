import React, { useState } from "react";
import database from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

const { modules } = database;

function ModuleList() {

  const { courseId } = useParams();


  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  // const [moduleList, setModuleList] = useState<any[]>(modules);
  // const [module, setModule] = useState({
  //   _id: "0", name: "New Module",
  //   description: "New Description",
  //   course: courseId || "",
  // });
  // const addModule = (module: any) => {
  //   const newModule = { ...module,
  //     _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };

  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId );
  //   setModuleList(newModuleList);
  // };

  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };

  // console.log(modules);
  // console.log(courseId)
  // const modulesList = modules.filter((module : any) => module.course === courseId);
  // console.log(modulesList);
  // const [selectedModule, setSelectedModule] = useState(modulesList[0]);


  return (
    <>
   {/* Buttons */
  <div className="button-container">
    <button className="btn">Collapse All</button>
    <button className="btn">View Progress</button>
    <select className="form-select">
      <option value="Publish All">Publish All</option>
      <option value="Publish Half">Publish Half</option>
      <option value="Publish None">Publish None</option>
    </select>
    <button className="btn">Modules</button>
  </div>
}
      <ul className="list-group wd-modules">
      <li className="list-group-item">
        
      <button className="btn btn-primary" 
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add</button>
          
          <button className="btn btn-primary" 
                  onClick={() => dispatch(updateModule(module))}>
                Update
        </button>


        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/>

        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
        }/>
      </li>

      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (

          <li key={index} className="list-group-item wd-modules-container">
            
            <button className="btn btn-primary"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

            <button className="btn btn-primary"
                onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

            
            <div className="wd-margin-bot-10">
              <FaEllipsisV className="me-2" />
              {module.name} | {module.description}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {module._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson : any, index : number) => (
                  <li className="list-group-item wd-green-left-border" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );

}

export default ModuleList;



