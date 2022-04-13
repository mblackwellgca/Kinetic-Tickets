const commentFormHandler = async function (event) {
    event.preventDefault();

    const post_id = document.querySelector('input[name="post-id"]').value.trim();
    const body = document.querySelector('textarea[name="comment-body"]').value.trim();
    
    if (body) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                body,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload();
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete post');
      }
    }
  };

  // const uploadFormHandler = async (event) => {
  //   if (1> 0) {
  //     const fakename = document.querySelector('input[name="sampleFile"]').value.trim();
  //     const name = fakename.slice(12);
  //     console.log(name);
  //     const comment = document.getElementById('.commentList');
  //     const newComment = document.createElement('img');
  //     newComment.setAttribute("class", "card-body");
  //     newComment.setAttribute("src", `public/upload/${name}`);
  //     comment.appendChild(newComment);
      
  //     } else {
  //       alert('Failed to upload image');
  //     }
    
  // };

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);
document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);
// document
//     .querySelector('#upload')
//     .addEventListener('click', uploadFormHandler);   