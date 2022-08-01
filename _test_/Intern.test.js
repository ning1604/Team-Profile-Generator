const Intern = require('../lib/Intern');

// tests school value
test('tests intern school name', () => {
    const intern = new Intern('Sam', 1, 'sam@fakemail.com', 'fakeSchool');
    expect(intern.school).toBe('fakeSchool');
})

// tests getSchool() to get school name
test('gets school name', () => {
    const intern = new Intern('Sam', 1, 'sam@fakemail.com', 'fakeSchool');
    expect(intern.getSchool()).toBe('fakeSchool');
})

// to see if getRole() returns role
test('gets intern role', () => {
    const intern = new Intern('Sam', 1, 'sam@fakemail.com', 'fakeSchool');
    expect(intern.getRole()).toBe('Intern');
})