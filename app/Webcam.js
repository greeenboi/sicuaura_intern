import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import {
    Button,
} from "@chakra-ui/react"

export function Webcamcomp(props) {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
      }, [webcamRef]);

      const retake = () => {
        setImgSrc(null);
      };

  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={600} width={600} ref={webcamRef} />
      )}
      <div className="flex flex-col justify-center items-center">
        {imgSrc ? (
          <div className="flex flexs-row gap-4">
            <Button className=' px-4 py-2 mt-24 mb-4 text-black bg-slate-300 hover:bg-slate-700 hover:text-white transition-all' size="md" onClick={retake}>Retake photo</Button>
            {props.loading ? 
              (
                <Button
                  isLoading
                  loadingText='Submitting'
                  colorScheme='teal'
                  variant='outline'
                  className=" px-4 py-2 mt-24 mb-4"
                >
                  Submit
                </Button>
                ) : (
                <Button className=' px-4 py-2 mt-24 mb-4 bg-slate-700 hover:bg-slate-300 text-gray-300 hover:text-black transition-all' size="md" onClick={() => props.setConfirmPhoto(true)}>Continue</Button> 
            )}
          </div>
        ) : (
          <Button className=' px-4 py-2 mt-24 mb-4 bg-slate-700 hover:bg-slate-300 text-gray-300 hover:text-black transition-all' size="md" onClick={capture}>Capture photo</Button>
        )}
      </div>
    </div>
  );
};

