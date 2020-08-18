import React, {useState, useEffect} from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import TaskForm from '../tasks/TaskForm';
import TaskList from '../tasks/TaskList';
 
const Projects = () => {

    const [size, setSize] = useState({
        'windowWidth': 0,
        'windowHeight': 0
    })

     useEffect( () => {
         let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
         let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

         setSize({ windowWidth, windowHeight });
     },[])

    

    return ( 
        <div className="contenedor-app">
            { size.windowWidth < 768 ? null : <Sidebar/>}
            <div className="seccion-principal">
                <Navbar/>
                <main>
                    <TaskForm/>
                    <div className="contenedor-tareas">
                        <TaskList/>
                    </div>
                </main>
            </div>
            { size.windowWidth < 768 ? <Sidebar/> : null}
        </div>
     );
}
 
export default Projects;