import {create} from 'zustand';

type UserStore ={
    userSalary: string;
    setUserSalary: (salary:string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
    userSalary: '',

    setUserSalary: (salary) => set({userSalary: salary}),
}));