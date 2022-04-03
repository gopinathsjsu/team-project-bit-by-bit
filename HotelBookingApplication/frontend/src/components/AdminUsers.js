import {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import axios from 'axios';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import moment from "moment";

const AdminUsers = () => {
    const userName = "Anna";
    const [usersData, setUsersData] = useState([]);
    const [deletedUserFlag, setDeletedUserFlag] = useState(false);

    const deleteUser = async (userId) => {
        try {
            const result = await axios.delete(`/users/${userId}`);
            setDeletedUserFlag(!deletedUserFlag);
        } catch (error) {
            
        }
    }

    useEffect(async () => {
      let result = await axios.get(`/users/`);
      setUsersData(result?.data);
      console.log("Booking ===>", usersData);
    }, [deletedUserFlag]);
    

  return <>
    <section class="h-100 gradient-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-10 col-xl-8">
        <div class="card" style={{borderRadius: "10px"}}>
          <div class="card-header px-4 py-5">
           <center> <h5 class="text-muted mb-0">Users Information </h5></center>
          </div>
          <div class="card-body p-4">
            <div class="card shadow-0 border mb-4">
              {console.log("Info ===>", usersData)}
            {usersData.map((user, index) => {
                console.log("Printing user ===>", user);
                return <>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-3">
                          <img src={user?.imageUrl} class="img-fluid" alt="Image" />
                        </div>
                        <div class="col-xl-3 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mp-100"><b>Username</b>{user?.username}</p>
                        </div>
                        <div class="col-xl-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"><b>Email</b> {user?.email}</p>
                        </div>
                        <div class="col-xl-2 text-center d-flex justify-content-center align-items-center">
                          <p class="text-muted mb-0 small"><b>Rewards</b> {user?.rewards}</p>
                        </div>
                        
                      </div>
                      <div class="d-flex flex-row justify-content-center align-items-center" >
                        <NavLink to="/admin/users"><a href="" class="ml-1 book btn btn-secondary btn-style" onClick={()=> deleteUser(user._id)}>Delete User</a></NavLink>
                      </div>
                    </div>
                  {usersData.length !== index+1 ? <hr class="mb-4" style={{ backgroundColor: "#e0e0e0", "opacity": 1 }} /> : null}
                  </>
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
</>
}

export default AdminUsers;