const Intern = require('../lib/Intern');

describe('Intern', () => {
    test('Should create an intern instance', () => {
        const intern = new Intern ('Sara', 3, 'Sara@email.com', 'school');

        expect(intern.name).toEqual('Sara');
        expect(intern.id).toEqual(3);
        expect(intern.email).toEqual('Sara@email.com');
        expect(intern.school).toEqual('school');
    })
});