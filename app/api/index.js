const REQUEST_URL = `http://118.25.190.29:3000`;

export const getCommentList = () => fetch(`${REQUEST_URL}/comments`);

export const getFollowList = () => fetch(`${REQUEST_URL}/users/followList`);
