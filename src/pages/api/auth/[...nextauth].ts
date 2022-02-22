import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      name: 'read:user'
    }),
  ],
})
