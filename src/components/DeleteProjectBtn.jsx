import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { GET_PROJECTS } from '../queries/projectQueries.js';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../mutations/projectMutations.js';

export default function DeleteProjectBtn({ projectId }) {
    const nav = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => nav('/'),         // will navigate home after deleteProject  
        refetchQueries: [{ query: GET_PROJECTS }], 
    });

  return (
    <div className='d-flex mt-5 ms-auto'>
        <button className="btn btn-danger m-2" onClick={deleteProject}>
            <FaTrash className='icon' /> Delete Project
        </button>
    </div>
  )
}
