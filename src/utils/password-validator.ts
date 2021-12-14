export class PasswordValidator {
    constructor() {}

    static isValidPassword(password: string): boolean{
        const validPassword = this.checkPasswordStrength(password) && this.checkUniqueCharacters(password);
        return validPassword;
    }

    private static checkPasswordStrength (password): boolean {
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()-+]).{9,}$/.test(password);
    }

    private static checkUniqueCharacters (password): boolean {
        const setPassword = new Set();

        for(const character of password) {
            setPassword.add(character);
        }

        return setPassword.size === password.length;
    }
}