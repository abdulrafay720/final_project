
import "./AddServices.css";

export default function AddServices() {
  return (
    <div>
   
    <h1 className="addservice-h1">Add a Service </h1>
    
    {/* <div className="w-50 mx-auto"> */}
    <form id="form" className="d-flex flex-column mb-5">
    <input className="mb-2" placeholder="Name"  />
    <textarea className="mb-2" placeholder="Description"  />
    <input className="mb-2" placeholder="Price" type="number"/>
    <select className="mb-2">
    <option value="" disabled selected>Add Location</option>
    <option value="category1">Keemari</option>
    <option value="category2">Karachi West</option>
    <option value="category3">Saddar</option>
  </select>
    <button value="Add Service" type="submit" className="btn btn-primary">Add Service</button>
  </form>
    {/* </div> */}
    </div>

  );

}