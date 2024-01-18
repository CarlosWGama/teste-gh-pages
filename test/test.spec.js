

describe('Teste básico',() => {
    //Exemplo de um teste
    test('Teste 1', () => {
        expect(1+1).toEqual(2);
        expect(1+1).not.toEqual(3);
    })
    //Exemplo de um teste
    test('Teste 2', () => {
        expect(1+1).toEqual(2);
    });
})
    