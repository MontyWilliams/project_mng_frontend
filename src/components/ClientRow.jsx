import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../mutations/clientMutations.js'
import { GET_CLIENTS } from '../queries/clientQueries'

export default function ClientRow({client}) {
  // The 2nd parameter is the argument
  const [deleteClient] = useMutation(DELETE_CLIENT, { variables: {id: client.id},
    // Call update cache function to modify cachce w/out making queries
    update(cache, { data: { deleteClient}}) {
      // First we get the cache using readQuery and 
      const { clients } = cache.readQuery({ query:
      GET_CLIENTS});
      // Next we update the clients
      cache.writeQuery({
        query: GET_CLIENTS,
        // Return ids not equal to the deleted client id
        data: { clients: clients.filter(client => client.id !== deleteClient.id) }
      })

    }

  });

  return (
    <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
            <button className="btn btn-danger btn-sm"
              onClick={deleteClient}>
              <FaTrash />
            </button> 
        </td>
    </tr>
  )
}
