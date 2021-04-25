import React from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type LoginFormProps = {
  username: String;
  password: String;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>();

  const onSubmit = (values: LoginFormProps) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={errors.username ? true : false}>
          <Input
            variant="flushed"
            placeholder="Username"
            {...register('username', { required: 'Username is required' })}
          />
          <FormErrorMessage>
            {(errors as any)?.username?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password ? true : false}>
          <Input
            variant="flushed"
            placeholder="Password"
            type="password"
            {...register('password', { required: 'Password is required' })}
          />
          <FormErrorMessage>
            {(errors as any)?.password?.message}
          </FormErrorMessage>
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
