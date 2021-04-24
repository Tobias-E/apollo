import { atom } from 'recoil';

export const inputStorage = atom({
	key: 'userInput',
	default: '',
});
