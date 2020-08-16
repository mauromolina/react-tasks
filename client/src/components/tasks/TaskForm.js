import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext';

const TaskForm = () => {

    const projectsContext = useContext(projectContext);
    const { actualProject } = projectsContext;

    if(!actualProject) return null;

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="taskName"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default TaskForm;