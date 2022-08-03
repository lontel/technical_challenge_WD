import phoneService from '../services/phone.services'
// import { useState } from 'react'


const PhoneList = () => {

    // const [phone, setPhones] = useState([])

    const listOfPhones = () => {
        phoneService
            .getAllPhones()
            .then(({ data }) => {
                // setPhones(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>List of phones</h1>

        </>
    )
}

export default PhoneList

// {
//     phonesList.map(phone => {
//         console.log(phone, '+++++++++')
//     })
// }