export default function General() {
  return (
    <div className="personal">
      <h2>Name and Contact Details</h2>
      <div className="names">
        <div>
          <label htmlFor="fname">FIRST NAME</label>
          <input type="text" id="fname" name="fname" defaultValue="John" required/>
        </div>

        <div>
          <label htmlFor="lname">LAST NAME</label>
          <input type="text" id="lname" name="lname" defaultValue="Doe" required/>
        </div>
      </div>

      <div className="contact">
        <div>
          <label htmlFor="phone">PHONE NUMBER</label>
          <input type="tel" id="phone" name = "phone" defaultValue="0244 xxx xxx" autoComplete="tel"  required/>
        </div>

        <div>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" defaultValue="jimroy@example.com" autoComplete="email" required/>
        </div>
      </div>

      <div className="careerProfile">
        <label htmlFor="profile">Career Profile</label>
        <textarea name="profile" id="profile" defaultValue="I am auidgfureew"></textarea>
      </div>
    </div>
  );
}
