const Users = ({userList}) => {
     
    return (
        <>
            <h3> Lista de Usuarios</h3>
            <ul>
            {userList.map(function(oneUser){
                return  (
                    <li key={oneUser.id}>
                        <h5>{`${oneUser.id} - ${oneUser.first_name} ${oneUser.last_name}`}</h5>
                        <a href={`mailto: ${oneUser.email}`}>{`${oneUser.email}`}</a>
                    </li>
                    )
            })}
            </ul>
        </>
    )
}

export default Users;