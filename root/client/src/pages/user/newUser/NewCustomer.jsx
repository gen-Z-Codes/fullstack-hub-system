import "./newCustomer.css";

export default function NewCustomer() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Customer</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Surname</label>
          <input type="text" placeholder="Kasu" />
        </div>
        <div className="newUserItem">
          <label>Other Names</label>
          <input type="text" placeholder="Efo" />
        </div>
    
        <div className="newUserItem">
          <label>Organization</label>
          <input type="password" placeholder="Student at University of Ghana" />
        </div>
        <div className="newUserItem">
          <label>Mobile Number</label>
          <input type="text" placeholder="+233 523 456 78" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="efo1@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Ashiaman | Ghana" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Select Group</label>
          <select className="newGroupSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
