import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Email is not valid").required("required"),
  contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
});

export default function Form() {
  const iseNonMobile = useMediaQuery("(min-width: 600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <PageContainer>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Box mt={2}>
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(4, minmax(0,1fr)"
                sx={{
                  "& > div": { gridColumn: iseNonMobile ? "undefined" : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched}
                />
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </PageContainer>
  );
}
