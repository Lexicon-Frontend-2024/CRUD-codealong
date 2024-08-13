console.log('Hej från script');

/* async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await response.json();
    console.log(posts);
    document.getElementById('output').innerText = JSON.stringify(
      posts,
      null,
      2
    );
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData(); */
/* 
async function createPost() {
  try {
    let newPostResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'annika',
          body: 'lindberg',
          userId: 1,
        }),
      }
    );

    let newPost = await newPostResponse.json();
    console.log(newPost);

    // Hämta alla inlägg igen för att visa den uppdaterade listan
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await response.json();

    // Lägg till det nya inlägget till listan av befintliga inlägg
    posts.push(newPost);

    // Visa uppdaterad lista med inlägg i webbläsaren
    document.getElementById('output').innerText = JSON.stringify(
      posts,
      null,
      2
    );
  } catch (error) {
    console.error('Error:', error);
  }
}

createPost();

console.log('PUT-anropet!');

console.log('Lets PUTa!');

async function updatePost() {
  try {
    let updatePostResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts/3',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 1,
          title: 'PUT-uppdaterad title',
          body: 'updated body',
          userId: 3,
        }),
      }
    );

    let updatedPost = await updatePostResponse.json();
    console.log(updatedPost);

    // Hämta den nuvarande listan från sidan
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await response.json();

    // Uppdatera den specifika posten i listan
    let index = posts.findIndex((post) => post.id === updatedPost.id);
    if (index !== -1) {
      posts[index] = updatedPost;
    }
    // Sortera om listan om du vill visa det senaste uppdaterade inlägget högst upp
    posts.sort((a, b) => b.id - a.id);

    // Visa den uppdaterade listan i webbläsaren
    document.getElementById('output').innerText = JSON.stringify(
      posts,
      null,
      2
    );
  } catch (error) {
    console.error('Error:', error);
  }
}

updatePost(); */

async function fetchUsers() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    console.log('All Users:', users);
    return users;
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchUsers();

async function createUser() {
  try {
    console.log('Creating user...');
    let createUserResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'UserToDelete',
          username: 'delete_me',
          email: 'delete@placeholder.com',
        }),
      }
    );

    let newUser = await createUserResponse.json();
    console.log('Created User:', newUser);

    // Lägg till den nya användaren i den existerande listan
    let users = await fetchUsers();
    console.log('Fetched Users:', users);

    users.push(newUser);
    console.log('Updated Users List:', users);

    document.getElementById('output').innerText = JSON.stringify(
      users,
      null,
      2
    );

    return newUser;
  } catch (error) {
    console.error('Error:', error);
  }
}
createUser();

async function deleteUser(userId) {
  try {
    let deleteResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        method: 'DELETE',
      }
    );

    if (deleteResponse.ok) {
      console.log(`User with id ${userId} deleted`);

      // Uppdatera listan och visa igen
      let users = await fetchUsers();
      users = users.filter((user) => user.id !== userId);
      document.getElementById('output').innerText = JSON.stringify(
        users,
        null,
        2
      );
    } else {
      console.error('Failed to delete');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
async function executeCRUD() {
  let newUser = await createUser();
  deleteUser(newUser.id);
}
executeCRUD();
