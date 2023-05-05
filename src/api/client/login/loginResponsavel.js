import api from "../../api";

export const loginResponsavel = (setLogin, dadosResponsavel) => {
  api
    .post("user/login", {
      email: dadosResponsavel.email,
      senha: dadosResponsavel.uid,
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
          status_user_driver: 2,
        });
      }
    })
    .catch((err) => {
      setLogin({
        code: 404,
      });
    });
};
