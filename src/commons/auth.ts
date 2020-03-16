import decode from 'jwt-decode';
const JWT_name = 'store_token_id';

const setToken = (token:string) => {
  localStorage.setItem(JWT_name, token);
};

const getToken: () => string = () => {
  return localStorage.getItem(JWT_name) || '';
};

const isLogin = () => {
  const jwtToken = getToken();
  return Boolean(jwtToken) && !isTokenExpired(jwtToken);
}

const isTokenExpired = (token:string) => {
  try {
    const _info:any = decode(token);
    if(_info.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (error) {
    return false;
  }
}

const getUser = () => {
  const jwtToken = getToken();
  if(isLogin()) {
    const user = decode(jwtToken);
    return user;
  } else {
    return null;
  }
};

const logout = () => {
  localStorage.removeItem(JWT_name);
}

export default global.auth = {
  setToken,
  getUser,
  logout,
  isLogin
};
