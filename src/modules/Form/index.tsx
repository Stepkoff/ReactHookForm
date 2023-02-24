import s from './index.module.sass';
import {useForm} from 'react-hook-form';

const Form = () => {
  const {register, handleSubmit, formState: {errors}, reset, getValues} = useForm({
    values: {
      nickname: '',
      email: '',
      gender: '',
      age: '',
      password: '',
      confirmPassword: ''
    },
    mode: "onChange"
    // resolver = (values, context, options) => {} //
  });
  const onSubmit = (data: any) => {
    console.log("Submit Worked", data)
    reset()
  }
  return (
    <form className={s.form} noValidate autoComplete={'off'} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.formInputWrap}>
        <input
          id={'nickname'}
          placeholder={' '}
          type="text"
          {...register('nickname', {
            required: {value: true, message: 'Nickname is required'},
            pattern: {value: /^[a-zA-Z][a-zA-Z0-9]{4,23}$/, message: 'Nickname should be 4-24 characters'}})
          }
        />
        <label className={s.inputLabel} htmlFor="nickname">Nickname</label>
        {errors.nickname?.message ? <div className={s.error}>{errors.nickname.message}</div> : null}
      </div>
      <div className={s.formInputWrap}>
        <input
          type="text"
          placeholder={' '}
          id={'email'}
          {...register('email', {
            required: {value: true, message: 'Email is required'},
            pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Should be a valid email address'}})
          }
        />
        <label className={s.inputLabel} htmlFor="email">Email</label>
        {errors.email?.message ? <div className={s.error}>{errors.email.message}</div> : null}
      </div>
      <div className={s.formInputWrap}>
        <select {...register("gender", {required: {value: true, message: 'Choose your gender'}})}>
          <option value={''} hidden>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender?.message ? <div className={s.error}>{errors.gender.message}</div>: null}
      </div>
      <div className={s.formInputWrap}>
        <input
          type="number"
          id={'age'}
          placeholder={' '}
          {...register('age', {required: {value: true, message: 'Age is required'}, valueAsNumber: true})}
        />
        <label className={s.inputLabel} htmlFor="age">Age</label>
        {errors.age?.message? <div className={s.error}>{errors.age.message}</div>: null}
      </div>
      <div className={s.formInputWrap}>
        <input
          type="password"
          id={'password'}
          placeholder={' '}
          {...register('password', {
            required: {value: true, message: 'Password is required'},
            pattern: {value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&_-]{8,}$/, message: 'Password should be at least 8 characters and include 1 big letter and 1 number'},
          })}
        />
        <label className={s.inputLabel} htmlFor="{'password'}">Password</label>
        {errors.password?.message? <div className={s.error}>{errors.password.message}</div>: null}
      </div>
      <div className={s.formInputWrap}>
        <input
          type="password"
          id={'cPassword'}
          placeholder={' '}
          {...register('confirmPassword', {
            required: {value: true, message: 'Confirm your password please'},
            validate: {value: (value) => (getValues('password') != value) ? "Password don't match" : undefined} //watch() / getValues()
          })}
        />
        <label className={s.inputLabel} htmlFor="{'cPassword'}">Confirm Password</label>
        {errors.confirmPassword?.message ? <div className={s.error}>{errors.confirmPassword.message}</div>: null}
      </div>
      <button type={'submit'}>Submit</button>
    </form>
  );
};

export default Form;