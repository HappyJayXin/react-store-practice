import { Post } from 'api/method.api';
import { LoginState } from 'types'

export const postLogin = (data: LoginState) => Post('/auth/login', data);
