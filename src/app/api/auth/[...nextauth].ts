import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const autOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    secret: process.env.JWT_SCRET as string
}
export default NextAuth(autOptions);