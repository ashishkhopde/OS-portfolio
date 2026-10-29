import { useState, useRef, useEffect } from "react";
import { Download, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function IPhoneResumeApp() {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.0);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const zoomIn = () => setScale((prev) => Math.min(2.0, +(prev + 0.15).toFixed(2)));
  const zoomOut = () => setScale((prev) => Math.max(0.6, +(prev - 0.15).toFixed(2)));
  const resetZoom = () => setScale(1.0);

  const pageWidth = containerWidth ? Math.min(containerWidth - 24, 520) * scale : 340 * scale;

  return (
    <div className="flex-1 min-h-0 flex flex-col bg-slate-100 overflow-hidden text-gray-800">
      {/* Top Mobile Controls Bar */}
      <div className="px-4 py-2.5 bg-white border-b border-gray-200 flex items-center justify-between shrink-0 shadow-2xs">
        <div className="flex items-center gap-1 text-gray-600 bg-gray-100 p-1 rounded-xl">
          <button
            onClick={zoomOut}
            className="p-1 hover:bg-white rounded-lg transition-colors cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut size={14} />
          </button>
          <span className="text-[11px] font-mono px-1 font-semibold">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            className="p-1 hover:bg-white rounded-lg transition-colors cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn size={14} />
          </button>
          <button
            onClick={resetZoom}
            className="p-1 hover:bg-white rounded-lg transition-colors cursor-pointer ml-0.5"
            title="Reset"
          >
            <RotateCcw size={12} />
          </button>
        </div>

        <a
          href="/files/resume.pdf"
          download="Ashish_Khopde_Resume.pdf"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-2xs transition-colors"
        >
          <Download size={13} />
          <span>Download</span>
        </a>
      </div>

      {/* PDF Viewport */}
      <div
        ref={containerRef}
        className="flex-1 min-h-0 overflow-y-auto p-3 flex flex-col items-center gap-4 bg-slate-200/60 pb-12"
      >
        <Document
          file="/files/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center p-8 text-xs text-gray-500">
              Loading resume...
            </div>
          }
          error={
            <div className="p-6 text-center text-xs text-red-500 bg-white rounded-xl shadow-xs">
              Unable to load PDF viewer. Please use the Download button above.
            </div>
          }
        >
          {numPages &&
            Array.from(new Array(numPages), (_, index) => (
              <div key={`page_${index + 1}`} className="flex flex-col items-center">
                <div className="shadow-lg rounded-md overflow-hidden bg-white border border-gray-300/80">
                  <Page
                    pageNumber={index + 1}
                    width={pageWidth}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                </div>
                <div className="text-[10px] text-gray-500 font-mono mt-1.5 bg-white/80 px-2 py-0.5 rounded-full shadow-2xs">
                  Page {index + 1} of {numPages}
                </div>
              </div>
            ))}
        </Document>
      </div>
    </div>
  );
}

