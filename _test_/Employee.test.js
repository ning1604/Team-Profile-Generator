const Employee = require('../lib/Employee');

// to see if object is created
test('creates a new employee object', () => {
    const employee = new Employee('Sam', 1, 'sam@fakemail.com');
    expect(typeof(employee)).toBe('object');
})

// to see if employee name, id, and email is retrieved
test('tests employee name, id, and email', () => {
    const employee = new Employee('Sam', 1, 'sam@fakemail.com');
    expect(employee.name).toBe('Sam');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('sam@fakemail.com');
})

// to see if getName() returns employee name
test('gets employee name', () => {
    const employee = new Employee('Sam', 1, 'sam@fakemail.com');
    expect(employee.getName()).toBe('Sam');
})

// to see if getId() returns employee id
test('gets employee id', () => {
    const employee = new Employee('Sam', 1, 'sam@fakemail.com');
    expect(employee.getId()).toBe(1);
})

// to see if getEmail() returns employee email
test('gets employee email', () => {
    const employee = new Employee('Sam', 1, 'sam@fakemail.com');
    expect(employee.getEmail()).toBe('sam@fakemail.com');
})

// to see if getRole() returns role
test('gets employee role', () => {
    const employee = new Employee('Sam', 1, 'sam@fakemail.com');
    expect(employee.getRole()).toBe('Employee');
})