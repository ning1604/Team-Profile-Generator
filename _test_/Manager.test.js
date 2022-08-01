const Manager = require('../lib/Manager');

// tests office number value
test('tests office number value', () => {
    const manager = new Manager('Sam', 1, 'sam@fakemail.com', 2);
    expect(manager.officeNumber).toBe(2);
})

// tests getOfficeNumber() to get office number
test('gets office number', () => {
    const manager = new Manager('Sam', 1, 'sam@fakemail.com', 2);
    expect(manager.getOfficeNumber()).toBe(2);
})

// to see if getRole() returns role
test('gets manager role', () => {
    const manager = new Manager('Sam', 1, 'sam@fakemail.com', 2);
    expect(manager.getRole()).toBe('Manager');
})