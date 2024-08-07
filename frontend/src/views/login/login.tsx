import { SignedIn, UserButton, SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react';

const Login = () =>{
    return (
        <div className='sign-in-container'>
            <SignedOut>
                <SignInButton mode='modal' />

                <SignUpButton mode='modal' />
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    );
};

export default Login;