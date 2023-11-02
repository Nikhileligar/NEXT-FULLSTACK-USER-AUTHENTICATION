import '../../css/signup.css'
const UserProfile = ({params}: any) => {
    return (
        <div className='flex'>
            <div className="UI-profile-contaner">
            <h1>profile</h1>
            
            <p> profile page <span className="param-id">{params.id}</span> </p>
        </div>
    </div>
        
    )
}

export default UserProfile;