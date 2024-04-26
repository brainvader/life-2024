'use client'

import { createContext, useState, Dispatch, SetStateAction } from "react";
import { dummyUser } from "./user";
import { LIFEFormat } from "../life";

type UserContext = {
    user: LIFEFormat,
    setUser: Dispatch<SetStateAction<LIFEFormat>>
}

export const UserContext = createContext<UserContext>({
    user: dummyUser,
    setUser: () => { }
});

export default function UserProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [user, setUser] = useState(dummyUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}