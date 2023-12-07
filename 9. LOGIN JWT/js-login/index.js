
const login = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = {
        email: form.get('email'),
        password: form.get('password')
    };

    const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        body: JSON.stringify(data)
    })

    if(!response.ok)
    {
        const message = await response.text();
        alert(message);
        return;
    }

    const responseData = await response.json();

    if(!responseData.x_access_token)
    {
        alert('Invalid token');
        return;
    }

    //redirect to home page

    const response2 = await fetch('http://localhost:8000/users', {
        method: 'GET',
        headers: {
            'x-access-token': responseData.x_access_token
        }
    })

    if(!response2.ok)
    {
        const message = await response2.text();
        alert(message);
        return;
    }

    const responseData2 = await response2.json();


    const html = `
    <div>
        <h1>Home</h1>
        <p>Welcome ${responseData.data.name} ${responseData.data.lastname}</p>


        <h2>Users</h2>
        <ul>
            ${responseData2.map(user => `<li>${user.email}</li>`).join('')}
        </ul>
    </div>
    `;

    document.getElementById("main").innerHTML = html;
}