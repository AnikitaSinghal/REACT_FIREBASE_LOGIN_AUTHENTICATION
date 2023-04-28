import '../profile.css'
import {useAuthValue} from '../context/AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../firebase'


function Profile() {
  const {currentUser} = useAuthValue()

  return (
      <div className='center'>
        <div className='profile'>
          <h1>Profile</h1>
          <h2>Hello world</h2>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
      </div>
  )
}

export default Profile
