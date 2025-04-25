import React from "react";
import TwoColorButton from "./TwoColorButton";
import IndentedText from "./IndentedText";

function FindOutMore() {
  return (
    <div className="mb-4 flex min-h-75 w-full flex-col bg-[linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url('/images/BRITS%20Background%20Image.avif')] bg-cover bg-center bg-no-repeat px-12 pt-12 pb-19">
      <div className="relative w-full xl:w-[62%]">
        <p className="font-spinnaker text-BRITS-blue-dark text-[3rem] mb-1">
          Ready to find out more?
        </p>
        <IndentedText
          content={
            <>
                <p className="mb-6">
                    Discover the Blue-Ribbon IT Services difference – where expertise
                    meets excellence. Let us be your IT partner, guiding you towards a
                    future of digital excellence and unparalleled growth. 
                </p>
                <p>
                    Contact us today to embark on a transformative IT journey with
                    confidence!
                </p>
            </>
          }
        />
        <TwoColorButton
          buttonText="Get free evaluation"
          width={225}
          height={50}
        />
      </div>
    </div>
  );
}

export default FindOutMore;
