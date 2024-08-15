import { BASE_API_URL, SYSTEM_KEY } from '@/config/app';
import { setToken } from '@/hooks/auth/useAuth';
import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Phone or Email Address ', type: 'text' },
                password: { label: 'Password', type: 'password' },
                temp_user_id: { label: 'Temp User ID', type: 'hidden' },
                login_by: { label: 'Login By', type: 'hidden', value: 'email' },
            },
            async authorize(credentials) {
                try {
                    // console.log(credentials, 'next auth credentials');
                    const response = await axios.post(`${BASE_API_URL}/auth/login`, {
                        email: credentials.email,
                        password: credentials.password,
                        login_by: credentials.login_by,
                        temp_user_id: credentials.temp_user_id,
                        user_type: "customer"
                    }, {
                        headers: {
                            "System-Key": SYSTEM_KEY
                        }
                    });

                    if (response.data) {
                        // If login is successful, return the user object
                        return response.data
                    } else {
                        // If login fails, return null
                        return null;
                    }
                } catch (error) {
                    // Handle errors appropriately
                    console.error('Login error:', error);
                    return null;
                }
            },
        })
    ],
    pages: {
        signIn: '/auth/login', // Custom login page
    },
    callbacks: {
        async jwt({ token, user }) {
            // Persist the user data in the token
            if (user?.user) {
                token = user
            }

            return token;
        },
        async session({ session, token }, _req) {
            // Save the token data in the session
            session.user = token.user
            session.access_token = token.access_token


            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET, // Set a strong secret in your .env file
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

