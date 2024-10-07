import React from 'react';

export interface IPdf {
  path: string;
}

interface PdfViewerProps {
  pdf: IPdf;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdf }) => {
  return (
    <div style={{ height: '750px' }}>
      <div>
        <iframe title="pdf" src={pdf.path} width="100%" height="500px" />
      </div>
    </div>
  );
};

export default PdfViewer;
