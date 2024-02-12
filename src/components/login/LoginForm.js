import React, { useState } from 'react';
import InputTemplate from '../../plagin/input/inputTemplate'; // ייבוא קומפוננטת האינפוט
import ButtonTemplate from '../../plagin/button/buttonTemplate'; // ייבוא קומפוננטת הכפתור

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const handleInputChange = (value, name) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    let valid = false

    if (formData?.email === ('') || formData?.email === null || formData?.email === undefined) {
      setErrorEmail('השדה שדה חובה');
      valid = true
    } else {
      setErrorEmail('');
    }
    if (formData?.password === ('') || formData?.password === null || formData?.password === undefined) {
      setErrorPassword('לא הוזן סיסמה');
      valid = true
    } else {
      setErrorPassword('');
    }

    if (!valid) {
      console.log("Registration Data:", formData);
    } else {
      console.log('המידע לא נשלח');
    }

  };

  return (
    <form onSubmit={handleSubmit} dir='rtl'>
     <InputTemplate
        type="email"
        placeholder="Email"
        name="email"
        defaultValue={formData?.email}
        onChange={(e) => handleInputChange(e, 'email')}
        error={errorEmail}
      />
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
