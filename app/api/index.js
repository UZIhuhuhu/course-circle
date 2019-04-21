import qs from 'qs';

const REQUEST_URL = `http://118.25.190.29:3000`;

export const getCommentList = () => fetch(`${REQUEST_URL}/comments`);

export const getCollection = () => fetch(`${REQUEST_URL}/myComment`);

export const getCommentDetail = id => fetch(`${REQUEST_URL}/comment${id}`);

export const addComment = (title, text, author = `Salt`) =>
  fetch(`${REQUEST_URL}/addComment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: qs.stringify({
      title,
      text,
      author
    })
  });

export const addReply = (text, commentId, author = `Salt`) => {
  fetch(`${REQUEST_URL}/addReply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: qs.stringify({
      text,
      commentId,
      author
    })
  });
};

export const getFollowList = () => fetch(`${REQUEST_URL}/users/followList`);
