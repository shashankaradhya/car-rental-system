import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {fetchAllBookingsAndUsers} from '../redux/middleware/carFetichingThunks';

export default function AdminComponent() {
    const user = useSelector(state=>state.auth.current_user);
    const users = useSelector(state=>state.carManagment.users);
    const bookings = useSelector(state=>state.carManagment.bookings);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllBookingsAndUsers())
    },[])
    

    if(user && user.email === "admin@admin.com")
    {
        console.log("admin logged");
        if(users && bookings)
        {
            return (
                <div className="container text-white">
                    <h1>Admin Info</h1>
                    <h2>Users Table</h2>
                    <table className="table table-striped text-white">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">email</th>
                        <th scope="col">id</th>
                        <th scope="col">bookingId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,ind)=>{
                            return(
                                <tr>
                                    <th scope="row">{ind}</th>
                                    <td>{user.email}</td>
                                    <td>{user.id}</td>
                                    <td>{user.bookings.length>0 ? user.bookings[0].id: ''}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                    <h2>Bookings table</h2>
                    <table className="table table-striped text-white">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">User Id</th>
                        <th scope="col">Car Id</th>
                        <th scope="col">From time</th>
                        <th scope="col">To time</th>
                        <th scope="col">Pickup Location</th>
                        <th scope="col">Billing Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking,ind)=>{
                            return(
                                <tr>
                                    <th scope="row">{ind}</th>
                                    <td>{booking.userId}</td>
                                    <td>{booking.carId}</td>
                                    <td>{booking.fromTime}</td>
                                    <td>{booking.toTime}</td>
                                    <td>{booking.pickupLocation}</td>
                                    <td>{booking.billingPrice}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                </div>
                )
            }
            else
            {
                return('');
            }
    }
    else
    {
        return('');
    }

}