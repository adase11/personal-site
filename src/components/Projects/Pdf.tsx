import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import React from 'react';

const PdfViewer = (path: string) => {
  return (
    <div style={{ height: '750px' }}>
      <Viewer fileUrl={path} />
    </div>
  );
};

export default PdfViewer;
