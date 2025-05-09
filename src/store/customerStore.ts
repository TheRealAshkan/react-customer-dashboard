import { create } from 'zustand';

interface CustomerState {
  firstname:string;
  lastname:string;
  mobile:string;
  email:string;
  image:string;
}

export const useCustomerStore = create<CustomerState>(() => ({
  firstname:'اشکان',
  lastname:'مهدی زاده',
  mobile:'09921938100',
  email:'test@gmail.com',
  image:'https://github.com/shadcn.png',

}));
