import React, { useContext, useState } from 'react';
import InputTemplate from '../../plagin/input/inputTemplate'; // ייבוא קומפוננטת האינפוט
import ButtonTemplate from '../../plagin/button/buttonTemplate'; // ייבוא קומפוננטת הכפתור
import { GlobalContext } from '../../App';
import { login, registration } from '../../database/queries/connectedQueries'
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const { token, setToken, setPermission } = useContext(GlobalContext)
  const [formData, setFormData] = useState({
    name: '',
    // email: '',
    password: '',
    // selectedCategory: ''
  });

  const [errorEmail, setErrorEmail] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const navigate = useNavigate()

  const handleInputChange = (value, name) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  }




  const handleSubmit = async (e) => {
    e.preventDefault()

    let valid = false
    let usernameLogin = ''
    let passwordLogin = ''

    if (formData?.name === ('') || formData?.name === null || formData?.name === undefined) {
      setErrorName('השדה שדה חובה');
      valid = true
    } else {
      setErrorName('');
      usernameLogin = formData?.name
    }

    // if (formData?.email === ('') || formData?.email === null || formData?.email === undefined) {
    //   setErrorEmail('השדה שדה חובה');
    //   valid = true
    // } else {
    //   setErrorEmail('');
    //   usernameLogin = formData?.email
    // }

    if (formData?.password === ('') || formData?.password === null || formData?.password === undefined) {
      setErrorPassword('לא הוזן סיסמה');
      valid = true
    } else {
      setErrorPassword('');
      passwordLogin = formData?.password
    }

    if (!valid) {
      console.log("Registration Data:", formData)
         // כאן תוכל לבצע לוגיקת כניסת משתמש כמו לשלוח את שם המשתמש והסיסמה לשרת
         let ok = await login({usernameLogin,passwordLogin}, {token, setToken, setPermission})
         if (ok) {
           navigate('/')
         }
    } else {
      console.log('המידע לא נשלח');
    }

  };

  return (
    <form onSubmit={handleSubmit} dir='rtl'>
    <InputTemplate
       type="name"
       placeholder="Name"
       name="name"
       defaultValue={formData?.name}
       onChange={(e) => handleInputChange(e, 'name')}
       error={errorName}
     />
     {/* <InputTemplate
        type="email"
        placeholder="Email"
        name="email"
        defaultValue={formData?.email}
        onChange={(e) => handleInputChange(e, 'email')}
        error={errorEmail}
      /> */}
      <InputTemplate
        type="password"
        placeholder="Password"
        name="password"
        defaultValue={formData?.password}
        onChange={(e) => handleInputChange(e, 'password')}
        error={errorPassword}
      />

      <ButtonTemplate type="submit" text="Login" />
    </form>
  );
}

export default LoginForm;
