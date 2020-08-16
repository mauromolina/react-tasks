import React, {useReducer} from 'react';
import uuid from 'uuid';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT,
         GET_PROJECTS,
         NEW_PROJECT, 
         VALIDATE_FORM, 
         ACTUAL_PROJECT, 
         DELETE_PROJECT } from '../../types';


const ProjectState = props => {

    const projects =  [
        {id:1, name: 'Tienda virtual'},
        {id:2, name: 'Diseño de sitio web'},
        {id:3, name: 'MERN Tasks'}
    ]

    const initialState = {
        projects: [],
        form: false,
        error: false,
        actualProject: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // funciones para el crud
    const toggleForm = (status) => {
        dispatch({
            type: FORM_PROJECT,
            payload: status
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    const newProject = (project) => {
        project.id = uuid.v4();
        dispatch({
            type: NEW_PROJECT,
            payload: project
        });
    }

    const showErrorForm = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    const getActualProject = (id) => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: id
        })
    }

    const deleteProject = id => {
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        })
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                error: state.error,
                actualProject: state.actualProject,
                toggleForm,
                getProjects,
                newProject,
                showErrorForm,
                getActualProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState