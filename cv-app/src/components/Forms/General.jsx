export default function General({ data, onChange }) {
  return (
    <div className="personal">
      <h2>Name and Contact Details</h2>
      <div className="names">
        <div>
          <label htmlFor="fname">FIRST NAME</label>
          <input type="text" id="fname" name="fname" placeholder="John"
            value={data.fname} onChange={onChange} required />
        </div>

        <div>
          <label htmlFor="lname">LAST NAME</label>
          <input type="text" id="lname" name="lname" placeholder="Doe"
            value={data.lname} onChange={onChange} required />
        </div>
      </div>

      <div className="contact">
        <div>
          <label htmlFor="phone">PHONE NUMBER</label>
          <input type="tel" id="phone" name="phone" placeholder="0244 000 000"
            autoComplete="tel" value={data.phone} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" placeholder="john.doe@example.com"
            autoComplete="email" value={data.email} onChange={onChange} />
        </div>
      </div>

      <div className="careerProfile">
        <label htmlFor="profile">Career Profile</label>
        <textarea name="profile" id="profile" placeholder="A short summary of your experience and goals"
          value={data.profile} onChange={onChange}></textarea>
      </div>
    </div>
  );
}
