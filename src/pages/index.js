import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import TransitionEffect from "@/components/TransitionEffect";
import "../styles/Home.module.css"
import ProfileImage from "./ProfileImage";
import { motion } from "framer-motion";


export default function Home() {

  return (
    <>
      <Head>
        <title>Karthikeya Thota</title>
        <meta
          name="description"
          content="Aspiring Cybersecurity Student at Eastern Michigan University, skilled Bug Bounty Hunter, Freelance Cybersecurity Instructor, and Python Enthusiast, passionate about securing digital landscapes and promoting tech awareness."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">

             <ProfileImage/>
            </div>

            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Code may be elegant, but security is its true beauty."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                <b>Aspiring Cybersecurity Student at Eastern Michigan University</b>, skilled Bug Bounty Hunter, Freelance Cybersecurity Instructor, and Python Enthusiast, passionate about securing digital landscapes and promoting tech awareness.
              </p>

            </div>
          </div>
        </Layout>


      </article>
    </>
  );
}
