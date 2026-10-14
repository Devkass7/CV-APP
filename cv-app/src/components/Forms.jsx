import General from "./Forms/General";
import WorkExperience from "./Forms/WorkExperience";
import EducationalBackground from "./Forms/Educational";



export default function Forms(){

function HandleSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.currentTarget)

    console.log(formData.get("phone"))
}

    return <form onSubmit={HandleSubmit}>
         <General />
         <EducationalBackground />
         <WorkExperience />

       <button>GENERATE CV</button>           
    </form>
}