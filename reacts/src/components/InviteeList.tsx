import React from "react";

export interface IProps {
    users: {
      name: string;
      avatar: string;
      age: number;
      note?: string;
    }[]
  }

const InviteeList: React.FC<IProps> = ({ users }) => {
    const renderInvitees = (): JSX.Element[] => {
        return users.map((user) => (
            <li key={user.name}>
                <h3> {user.name} </h3>
                <p> {user.age} years old </p>
                {user.note ? (<p> {user.note} </p>) : null}
                <hr />
            </li>
        ))
    }

    return (
        <>
            <div>
                <ul>
                    {renderInvitees()}
                </ul>
            </div>
        </>
    )
};

export default InviteeList;