export function displayPosts(array) {
    array.forEach((post) => {
        const { title: postTitle, body: postContent } = post;

        const card = document.createElement('div');

        const title = document.createElement('h3');
        title.textContent = postTitle;

        const content = document.createElement('p');
        content.textContent = postContent;

        card.append(title, content);

        document.body.append(card);
    });
}
