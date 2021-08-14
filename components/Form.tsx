import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Form = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!value) return;
    router.push(`https://google.com/search?q=${value}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center mt-28 flex-grow w-full px-4 md:w-4/5"
    >
      <Image
        width={300}
        height={100}
        alt="google logo"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <svg
          className="h-5 mr-3 text-gray-500"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          type="text"
          className="focus:outline-none flex-grow"
          value={value}
          onChange={handleChange}
          required
        />
        <svg
          className="h-5"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4285f4"
            d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
          ></path>
          <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
          <path
            fill="#fbbc05"
            d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
          ></path>
          <path
            fill="#ea4335"
            d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
          ></path>
        </svg>
      </div>
      <div className="flex w-full md:w-1/2 justify-center mt-8 space-x-4">
        <button type="submit" className="btn">
          Google Search
        </button>

        <Link href="https://perfects.engineering">
          <button className="btn">I&apos;m feeling Lucky</button>
        </Link>
      </div>
      <div className="my-4 text-sm">
        Google offered in: <span className="anchor">Hausa</span>{" "}
        <span className="anchor">Igbo</span> <span className="anchor">Èdè</span>{" "}
        <span className="anchor">Yorùbá</span>{" "}
        <span className="anchor">Nigerian Pidgin</span>
      </div>
    </form>
  );
};

export default Form;
