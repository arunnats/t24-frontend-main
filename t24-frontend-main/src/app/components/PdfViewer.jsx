import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Load the component only on the client side
const PdfViewer = ({ pdfUrl }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensures this component only renders on the client side
    }, []);

    if (!isClient) return null; // Prevents SSR issues with `window`

    return (
        <div style={{ height: "750px", width: "100%", margin: "0 auto" }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer fileUrl={pdfUrl} />
            </Worker>
        </div>
    );
};

export default PdfViewer;
