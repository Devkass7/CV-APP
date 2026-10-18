export default function Header({ fname, lname }) {
  const fullName = [fname, lname].filter(Boolean).join(" ");

  return (
    <header>
      <h1>{fullName ? `${fullName}'s CV` : "Welcome to the CV Generator"}</h1>
    </header>
  );
}
