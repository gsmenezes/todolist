import React, { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ListContext from "../../Services/List/Context";
import * as tasksActions from "../../Services/List/actions";
import { Container } from "./styles";

function TaskCreator() {
  const { dispatchToTasks } = useContext(ListContext);
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("Preencha com o nome da tarefa!"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, formikBag) => {
      dispatchToTasks(tasksActions.addTask(values.title));
      formikBag.setFieldValue("title", "", false);
    },
  });
  const inputTitle = useRef(null);
  useEffect(() => {
    inputTitle.current.focus();
  }, []);
  return (
    <Container>
      <form onSubmit={handleSubmit} className="taskform">
        <input
          type="text"
          {...getFieldProps("title")}
          autoComplete="off"
          placeholder="Nova tarefa"
          ref={inputTitle}
        />
        {touched.title && errors.title ? <small className="error">{errors.title}</small> : null}
        <button type="submit" className="submit-button" disabled={!isValid}>
          Adicionar tarefa
        </button>
      </form>
    </Container>
  );
}

export default TaskCreator;
