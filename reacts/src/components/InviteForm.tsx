import React, { useState } from "react";
import { OnInviteFunc } from "../App";

type HTMLInputOrTextareaElement = HTMLInputElement | HTMLTextAreaElement;

interface IProps {
    onInvite: OnInviteFunc
}

const InviteForm: React.FC<IProps> = ({ onInvite }) => {
    const [input, setInput] = useState({
        name: "",
        avatar: "",
        age: "",
        note: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputOrTextareaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if (!input.name || !input.age || !input.avatar) {
            alert("Please fill all the required fields")
            return
        }

        onInvite({
            ...input,
            age: parseInt(input.age)
        });
        setInput({
            name: "",
            avatar: "",
            age: "",
            note: "",
        })
    }

    return (
        <div>
            <input onChange={handleChange} name="name" type="text" placeholder="name" value={input.name} /> <br />
            <input onChange={handleChange} name="avatar" type="text" placeholder="avatar" value={input.avatar} /> <br />
            <input onChange={handleChange}  name="age" type="number" placeholder="age" value={input.age} /> <br />
            <textarea onChange={handleChange} name="note" value={input.note}></textarea> <br />
            <button onClick={handleClick}> Invite User </button>
        </div>
    )
};

export default InviteForm;