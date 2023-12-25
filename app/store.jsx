/* :::: ZUSTAND STORE :::: */

import { create } from 'zustand';
const useStore = create((set) => ({
    home: true,
 }));
export default useStore;
