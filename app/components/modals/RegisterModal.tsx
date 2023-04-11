"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Modal from ".";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../inputs/Input";

function RegisterModal() {
  const registerModal = useRegisterModal();
  const loginModel = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then((response) => {
        toast.success("Success!!");
        registerModal.onClose();
        loginModel.onOpen();
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModel.onOpen();
  }, [registerModal, loginModel]);

  return (
    <Modal
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      body={
        <>
          <div className="flex flex-col gap-4">
            <Heading title="Welcome to Airbnb" subtitle="Create an account" />
            <Input
              id="email"
              label="Email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id="name"
              label="Name"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              type="password"
              id="password"
              label="Password"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>
        </>
      }
      footer={
        <>
          <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
              label="Continue with Google"
              icon={FcGoogle}
              onClick={() => signIn("google")}
              outline
            />
            <Button
              label="Continue with Github"
              icon={AiFillGithub}
              onClick={() => signIn("github")}
              outline
            />
            <div className="mt-4 font-light text-center text-neutral-500">
              <div className="flex flex-row items-center justify-center gap-2">
                <div>Already have an account?</div>
                <div className="cursor-pointer text-neutral-800 hover:underline" onClick={toggle}>
                  Log in
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}

export default RegisterModal;
