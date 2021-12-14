import { AuthService } from "./auth.service";
import { UserService } from "./user.service"

const toBase64 = (value: string): string => {
    return Buffer.from(value).toString('base64')
}

describe("UserService Scenarios", () => {
    const authService = new AuthService;
    const userService = new UserService(authService);

    it("Should return false when an empty string is provided", () => {
        const valid = userService.validatePassword(toBase64(""));
        expect(valid).toBe(false);
    })  
    it("Should return false when an 'aa' invalid string is provided", () => {
        const valid = userService.validatePassword(toBase64("test:aa"));
        expect(valid).toBe(false);
    })  
    it("Should return false when an 'ab' invalid string is provided", () => {
        const valid = userService.validatePassword(toBase64("test:ab"));
        expect(valid).toBe(false);
    })  
    it("Should return false when an 'AAAbbbCc' invalid string is provided", () => {
        const valid = userService.validatePassword(toBase64("test:AAAbbbCc"));
        expect(valid).toBe(false);
    })  
    it("Should return false when an 'AbTp9!foo' invalid string is provided", () => {
        const valid = userService.validatePassword(toBase64("test:AbTp9!foo"));
        expect(valid).toBe(false);
    })  
    it("Should return false when an 'AbTp9!foA' invalid string is provided", () => {
        const valid = userService.validatePassword(toBase64("test:AbTp9!foA"));
        expect(valid).toBe(false);
    })  
    it("Should return false when an 'AbTp9 fok' invalid string is provided", () => {
        const valid = userService.validatePassword(toBase64("test:AbTp9 fok"));
        expect(valid).toBe(false);
    })  
    it("Should return true when an 'AbTp9!fok' valid string is provided", () => {
        const valid = userService.validatePassword(toBase64("test:AbTp9!fok"));
        expect(valid).toBe(true);
    })  
})