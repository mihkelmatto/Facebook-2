export async function authenticate(email, password){
    return [true, 1];
}

export function failedConditions(password){
    const failed = [];

    if (password.length < 8 || password.length >= 15) {
        failed.push('length must be between 8 and 14 characters');
    }
    if (!/[A-Z]/.test(password)) {
        failed.push('includes at least one uppercase alphabet character');
    }
    if ((password.match(/[a-z]/g) || []).length < 2) {
        failed.push('includes at least two lowercase alphabet characters');
    }
    if (!/[0-9]/.test(password)) {
        failed.push('includes at least one numeric value');
    }
    if (!/^[A-Z]/.test(password)) {
        failed.push('starts with an uppercase letter');
    }
    if (!password.includes('_')) {
        failed.push('includes the character "_"');
    }

    return failed.join(", ");
};