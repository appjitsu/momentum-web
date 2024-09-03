'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_FORMS_ACCESS_KEY as string;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: FORMS_ACCESS_KEY,
    settings: {
      from_name: 'Momentum Software',
      subject: 'New Contact Message from your Website',
    },
    onSuccess: (msg: any, data: any) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg: any, data: any) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <div>
      <div className="flex-grow h-full p-6 overflow-auto bg-gray-50 mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="my-2">
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: 'none' }}
            {...register('botcheck')}
          ></input>

          <div className="mb-5">
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="false"
              className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                errors.name
                  ? 'border-red-600 focus:border-red-600 ring-red-100 dark:ring-0'
                  : 'border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0'
              }`}
              {...register('name', {
                required: 'Full name is required',
                maxLength: 80,
              })}
            />
            {errors.name && (
              <div className="mt-1 text-red-600">
                <small>{errors.name.message}</small>
              </div>
            )}
          </div>

          <div className="mb-5">
            <label htmlFor="email_address" className="sr-only">
              Email Address
            </label>
            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              name="email"
              autoComplete="false"
              className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                errors.email
                  ? 'border-red-600 focus:border-red-600 ring-red-100 dark:ring-0'
                  : 'border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0'
              }`}
              {...register('email', {
                required: 'Enter your email',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email',
                },
              })}
            />
            {errors.email && (
              <div className="mt-1 text-red-600">
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Your Message"
              className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
                errors.message
                  ? 'border-red-600 focus:border-red-600 ring-red-100 dark:ring-0'
                  : 'border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0'
              }`}
              {...register('message', {
                required: 'Enter your Message',
              })}
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                {' '}
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        {isSubmitSuccessful && isSuccess && (
          <div className="mt-3 text-sm text-center text-green-500">
            {message || 'Success. Message sent successfully'}
          </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <div className="mt-3 text-sm text-center text-red-500">
            {message || 'Something went wrong. Please try later.'}
          </div>
        )}
      </div>
    </div>
  );
}
