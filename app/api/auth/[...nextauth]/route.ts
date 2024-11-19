import authOptions from "@/app/auth/authOptions";
import NextAuth from "next-auth";


const handler = NextAuth(authOptions)

console.log("NextAuth API route accessed");

export { handler as GET, handler as POST };

