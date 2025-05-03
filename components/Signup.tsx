"use client";

import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react'


export const Signup = () => {

    const session = useSession();

    return (
        <div>
            <div className="flex justify-between">
                <div>
                    {session.data?.user && <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" onClick={() => signOut()}>Logout</Button>}
                    {!session.data?.user && <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" onClick={() => signIn()}>Signin</Button>}
                </div>
            </div>
        </div>
    )
}
