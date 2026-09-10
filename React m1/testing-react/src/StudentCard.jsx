export default function StudentCard(props) {
    return (
        <>
        <div>
            <p>
                Name: {props.name}
            </p>
            <p>Department: {props.department}</p>
            <p> Semester: {props.semester}</p>
        </div>
        </>);
}