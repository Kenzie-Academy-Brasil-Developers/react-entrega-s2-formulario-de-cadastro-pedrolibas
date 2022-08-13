import * as yup from "yup";

export const schemaNew = yup.object().shape({
  title: yup.string().required("Nome é obrigatório"),
});

export const schemaLogin = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export const schemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .min(8, "senha precisa ter mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve conter pelo um número e um símbolo especial"
    ),
  confirmPasseword: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password"), null], "Senhas não combinam"),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Contato obrigatório"),
});
