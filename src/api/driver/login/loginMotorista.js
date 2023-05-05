import api from "../../api";

export const loginMotorista = (setLogin, dadosMotorista) => {
  api
    .post("driver/login", {
      email: dadosMotorista.email,
      senha: dadosMotorista.uid,
    })
    .then((response) => {
      if (response.status != 200) {
        setLogin({
          code: 404,
        });
      } else if (response.status == 200) {
        setLogin({
          data: response.data,
          code: response.status,
          status_user_driver: 1,
        });
      }
    })
    .catch((err) => {
      setLogin({
        code: 404,
      });
    });
};
