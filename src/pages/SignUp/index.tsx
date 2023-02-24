import s from './index.module.sass';
import Form from '../../modules/Form';


const SignUp = () => {

  return (
    <div className={s.signUp}>
      <div className={'container'}>
        <div className={s.signUpContent}>
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default SignUp;