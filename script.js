/**
 * Captura uma string e valida se todo caractere
 * de parenteses ou colchetes estão abertos e fechados corretamente
 * e, ainda, valida se essa mesma string possui no máximo 255 caracteres.
 * Caso a string seja válida, retornará "YES", caso contrário, retornará "NO".
 * Para todas as validações, usa uma expressão regular.
 */
function validateString(string) {
    if (string.length === 0) {
        return "YES";
    }
    const regex = /(\(|\[)|(\)|\])/g;
    const match = string.match(regex);
    if (match) {
        const stack = [];
        for (let i = 0; i < match.length; i++) {
            if (match[i] === '(' || match[i] === '[') {
                stack.push(match[i]);
            } else {
                if (stack.length === 0) {
                    return 'NO';
                }
                const last = stack.pop();
                if (last === '(' && match[i] !== ')') {
                    return 'NO';
                }
                if (last === '[' && match[i] !== ']') {
                    return 'NO';
                }
            }
        }
        if (stack.length > 0) {
            return 'NO';
        }
    }
    if (string.length > 255) {
        return 'NO';
    }
    return 'YES';
}


/*
* Gera um número aleatório entre 1 e 10.
* Para cada um desses números aleatórios,
* gera uma string aleatória que pode conter até 255 carecteres.
* Essas strings apenas podem conter os caracteres "[", "]", "(", ")" ou "",
* sendo que, podem ser strings balanceadas e, às vezes, não.
* Por fim, chama a função validateString para validar a string gerada e
* imprime o resultado de cada uma dessas strings no console, usando o console.table.
*/
function generateRandomStrings() {
    const randomStrings = [];
    for (let i = 0; i < 10; i++) {
        const random = Math.floor(Math.random() * 255) + 1;
        let string = '';
        for (let j = 0; j < random; j++) {
            const randomChar = Math.floor(Math.random() * 5) + 1;
            if (randomChar === 1) {
                string += '[';
            } else if (randomChar === 2) {
                string += ']';
            } else if (randomChar === 3) {
                string += '(';
            } else if (randomChar === 4) {
                string += ')';
            } else{
                string += ''
            }
        }
        
        randomStrings.push({
            string,
            result: validateString(string),
        });
    }
    console.table(randomStrings);
}

generateRandomStrings();