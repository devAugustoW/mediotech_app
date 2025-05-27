import { createContext, useState } from 'react';
import type { ReactNode } from 'react';


// Criar um tipo para usuário
type User = {
   id: number;
   name: string;
   email: string,
   role: 'COORDINATOR' | 'TEACHER' | 'STUDENT';
}


// Criar um tipo para o contexto
type AuthContextType = {
   user: User | null;
   isAuthenticated: boolean;
}


// Inicializar o contexto
export const AuthContext = createContext<AuthContextType>({
   user: null,
   isAuthenticated: false
});


// Inicializar o Provider
export function AuthProvider({ children } : {children: ReactNode }) {
   // estado para armazenar usuário e token
   const [user, _setUser] = useState<User | null>(null);

   // validação
   const value = {
      user,
      isAuthenticated: user !== null
   };


   // Retorno a função com o 'children'
   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   );
};