import * as React from "react"
import { Inputbox, Signup } from "ui"
import axios from "axios"

export default function SignupPage(){
    return(
        <div>
            hulo
            <Signup onClickfun={async (email,password) => {
                const response = await axios.post("/api/signupback",{
                    email,
                    password
                })
                localStorage.setItem("token",response.data.token)
            }}/>
        </div>
    )
}
