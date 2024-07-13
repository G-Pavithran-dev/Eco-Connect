import React from "react";
import "./ragPosting.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
import RagPaper from "./RagPaper";
import Navbar from "../navbar/Navbar";

const RagPosting = () => {
  return (
    <div className="outer-container">
      <Navbar />
      <div className="container">
        <div className="text-container">
          <div className="line1">
            <h1>The Hassle Free Rag Picker Services in India</h1>
          </div>
          <div className="line2">
            <h1>
              Trust Eco-Connect for efficient rag picker services in India. Our
              reliable ragger connect based service ensures safe and timely
              collection of your recyclable waste
            </h1>
          </div>
        </div>
        <RagPaper />
      </div>
      <div className="about">
        <div className="why-rag">
          <h2>Why use Eco-connect ?</h2>
          <div className="use">
            <div className="use1">
              <h3>Easy Connect with Raggers</h3>
              <p>
                Our rag pickers are available 24/7 to collect your recyclable
                waste
              </p>
            </div>
            <div className="use2">
              <h3>Door to Door Services</h3>
              <p>
                Our rag pickers are available 24/7 to collect your recyclable
                waste
              </p>
            </div>
          </div>
          <div className="use">
            <div className="use3">
              <h3>Get Anything sell</h3>
              <p>
                Our rag pickers are available 24/7 to collect your recyclable
                waste
              </p>
            </div>
            <div className="use4">
              <h3>Negotiable Price</h3>
              <p>
                Our rag pickers are available 24/7 to collect your recyclable
                waste
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="area2">
        <div className="why-rag">
          <h2>Areas we provide service</h2>
          <div className="all-area">
            <h3>Mumbai</h3>
            <h3>Coimbatore</h3>
            <h3>Delhi</h3>
            <h3>Bangalore</h3>
            <h3>Kolkata</h3>
            <h3>Chennai</h3>
            <h3>Hyderabad</h3>
            <h3>Pune</h3>
            <h3>Ahmedabad</h3>
            <h3>Jaipur</h3>
            <h3>Surat</h3>
            <h3>Lucknow</h3>
            <h3>Kanpur</h3>
            <h3>Nagpur</h3>
            <h3>Indore</h3>
            <h3>Bhopal</h3>
            <h3>Visakhapatnam</h3>
            <h3>Patna</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RagPosting;
