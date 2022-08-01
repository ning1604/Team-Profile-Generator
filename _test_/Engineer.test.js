const Engineer = require('../lib/Engineer');

// tests github value
test('tests engineer github username', () => {
    const engineer = new Engineer('Sam', 1, 'sam@fakemail.com', 'githubUsername');
    expect(engineer.github).toBe('githubUsername');
})

// tests getGithub() to get GitHub username
test('gets GitHub username', () => {
    const engineer = new Engineer('Sam', 1, 'sam@fakemail.com', 'githubUsername');
    expect(engineer.getGithub()).toBe('githubUsername');
})

// to see if getRole() returns role
test('gets engineer role', () => {
    const engineer = new Engineer('Sam', 1, 'sam@fakemail.com', 'githubUsername');
    expect(engineer.getRole()).toBe('Engineer');
})