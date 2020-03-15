import { Post } from 'api/method.api';
import { RegisterState } from 'types'

export const postRegister = (data: RegisterState) => Post('/auth/register', data);
