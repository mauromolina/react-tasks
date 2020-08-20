import React, {useReducer} from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import axiosClient from '../../config/axios';
import { FORM_PROJECT,
         GET_PROJECTS,
         NEW_PROJECT, 
         VALIDATE_FORM, 
         ACTUAL_PROJECT, 
         DELETE_PROJECT, 
         PROJECT_ERROR } from '../../types';


const ProjectState = props => {

    const initialState = {
        projects: [],
        form: false,
        error: false,
        actualProject: null,
        msg: null
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

    const getProjects = async () => {
        try {
            const response = await axiosClient.get('/api/projects')
            dispatch({
                type: GET_PROJECTS,
                payload: response.data.projects
            })
        } catch (error) {
            console.log(error);
        }
    }

    const newProject = async (project) => {
        try {
            const response = await axiosClient.post('/api/projects', project);
            dispatch({
                type: NEW_PROJECT,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
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

    const deleteProject = async id => {
        try {
            await axiosClient.delete(`api/projects/${id}`);
            dispatch({
                type: DELETE_PROJECT,
                payload: id
            })
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                error: state.error,
                actualProject: state.actualProject,
                msg: state.msg,
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