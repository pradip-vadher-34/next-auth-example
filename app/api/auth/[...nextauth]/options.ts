import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your-placeholder",
        },
        password: {
          label: "Username",
          type: "text",
          placeholder: "your-placeholder",
        },
      },
      async authorize(credentials) {
        return new Promise((resolve) => {
          const user = {
            id: "1",
            name: "Pradip Vadher",
            username: "pradip-vadher",
            password: "Pradip@1234",
          };
          const { username, password } = credentials || {};

          if (user.username === username && user.password === password) {
            resolve(user);
          }
          resolve(null);
        });
      },
    }),
  ],
};
