import {create} from 'zustand';

type UserStore ={
    userSalary: string;
    setUserSalary: (salary:string) => void;
    history: string[];
    setHistory: (newSalary:string) => void;
    deleteHistory: (indexToRemove:number) => void;
};


export const useUserStore = create<UserStore>((set) => ({
    userSalary: '',
    history: [],
    setUserSalary: (salary) => set({userSalary: salary}),
    setHistory: (newSalary) => set ((newState) => ({
        history: [newSalary, ...newState.history].slice(0,8)
    })),
    deleteHistory: (indexToRemove) => set((state) => ({
        history: state.history.filter((_, index) => index !== indexToRemove)
    })),


}));