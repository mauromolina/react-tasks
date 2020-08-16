import React, {useReducer} from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT, GET_PROJECTS } from '../../types';


const ProjectState = props => {

    const projects =  [
        {id:1, name: 'Tienda virtual'},
        {id:2, name: 'Diseño de sitio web'},
        {id:3, name: 'MERN Tasks'}
    ]

    const initialState = {
        projects: [],
        form: false
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // funciones para el crud
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState