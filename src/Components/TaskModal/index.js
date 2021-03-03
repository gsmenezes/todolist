import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { Backdrop, ModalTask } from "./styles";

function TaskModal({ id, onModalClose, onTitleUpdate, findTitle }) {
  const { getFieldProps, errors, handleSubmit } = useFormik({
    initialValues: {
      title: findTitle(id),
    },
    validationSchema: yup.object({
      title: yup.string().required("Preencha com o nome da tarefa!"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, formikBag) => {
      onTitleUpdate(id, values.title);
      formikBag.setFieldValue("title", "", false);
      onModalClose();
    },
  });

  return (
    <>
      <Backdrop onClick={onModalClose} />
      <ModalTask>
        <form onSubmit={handleSubmit}>
          <button className="close-button" onClick={onModalClose}>
            <CloseIcon />
          </button>
          <input
            type="text"
            placeholder="Novo título"
            autoComplete="off"
            {...getFieldProps("title")}
          />
          {errors.title ? (
            <small className="error">{errors.title}</small>
          ) : null}
          <button className="submit-button" type="submit">
            Atualizar tarefa
          </button>
        </form>
      </ModalTask>
    </>
  );
}

export default TaskModal;
