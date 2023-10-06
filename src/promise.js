let myPromise = new Promise((resolve, reject) => {
    if (true){
        setTimeout(() => {
            resolve('i have succeeded');
        }, 1000)
    }
    else{
reject('i have failed')
    }

});

myPromise
.then(value => console.log(value))   // success
.catch(rejectValue => console.loga(rejectValue))  
 // failure

// if we're setting timeout there is no need to call reject hence no need for the if statement.

// promise

fetch('https://jsonplaceholder.typicode.com/users')
// got(fetch) our user 
.then(response => response.json())
// get the response, get respobnse .json which gives us back a promise
// passed it through a .then and converted to a json object  ?????
.then(users => {
    let firstUser = users[0];
    console.log(firstUser);
    // passed it to a next .then which finally has our array of users
    return fetch (
        'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
        // fetch our posts where the user id === our user.id
    );
})
.then(response => response.json())
// get back our response convet it to json again
.then(posts => console.log(posts))
// pass to our next then and console.log the finally; response



// async function
try{
    let myAsyncFunction = async () => {
        // await pauses the function execution until what is being awaited is completed and comes back with a value
        // we re able to cast this into a variable
    
        let usersResponse =  await fetch('https://jsonplaceholder.typicode.com/users')
        let users = await usersResponse.json()
        // returns a promise which resolves with the final json value of our users, we place that in a variable users
        let secondUser = users[1]
        console.log(secondUser)
        let postResponse = await fetch (
            'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
            // fetch our posts where the user id === our user.id
        )
        let posts = await postResponse.json()
        console.log(posts)
    } 
} catch (err) {

}