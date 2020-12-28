import React,{useState} from 'react'
import DateTimePicker from 'react-datetime-picker';

export default function BookingFormComponent() {
    const [toDate,setToDate] = useState(new Date());
    const [fromDate,setFromDate] = useState(new Date());
    const [pickUpLocation,setPickUpLocation] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(toDate,fromDate,pickUpLocation);
        setPickUpLocation('');
    }
    return (
        <>
        <div className="container">
            <form className="text-center" style={{textAlign: 'center'}} onSubmit={submitHandler}>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-2 col-form-label text-white">From Time</label>
                        <DateTimePicker
                        onChange={date=>setToDate(date)}
                        value={toDate}
                        />
                </div>
                <div className="form-group row">
                    <label for="inputPassword" className="col-sm-2 col-form-label text-white">To Time</label>
                        <DateTimePicker
                        onChange={date=>setFromDate(date)}
                        value={fromDate}
                        />
                </div>
                <div className="form-group row">
                    <label for="pickup" className="col-sm-2 col-form-label text-white">Pick up location</label>
                    <input type="text" className="col-md-6 form-control" id="pickup" placeholder="Enter location" value={pickUpLocation} onChange={e=>setPickUpLocation(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Book Car</button>
                </form>
            </div>
        </>
    )
}
