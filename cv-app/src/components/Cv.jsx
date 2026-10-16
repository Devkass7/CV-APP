
import Forms from "./Forms";
import Header from "./Header";


export default function Cv(props){





    return <div className="main">
        {/* <Header /> */}

        <section>
            <p>Phone Number: {props.phone}</p>
            <p>Email: </p>


        </section>

        <section>
            <h2>Career Profile</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Qui tenetur vitae, labore ab distinctio, deserunt iusto facilis animi sequi, 
                 corrupti quod soluta nemo quis! Recusandae accusantium nam magni eligendi id.</p>
        </section>

        <section>
            <h2>Educational Background</h2>
        </section>


        <section>
            <h2>Work Experience</h2>
        </section>

        
    </div>
}