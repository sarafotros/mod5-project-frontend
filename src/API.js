// const baseUrl = 'https://handy-app-sf.herokuapp.com/';
const baseUrl = 'http://localhost:3001';

const userUrl = baseUrl + '/users';
const loginUrl = baseUrl + '/login';
const validateURL = baseUrl + '/validate';
const signupURL = baseUrl + '/create';
const serviceUrl = baseUrl + '/services';
const urlRequest = baseUrl + '/requests/';

const handymanUrl = baseUrl + '/handy_men';
const handyLoginURL = baseUrl + '/login_handy';
const validateHandyURL = baseUrl + '/valid_handy';
const signupHandyURL = baseUrl + '/signup_handy';

const get = (url) => (fetch(url, { headers: { 'Authorization': localStorage.token } }).then(resp => resp.json()));

const getToken = (url, token) =>(
	fetch(url, { headers: { 'Authorization': token } }).then(resp => resp.json())
)

const deleteAPI = (url) => (fetch(url,
	{ method: 'DELETE', headers: { 'Authorization': localStorage.token } })
	.then(resp => resp.json())
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

const getHandyman = () => get(handymanUrl);

const getRequestDetails = (id) => get(urlRequest + id)

const getRequests = () => get(urlRequest);

const removeRequest = id => deleteAPI(urlRequest + id);

//user sign in + sign up + validate
const logingFetch = (body) => {
	return post(loginUrl, body).then(resp => resp.json());
};


const validate = token => {
	return getToken(validateURL, token);
};


const signup = (body) => {
    return post(signupURL,body).then(resp => resp.json())
}

// HANDYMAN  sign in + sign up + validate
const logingHandyFetch = body => {
	return post(handyLoginURL, body).then(resp => resp.json());
};

const validateHandy = token => {
	return getToken(validateHandyURL, token);
};

const signupHandy = body => {
	return post(signupHandyURL, body).then(resp => resp.json());
};



// API object
export default {
	getUsers,
	logingFetch,
	validate,
	signup,
	getServices,
	getRequestDetails,
	getRequests,
	getHandyman,
	logingHandyFetch,
	validateHandy,
	signupHandy,
	removeRequest
};

