// require Employee.js for testing purposes
const Employee = require('../lib/Employee');

// basic employee template for all team members
describe('Employee', () => {
    test('Should create an employee instance', () => {
        const employee = new Employee (
            'Vince', '1', 'test@email.com'
        )
        expect(employee.name).toEqual('Vince');
        expect(employee.id).toEqual('1');
        expect(employee.email).toEqual('test@email.com');
    })
})
