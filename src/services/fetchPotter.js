const ENDPOINT = 'https://hp-api.herokuapp.com/api/characters';

const fetchPotter = () => fetch(ENDPOINT).then(res => res.json())

export {fetchPotter};
