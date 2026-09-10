export default function UserProfile(props) {
   
    return (
        <>
        <div>
            <p>
                Name: {props.name}
            </p>
            <p>Role: {props.role}</p>
            <p> Status : {props.IsOnline ? "Online" : "Offline"}</p>
            <p> {props.IsAdmin ? <button> Send Message </button> : null}</p>
            
        </div>
            
           
        </>
    );
}