import React from "react"

export default function Form(){
    const [formData, setFormData] = React.useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "about": "",
        "signForNews": false,
        "employment": "",
        "favColor": ""
    })

    console.log(formData)
    
    function formEventHandler(event){
        const {name, type, checked, value} = event.target

        setFormData(oldData => {
            return {
                ...oldData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return(
        <form>
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={formEventHandler}
                value={formData.firstName}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={formEventHandler}
                value={formData.lastName}
            />
            <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={formEventHandler}
                value={formData.email}
            />
            <textarea
                type="textarea"
                name="about"
                placeholder=" Please, write about yourself"
                onChange={formEventHandler}
                value={formData.about}
            />
            <br/>
            <br/>
            <input
                type="checkbox"
                name="signForNews"
                onChange={formEventHandler}
                checked={formData.signForNews}
            />
            <label htmlFor="signForNews">Sign for newsletter?</label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    onChange={formEventHandler}
                    checked={FormData.employment}
                    value="full-time"
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    onChange={formEventHandler}
                    checked={FormData.employment}
                    value="part-time"
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    onChange={formEventHandler}
                    checked={FormData.employment}
                    value="unemployed"
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
            </fieldset>
            <br />
            <select
                    id="favColor"
                    value={formData.favColor}
                    onChange={formEventHandler}
                    name="favColor"
                >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
                <option value="white">White</option>
            </select>
        </form>
    )
}