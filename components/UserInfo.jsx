import Link from 'next/link';
import st from '../styles/Home.module.scss'

const UserInfo = ({contact}) => {
    const {name,email,address,phone,website,company,username} = contact || {};
    const {street,city,zipcode} = address || {};

    if(!contact) {
        return <div>Empty</div>
    }

    return(
        <>
        <div className={st.user_info}>
            <div>
            <p>Username: {username}</p>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
            <p>Address: {`${street}, ${city}, ${zipcode}`}</p>
            
            </div>
        </div>
        </>
    )
}

export default UserInfo;