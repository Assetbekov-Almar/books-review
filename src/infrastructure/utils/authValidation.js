const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const phoneMaskRegex = new RegExp(/^\+7 \((\d{3})\) (\d{3})-(\d{2})-(\d{2})$/);
const phoneRegex = new RegExp(/^7(\d{10})$/);

export const loginValidator = value => !value || value.trim() === '' ? 'The field cannot be empty': '';

export const emailValidator = value =>  !value || value.trim() === '' ? 'The field cannot be empty': (value.trim().split(/\s+/).length === 1 && emailRegex.test(value)) ? '' : 'Invalid email.';

export const phoneValidator = value => (!value || value.trim() === '' || value === '+_ (___) ___-__-__') || (phoneMaskRegex.test(value) || phoneRegex.test(value)) ? '' : 'Невалидный номер телефона.';

export const passwordValidator = value => !value ? 'The field cannot be empty' : value.trim() === '' ? 'Password cannot contains spaces' : value ? value.length >= 6 ? '' : 'Password must be at least 6 characters long.' : '';
