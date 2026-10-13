
export default function General(){
    return <>
    <div>
    <label htmlFor="fname">FIRST NAME</label>
    <input type="text" id="fname" placeholder="John" /></div>

    <div>
    <label htmlFor="lname">LAST NAME</label>
    <input type="text" id="lname" placeholder="Doe" />
</div>
<div>
    <label htmlFor="phone">PHONE NUMBER</label>
    <input type="tel" id="phone" placeholder="0244 xxx xxx" />
</div>

<div>
    <label htmlFor="email">EMAIL</label>
    <input type="email" id="email" placeholder="jimroy@example.com" /></div>
    </>
}