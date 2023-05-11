import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import apiClient from '../apiClient';

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const response = await apiClient.post(
          "/api/dj-rest-auth/login/",
          credentials,
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          alert("correct user");
          return response;
        }
        return null;
      },
      pages: {
        signIn: "/login",
      },
    }),
  ],
};

export default NextAuth(authOptions)