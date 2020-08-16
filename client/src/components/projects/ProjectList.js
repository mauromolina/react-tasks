import React, {useContext, useEffect} from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ProjectList = ({}) => {

    // obtener los proyectos del state inicial con context
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    // obtener proyectos cuando carga el componente
    useEffect( () => {
        getProjects();
    }, []);
    
    if(projects.length === 0) return <p className="centrar">No hay proyectos</p>;

    

    return ( 
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project
                    key={project.id} 
                    project={project}
                />
            ))}
        </ul>
     );
}
 
export default ProjectList;