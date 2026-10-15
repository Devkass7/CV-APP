export default function General() {
  return (
    <div className="personal">
      <h2>Name and Contact Details</h2>
      <div className="names">
        <div>
          <label htmlFor="fname">FIRST NAME</label>
          <input type="text" id="fname" name="fname" value="John" />
        </div>

        <div>
          <label htmlFor="lname">LAST NAME</label>
          <input type="text" id="lname" name="lname" value="Doe" />
        </div>
      </div>

      <div className="contact">
        <div>
          <label htmlFor="phone">PHONE NUMBER</label>
          <input type="tel" id="phone" name = "phone" value="0244 xxx xxx" autoComplete="tel"/>
        </div>

        <div>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email"name="email" value="jimroy@example.com" autoComplete="email"/>
        </div>
      </div>

      <div className="careerProfile">
        <label htmlFor="profile">Career Profile</label>
        <textarea name="profile" id="profile" value="I am auidgfureew"></textarea>
      </div>
    </div>
  );
}
