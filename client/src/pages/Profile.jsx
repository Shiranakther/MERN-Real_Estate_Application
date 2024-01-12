import{useSelector} from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div >
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col'>
      <img src={currentUser.avatar} alt= 'profile' className='w-24 h-24 rounded-full object-cover cursor-pointer self-center mt-2'  />
      <input type='text' placeholder='Name' className='border border-gray-300 p-2 rounded-lg my-2'  id='username'/>
      <input type='email' placeholder='Email' className='border border-gray-300 p-2 rounded-lg my-2' id='email'/>
      <input type='text' placeholder='Password' className='border border-gray-300 p-2 rounded-lg my-2' id='password'/>
      <button className='bg-slate-500 text-white p-2 rounded-lg my-2'>Update</button>

      </form>
      <div className="flex justify-between mt-5">
      
      <span className='text-red-700 cursor-pointer'>Delete Account</span>
      <span className='text-red-700 cursor-pointer'>Sign out</span>
    
      </div>
      </div>
      
  )
}
