const Manager = require('../lib/Manager');

describe('Manager', () => {
    test('Should create a manager instace', () => {
        const manager = new Manager('Greg', 5, 'Greg@email.com', '999-999-9999');

        expect(manager.name).toEqual('Greg');
        expect(manager.id).toEqual(5);
        expect(manager.email).toEqual('Greg@email.com');
        expect(manager.officeNumber).toEqual('999-999-9999');
    })
});