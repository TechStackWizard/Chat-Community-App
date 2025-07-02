import {Link} from 'react-router-dom'
export default function Navbar(){
    return (
        <div style={{display:'flex', justifyContent: 'space-between', backgroundColor:'teal', padding:'5px'}}>
            <h3 style={{display:'flex' , gap: '5px'}}>
                <img src="" alt="Logo.png" />
                ChatComty
            </h3>
            <ul style={{display:'flex' , gap: '15px'}}>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    )
}