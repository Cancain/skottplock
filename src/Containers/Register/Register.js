import React from "react";
import FormInput from "../../Components/UI/FormInput/FormInput";
import Button from "../../Components/UI/Button/Button";

const register = props => {
  return (
    <div>
      <h1 style={{ marginTop: "30px" }}>Registrera</h1>
      <form>
        <FormInput
          name="name"
          text="Förnamn"
          placeholder="Ditt namn"
          type="text"
        />
        <FormInput
          name="lastName"
          text="Efternamn"
          placeholder="Ditt efternamn"
          type="text"
        />
        <FormInput
          name="username"
          text="Användarnamn"
          placeholder="Önskar användarnamn"
          type="text"
        />
        <FormInput
          name="email"
          text="Email"
          placeholder="Din email"
          type="email"
        />
        <FormInput
          name="password"
          text="Lösenord"
          placeholder="Önskat lösenord"
          type="password"
        />
        <FormInput
          name="confirmPassword"
          text="Bekräfta lösenord"
          placeholder="Önskat lösenord (igen)"
          type="password"
        />
        <Button
          text="Registrera"
          bgColor="green"
          width="fit-content"
          margin="10px auto 0 auto"
          textColor="#73b55b"
          borderColor="#144900"
        />
      </form>
    </div>
  );
};

export default register;
