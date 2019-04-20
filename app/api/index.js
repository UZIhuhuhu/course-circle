import qs from 'qs';

const REQUEST_URL = `http://118.25.190.29:3000`;

export const getCommentList = () => fetch(`${REQUEST_URL}/comments`);

export const addComment = (title, text, author = `Salt`) =>
  fetch(
    `${REQUEST_URL}/addComment?${qs.stringify({
      title,
      text,
      author
    })}`
  );

export const getFollowList = () => fetch(`${REQUEST_URL}/users/followList`);
