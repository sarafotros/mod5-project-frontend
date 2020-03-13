const baseUrl = 'http://localhost:3001';

const userUrl = baseUrl + '/users';
const loginUrl = baseUrl + '/login';
const validateURL = baseUrl + '/validate';
const signupURL = baseUrl + '/create';
const serviceUrl = baseUrl + '/services'

const get = (url) => (fetch(url).then(resp => resp.json()));

const getToken = (url, token) =>(
	fetch(url, { headers: { 'Authorization': token } }).then(resp => resp.json())
)

const post = (url, obj) => {
	const configObject = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify(obj)
	}
	return fetch(url, configObject);
}


const getUsers = () => get(userUrl);

const getServices = () => get(serviceUrl);

const logingFetch = (body) => {
	return post(loginUrl, body).then(resp => resp.json());
};


const validate = token => {
	return getToken(validateURL, token);
};


const signup = (body) => {
    return post(signupURL,body).then(resp => resp.json())
}

export default { getUsers,logingFetch , validate , signup , getServices };

