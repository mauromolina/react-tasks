import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({project}) => {

    const projectsContext = useContext(projectContext);
    const { getActualProject } = projectsContext;

    const tasksContext = useContext(taskContext);
    const { getProjectTasks } = tasksContext;

    const getProject = id => {
        getActualProject(id);
        getProjectTasks(id);
    }

    return ( 
        <button
            type="button"
            className="btn btn-blank"
            onClick={() => getProject(project.id)}
        >
            <p className="centrar">{project.name}</p>
        </button>
     );
}
 
export default Project;