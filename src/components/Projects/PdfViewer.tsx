import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import React from 'react';

export interface IPdf {
  path: string;
}

const PdfViewer: React.FC<IPdf> = ({ path }) => (
  <div style={{ height: '750px' }}>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.12.0/build/pdf.worker.min.js">
      <Viewer fileUrl={path} />;
    </Worker>
  </div>
);

export default PdfViewer;
