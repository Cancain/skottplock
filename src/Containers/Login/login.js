import React from "react";

import FormInput from "../../Components/UI/FormInput/FormInput";
import Button from "../../Components/UI/Button/Button";

const login = props => {
  return (
    <div>
      <h1>Logga in</h1>
      <form>
        <FormInput
          text="Användarnamn"
          type="text"
          placeholder="Ditt användarnamn"
          name="username"
        />
        <FormInput
          text="Lösenord"
          type="password"
          placeholder="Ditt Lösenord"
          name="password"
        />
        <Button
          text="Logga in"
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

export default login;
