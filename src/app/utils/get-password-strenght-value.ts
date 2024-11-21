import zxcvbn from 'zxcvbn';

export const getPasswordStrengthValue = (password: string): number => {

    if(!password){
        return 0;
    }

    const result = zxcvbn(password);

    const WEAK_PASSWORD = result.score <= 1;
    const MEDIU_PASSWORD = result.score <= 3; 

    if(WEAK_PASSWORD){
        return 30;
    } 
    else if (MEDIU_PASSWORD){
        return 60;
    }
    else {
        return 100;
    }
}