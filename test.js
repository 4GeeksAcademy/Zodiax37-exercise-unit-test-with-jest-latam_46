const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test para suma
test('Suma 14 + 9 y espera 23 como resultado', () => {
    expect(sum(14, 9)).toBe(23);
});

// Test de euros a dólares
test('Convierte 3.5 euros a dólares (1 EUR = 1.07 USD)', () => {
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(expected);
});

// Test de dólares a yenes
test('Convierte 3.5 dólares a yenes (1 EUR = 1.07 USD, 1 EUR = 156.5 JPY)', () => {
    const expected = (3.5 / 1.07) * 156.5;
    expect(fromDollarToYen(3.5)).toBe(expected);
});

// Test de yenes a libras
test('Convierte 3.5 yenes a libras (1 EUR = 156.5 JPY, 1 EUR = 0.87 GBP)', () => {
    const expected = (3.5 / 156.5) * 0.87;
    expect(fromYenToPound(3.5)).toBe(expected);
});
