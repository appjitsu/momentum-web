'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

export function QuoteForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting }
    } = useForm({
        mode: 'onTouched'
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_FORMS_ACCESS_KEY as string;

    const { submit: onSubmit } = useWeb3Forms({
        access_key: FORMS_ACCESS_KEY,
        settings: {
            from_name: 'Momentum Digital',
            subject: 'New Quote Request from your Website'
        },
        onSuccess: (msg: string, data: unknown) => {
            setIsSuccess(true);
            setMessage(msg);
            reset();
        },
        onError: (msg: string, data: unknown) => {
            setIsSuccess(false);
            setMessage(msg);
        }
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
                    />

                    <div className="mb-5">
                        <label htmlFor="email_address" className="sr-only">
                            Company or Project Name
                        </label>
                        <input
                            id="project"
                            type="text"
                            placeholder="Company or Project Name"
                            autoComplete="false"
                            className={`w-full px-4 py-3 border-2 placeholder: rounded-md outline-none focus:ring-4  ${
                                errors.project
                                    ? 'border-red-600 focus:border-red-600 ring-red-100'
                                    : 'border-gray-300 focus:border-gray-600 ring-gray-100'
                            }`}
                            {...register('project', {
                                required: 'Company or project name is required',
                                maxLength: 80
                            })}
                        />
                        {errors.project && (
                            <div className="mt-1 text-red-600">
                                <small>
                                    {errors?.project?.message?.toString()}
                                </small>
                            </div>
                        )}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email_address" className="sr-only">
                            Contact Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Contact Name"
                            autoComplete="false"
                            className={`w-full px-4 py-3 border-2 placeholder: rounded-md outline-none focus:ring-4  ${
                                errors.name
                                    ? 'border-red-600 focus:border-red-600 ring-red-100'
                                    : 'border-gray-300 focus:border-gray-600 ring-gray-100  '
                            }`}
                            {...register('name', {
                                required: 'Contact name is required',
                                maxLength: 80
                            })}
                        />
                        {errors.name && (
                            <div className="mt-1 text-red-600">
                                <small>
                                    {errors?.name?.message?.toString()}
                                </small>
                            </div>
                        )}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="sr-only">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            autoComplete="false"
                            className={`w-full px-4 py-3 border-2 placeholder: rounded-md outline-none focus:ring-4  ${
                                errors.email
                                    ? 'border-red-600 focus:border-red-600 ring-red-100'
                                    : 'border-gray-300 focus:border-gray-600 ring-gray-100 '
                            }`}
                            {...register('email', {
                                required: 'Enter your email',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Please enter a valid email'
                                }
                            })}
                        />
                        {errors.email && (
                            <div className="mt-1 text-red-600">
                                <small>
                                    {errors?.email?.message?.toString()}
                                </small>
                            </div>
                        )}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email_address" className="sr-only">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="phone"
                            placeholder="Phone Number"
                            autoComplete="false"
                            className={`w-full px-4 py-3 border-2 placeholder: rounded-md outline-none focus:ring-4  ${
                                errors.email
                                    ? 'border-red-600 focus:border-red-600 ring-red-100'
                                    : 'border-gray-300 focus:border-gray-600 ring-gray-100  '
                            }`}
                            {...register('phone', {
                                required: 'Enter your phone number',
                                pattern: {
                                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
                                    message: 'Please enter a valid phone number'
                                }
                            })}
                        />
                        {errors.phone && (
                            <div className="mt-1 text-red-600">
                                <small>
                                    {errors?.phone?.message?.toString()}
                                </small>
                            </div>
                        )}
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email_address" className="sr-only">
                            Budget
                        </label>
                        <input
                            id="budget"
                            type="number"
                            placeholder="Budget"
                            autoComplete="false"
                            className={`w-full px-4 py-3 border-2 placeholder: rounded-md outline-none focus:ring-4  ${
                                errors.budget
                                    ? 'border-red-600 focus:border-red-600 ring-red-100'
                                    : 'border-gray-300 focus:border-gray-600 ring-gray-100  '
                            }`}
                            {...register('budget', {
                                required: 'Enter your budget'
                            })}
                        />
                        {errors.budget && (
                            <div className="mt-1 text-red-600">
                                <small>
                                    {errors?.budget?.message?.toString()}
                                </small>
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <textarea
                            id="message"
                            placeholder="Describe your project"
                            className={`w-full px-4 py-3 border-2 placeholder: rounded-md outline-none  h-36 focus:ring-4  ${
                                errors.message
                                    ? 'border-red-600 focus:border-red-600 ring-red-100'
                                    : 'border-gray-300 focus:border-gray-600 ring-gray-100  '
                            }`}
                            {...register('message', {
                                required: 'Enter your Project Description'
                            })}
                        />
                        {errors.message && (
                            <div className="mt-1 text-red-600">
                                {' '}
                                <small>
                                    {errors?.message?.message?.toString()}
                                </small>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7"
                    >
                        {isSubmitting ? (
                            <svg
                                className="w-5 h-5 mx-auto text-white animate-spin"
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
