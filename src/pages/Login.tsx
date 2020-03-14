import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LoginState } from 'types';

const Login = (props: RouteComponentProps) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log(data as LoginState);
    // props.history.push('/');
  };

  return (
    <div className="login-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <form className="box login-box">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className={`input ${errors.email && 'is-danger'}`}
              type="text"
              placeholder="Email"
              name="email"
              ref={register({
                required: 'email is required',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'invalid email'
                }
              })}
            />
            {errors.email && <p className="helper has-text-danger">email error</p>}
          </div>
        </div>
        <div className="field">
          <label>Password</label>
          <div className="control">
            <input
              className={`input ${errors.password && 'is-danger'}`}
              type="password"
              placeholder="Password"
              name="password"
              ref={register({
                required: true,
                minLength: {
                  value: 6,
                  message: 'cannot be less than 6 digits'
                }
              })}
            />
            {errors.password && <p className="helper has-text-danger">password error</p>}
          </div>
        </div>
        <div className="control">
          <button className="button is-primary is-fullwidth">Login</button>
        </div>
      </form>
    </div>
  );
};

// class Login extends Component<RouteComponentProps, LoginState> {
//   constructor(props: RouteComponentProps) {
//     super(props);

//     this.state = {
//       email: '',
//       password: ''
//     };
//   }

//   handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     } as Pick<LoginState, keyof LoginState>)
//   }

//   render() {
//     return (

//     );
//   }
// }

export default Login;
