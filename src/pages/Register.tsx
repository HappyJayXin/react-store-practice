import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RegisterState } from 'types';
import { postRegister } from 'api/register';
import { toast } from 'react-toastify';

const Register = (props: RouteComponentProps) => {
  const { register, handleSubmit, errors } = useForm<RegisterState>();

  const onSubmit = handleSubmit(async ({ nickname, email, password }) => {
    try {
      const jwtToken = await postRegister({ nickname, email, password, type: 0 });
      toast.success('Register Success');
      global.auth.setToken(jwtToken);
      props.history.push('/');
    } catch (error) {
      const message = error.response.data.message;
      toast.error(message);
    }
  });

  return (
    <div className="login-wrapper" onSubmit={onSubmit}>
      <form className="box login-box">
        <div className="field">
          <label className="label">Nickname</label>
          <div className="control">
            <input
              className={`input ${errors.nickname && 'is-danger'}`}
              type="text"
              placeholder="nickname"
              name="nickname"
              ref={register({
                required: 'nickname is required'
              })}
            />
            {errors.nickname && <p className="helper has-text-danger">nickname error</p>}
          </div>
        </div>
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
                  value: 3,
                  message: 'cannot be less than 6 digits'
                }
              })}
            />
            {errors.password && <p className="helper has-text-danger">password error</p>}
          </div>
        </div>
        <div className="control">
          <button className="button is-primary is-fullwidth">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
