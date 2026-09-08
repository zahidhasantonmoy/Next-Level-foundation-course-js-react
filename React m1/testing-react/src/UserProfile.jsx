export default function UserProfile() {
    const name = "Zahid";
    const age = 22;
    const profession = "Web Developer";
    return (
        <>
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
        </div>
        </>
    );
}