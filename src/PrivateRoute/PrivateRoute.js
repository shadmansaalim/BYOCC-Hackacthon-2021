import { useRouter } from 'next/router';
import React from 'react';
import useAuth from '../hooks/useAuth';
import { CircularProgress } from '@chakra-ui/progress';

const PrivateRoute = ({ children }) => {
    // Fetch the user client-side
    const { user, isLoading } = useAuth();
    const router = useRouter();

    // Server-render loading state
    if (isLoading) {
        return <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <CircularProgress isIndeterminate color="green.300" />
        </div>
    }
    if (!user.email) {
        router.replace('/login')
    }

    // Once the user request finishes, show the user
    return (
        <div>
            {children}
        </div>
    )
};

export default PrivateRoute;