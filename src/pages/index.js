import React from "react"
import Editor from "../components/Editor"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../style/global.css"
import {Helmet} from "react-helmet";

export default function Home() {
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Glassmorphism CSS Generator </title>
      <link rel="canonical" href="https://glassmorphism-generator.netlify.app" />
      <meta name="description" content="Copy and paste this Glassmorphism CSS snippet into your frontend project for an amazing CSS glass effect." />
      <link rel="icon" type="image/svg" href="/circle.svg"/>
    </Helmet>
    <Navbar/>
    <Editor/>
    <Footer/>
  </>
}
