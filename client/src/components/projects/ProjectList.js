import React, {useContext, useEffect} from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
            <TransitionGroup>
            {projects.map(project => (
                <CSSTransition
                    key={project.id}
                    timeout={400}
                    classNames="proyectos"
                >
                    <Project 
                        project={project}
                    />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ProjectList;