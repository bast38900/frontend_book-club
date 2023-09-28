import Logout from './Logout'

type Props = {
    currUser: any,
    setCurrUser: any
}

export const User = ({currUser, setCurrUser}: Props) => {
    return (
        <div>
            <div style={{marginBottom: 25}}>
                <p>Hello {currUser.email}</p>
            </div>
            <div>
                <Logout setCurrUser={setCurrUser}/>
            </div>
        </div>

    )
}