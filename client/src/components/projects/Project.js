import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext';

const Project = ({project}) => {

    const projectsContext = useContext(projectContext);
    const { getActualProject } = projectsContext;

    return ( 
        <button
            type="button"
            className="btn btn-blank"
            onClick={ () => getActualProject(project.id)}
        >
            <p className="centrar">{project.name}</p>
        </button>
     );
}
 
export default Project;