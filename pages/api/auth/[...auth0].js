import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth()


//  Este Componente Genera 3 Links 
//  href="//api/auth/login"
//  href="//api/auth/logout"
//  href="//api/auth/callback -> A donde redirige cuando hace login"
//  href="//api/auth/me -> Informacion del Usuario"