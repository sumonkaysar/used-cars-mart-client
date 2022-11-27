import { useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../../../Shared/ConfirmationModal/ConfirmationModal";

const UsersTable = ({ users, refetch }) => {
  const [deletingUser, setDeletingUser] = useState(null);
  const [makeUserAdmin, setMakeUserAdmin] = useState(null);

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({role: "admin"})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success(`Made ${user.name} an admin successfully`);
        refetch();
      }
    })
    .catch(err => console.error(err))
  }

  const handleDeleteUser = user => {
    fetch(`http://localhost:5000/users/${user._id}`, {
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
  const closeMakeAdminModal = () => setMakeUserAdmin(null);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) => <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <label
                    onClick={() => setMakeUserAdmin(user)}
                    htmlFor="confirmation-modal"
                    className="btn btn-primary btn-sm"
                  >Make Admin</label>
                </td>
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
      {
        makeUserAdmin && <ConfirmationModal
          title={<>Are you sure you want to make <span className="text-primary">{makeUserAdmin.name}</span> an admin?</>}
          message=''
          successButton="Make Admin"
          successButtonClass="btn-primary"
          successAction={handleMakeAdmin}
          modalData={makeUserAdmin}
          closeModal={closeMakeAdminModal}
        />
      }
    </div>
  );
}

export default UsersTable;
