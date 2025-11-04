import React from "react";
import logo from './New Project.png';

export default function ProPricing({
  Plan,
  Price,
  f1 = "",
  d1 = "",
  f2 = "",
  d2 = "",
  f3 = "",
  d3 = "",
  f4 = "",
  d4 = ""
}) {
  const isPro = Plan === "Pro";

  return (
    <div className="d-flex flex-column align-items-center p-3">
      {isPro && (
        <div
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            height: "30px",
            textAlign: "center",
            backgroundColor: "#105FFF",
            color: "white",
            width: "250px"
          }}
        >
          <p className="m-0" style={{ fontSize: "14px", lineHeight: "30px" }}>
            Most popular
          </p>
        </div>
      )}

      <div
        className="card"
        style={{
          width: "250px",
          minHeight:  isPro ?  "670px":"700px",
          border: isPro ? "2px solid #5E91F6" : "2px solid #E0E4E8",
          borderTopLeftRadius: isPro ? "0px" : "20px",
          borderTopRightRadius: isPro ? "0px" : "20px",
          zIndex:'1'
        }}
      >
        <div className="card-body d-flex flex-column">
          {/* Header */}
          <div>
            <img style={{ width: "50px" }} src={logo} alt="plan logo" />
            <p
              className="mt-2"
              style={{
                fontSize: "30px",
                fontFamily: "instrument sans",
                fontWeight: "bold"
              }}
            >
              {Plan}
            </p>
            <p
              className="mt-4"
              style={{
                fontSize: "30px",
                fontFamily: "instrument sans",
                fontWeight: "bold"
              }}
            >
              {Price}
            </p>
          </div>

          {/* Button */}
          <button
            style={{
              backgroundColor: "#F3F8FF",
              border: "2px solid #E3EBF7",
              width: "210px",
              padding: "7px",
              borderRadius: "10px"
            }}
          >
            Sign up
          </button>

          {/* Highlights */}
          <div>
            <p className="mt-3" style={{ fontSize: "14px", fontWeight: "500" }}>
              Highlights
            </p>
            <p className="mt-3" style={{ fontSize: "14px", fontWeight: "500" }}>
              Meetings:{" "}
              <span style={{ fontWeight: "200" }}>
                40 mins per meeting, 100 participants
              </span>
            </p>
            <p className="mt-3" style={{ fontSize: "14px", fontWeight: "500" }}>
              Team Chat
            </p>
            <p className="mt-3" style={{ fontSize: "14px", fontWeight: "500" }}>
              Whiteboard:{" "}
              <span style={{ fontWeight: "200" }}>3 editable boards</span>
            </p>

            {/* Dynamic features */}
            {f1 && (
              <p className="mt-3" style={{ fontSize: "14px", fontWeight: "500" }}>
                {f1}
                <span style={{ fontWeight: "200" }}>{d1}</span>
              </p>
            )}
            {f2 && (
              <p className="mt-3" style={{ fontSize: "14px", fontWeight: "500" }}>
                {f2}
                <span style={{ fontWeight: "200" }}>{d2}</span>
              </p>
            )}
            {f3 && (
              <p className="mt-3" style={{ fontSize: "14px", fontWeight: "500" }}>
                {f3}
                <span style={{ fontWeight: "200" }}>{d3}</span>
              </p>
            )}
            {f4 && (
              <p className="mt-3" style={{ fontSize: "14px", fontWeight: "500" }}>
                {f4}
                <span style={{ fontWeight: "200" }}>{d4}</span>
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="mt-auto align-self-start">
            <p className="text-muted" style={{ fontSize: "14px", fontWeight: "500" }}>
              See all features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
