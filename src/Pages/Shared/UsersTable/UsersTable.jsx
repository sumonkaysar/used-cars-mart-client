import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const UsersTable = ({ users, refetch, seller, handleVerifySeller }) => {
  const [deletingUser, setDeletingUser] = useState(null);

  const handleDeleteUser = user => {
    fetch(`https://used-cars-mart-server.vercel.app/users/${user._id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`${user.name} is deleted successfully`);
          refetch();
        }
      })
      .catch(err => console.error(err))
  }

  const closeDeletingModal = () => setDeletingUser(null);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              {
                seller && <th>Verified</th>
              }
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) => <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {
                  seller && <td>
                    {
                      user.verified ? <FaCheckCircle color="#0000ff" /> : <label
                        onClick={() => handleVerifySeller(user)}
                        htmlFor="confirmation-modal"
                        className="btn btn-primary btn-sm"
                      >Verify Seller</label>
                    }
                  </td>
                }
                <td>
                  <label
                    onClick={() => setDeletingUser(user)}
                    htmlFor="confirmation-modal"
                    className="btn btn-error btn-sm text-white"
                  >Delete</label>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {
        deletingUser && <ConfirmationModal
          title={'Are you sure you want to delete?'}
          message={<>If you delete <strong>{deletingUser.name}</strong>, it cannot be <strong>recovered</strong>.</>}
          successButton="Delete"
          successButtonClass="btn-error text-white"
          successAction={handleDeleteUser}
          modalData={deletingUser}
          closeModal={closeDeletingModal}
        />
      }
    </div>
  );
}

export default UsersTable;
