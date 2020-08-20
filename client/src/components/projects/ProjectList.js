import React, {useContext, useEffect} from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectList = ({}) => {

    // obtener los proyectos del state inicial con context
    const projectsContext = useContext(projectContext);
    const { projects, msg, getProjects } = projectsContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    // obtener proyectos cuando carga el componente
    useEffect( () => {
        if(msg){
            console.log(msg.msg);
            showAlert(msg.msg, msg.category);
        }
        getProjects();
    }, []);
    
    if(projects.length === 0) return <p className="centrar">No hay proyectos</p>;

    

    return ( 
        <ul className="listado-proyectos">
            { alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <TransitionGroup>
            {projects.map(project => (
                <CSSTransition
                key={project._id}
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