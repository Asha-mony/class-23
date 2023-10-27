console.log('connect');

function loadAllData(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display(data))
}



function display(usersInfo) {
    console.log(usersInfo);

    // for (const user of usersInfo) {
    //     console.log(user);
    // }


    const containerDiv = document.getElementById('cointainer')
    usersInfo.forEach(user => {
        // console.log(user);
        const div = document.createElement('div')
        // div.innerHTML = `${user.name}`
        div.classList.add('item')

        div.innerHTML = `
        <h1>NAME:${user.name}</h1>
        <h2>PHONE:${user.phone}</h2>
        <h3>Email:${user.email}</h3>
        `


        containerDiv.appendChild(div)
    });


}