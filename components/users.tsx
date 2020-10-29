const Users = (props) => {
  return (<>
    {props.data.map(user => <div key={user.id}>{user.name}</div>)}
 </>)
 }
;

export default Users;