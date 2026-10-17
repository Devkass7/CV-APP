
export default function Header(props){
        return (
            <header>
                {props.fname} ? <h1>{props.fname} {props.lname} CV</h1> :<h1>Welcome to the  CV Generator</h1>
            </header>
        )
};