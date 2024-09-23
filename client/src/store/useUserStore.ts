import { create } from 'zustand';

export interface userState {
  user: User | null;
  userData: (userName: string) => Promise<void>;

}
export interface FinanzasItem {
  mes: string;
  ingreso: Array<{
    title: string;
    priceIngreso: string;
    id: string;
  }>;
  egreso: Array<{
    title: string;
    priceEgreso: string;
    id: string;
  }>;
}

export interface User {
  userName: string;
  id: string;
  notas: string[];
  finanzas: FinanzasItem[];
}

export const useUserStore = create<userState>((set) => ({
  user: null,
  userData: async (userName) => {
    try {
      const response = await fetch(`http://localhost:3000/userName?userName=${userName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Usuario no encontrado');
      }

      const data: User = await response.json();

      set({ user: data });
    } catch (error) {
      console.error(error);
    }
  }

}));