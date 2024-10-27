import { useState } from "react";

export default function FBSignIn(props: any) {
    // let email = "";  // state (personal data)
    // let password = "";
const [email, setEmail]= useState ("");
const [password, setPassword]= useState ("");

    

    const updateEmail = () => {
        email = "umama@gmail.com"
    }
    const validateEmail = () => {

    }
    const submit = () => {

    }
    return (
        <>
            {/* <h1>This is home page</h1> */}
        </>
    )
}