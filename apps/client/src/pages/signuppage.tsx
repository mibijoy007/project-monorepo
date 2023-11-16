import * as React from "react"
import { Inputbox, Signup } from "ui"

export default function SignupPage(){
    return(
        <div>
            hulo
            <Signup onClickfun={async (email,password) => {
                alert(email)
                alert(password)
                // const response = await axios.post("admin.kirat.com/signup",{
                //     email,
                //     password
                // })

            }}/>
        </div>
    )
}
