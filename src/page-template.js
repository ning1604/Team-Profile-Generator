// function to generate HTML contents
function generatePageTemplate(allCards) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/636d17f0de.js" crossorigin="anonymous"></script>
    <title>Team Profile</title>
</head>

<body>
    <header class="d-flex justify-content-center align-items-center">
        <h1>My Team</h1>
    </header>

    <main class="d-flex flex-wrap justify-content-center">
        ${allCards}
    </main>




    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
</body>

</html>
`;
}

// card template for manager
const manager = managerInputs => {
    return `
    <div class="card m-3 customShadow" style="width: 18rem;">
            <div class="card-header bg-primary">
                <h2>${managerInputs.getName()}</h2>
                <h3><i class="fa-solid fa-mug-hot" id="icon"></i>${managerInputs.getRole()}</h3>
            </div>
            <div class="bg-light px-3 py-5">
                <ul class="list-group list-group-flush border">
                    <li class="list-group-item">ID: ${managerInputs.getId()}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${managerInputs.getEmail()}">${managerInputs.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${managerInputs.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    `;
}

// card template for engineer
const engineer = engineerInputs => {
    return `
    <div class="card m-3 customShadow" style="width: 18rem;">
            <div class="card-header bg-primary">
                <h2>${engineerInputs.getName()}</h2>
                <h3><i class="fa-solid fa-glasses" id="icon"></i>${engineerInputs.getRole()}</h3>
            </div>
            <div class="bg-light px-3 py-5">
                <ul class="list-group list-group-flush border">
                    <li class="list-group-item">ID: ${engineerInputs.getId()}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${engineerInputs.getEmail()}">${engineerInputs.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineerInputs.getGithub()}" target="_blank">${engineerInputs.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    `;
}

// card template for intern
const intern = internInputs => {
    return `
    <div class="card m-3 customShadow" style="width: 18rem;">
            <div class="card-header bg-primary">
                <h2>${internInputs.getName()}</h2>
                <h3><i class="fa-solid fa-user-graduate" id="icon"></i>${internInputs.getRole()}</h3>
            </div>
            <div class="bg-light px-3 py-5">
                <ul class="list-group list-group-flush border">
                    <li class="list-group-item">ID: ${internInputs.getId()}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${internInputs.getEmail()}">${internInputs.getEmail()}</a></li>
                    <li class="list-group-item">School: ${internInputs.getSchool()}</li>
                </ul>
            </div>
        </div>
    `;
}

// function to generate HTML contents
const generateHTML = data => {
    // array to store cards
    cardArray = [];

    // calls generate card functions and stores in cardArray
    for (i=0; i<data.length; i++) {
        if (data[i].getRole() === 'Manager') {
            cardArray.push(manager(data[i]))
        }
        if (data[i].getRole() === 'Engineer') {
            cardArray.push(engineer(data[i]))
        }
        if (data[i].getRole() === 'Intern') {
            cardArray.push(intern(data[i]))
        }
    }

    // joins all card template strings together 
    const allCards = cardArray.join('')

    // adds allCards to page template
    const pageTemplate = generatePageTemplate(allCards);
    return pageTemplate;
}

// exports generateHTML to index.js file
module.exports = generateHTML