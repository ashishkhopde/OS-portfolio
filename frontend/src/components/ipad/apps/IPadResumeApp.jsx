import { useState, useRef, useEffect } from "react";
import { Download, ZoomIn, ZoomOut, RotateCcw, FileText } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function IPadResumeApp() {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.1);
  const [activePage, setActivePage] = useState(1);
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
  const resetZoom = () => setScale(1.1);

  const pageWidth = containerWidth ? Math.min(containerWidth - 64, 650) * scale : 520 * scale;

  return (
    <div className="flex-1 min-h-0 flex bg-slate-100 overflow-hidden text-gray-800">
      {/* ─── Left Sidebar: Document Thumbnails ────────────────────── */}
      <div className="w-52 border-r border-gray-300/80 bg-gray-50 flex flex-col shrink-0 select-none">
        <div className="p-3.5 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
            <FileText size={15} className="text-blue-600" />
            <span>Ashish_Resume.pdf</span>
          </div>
          <span className="text-[10px] text-gray-500 block mt-0.5">2 Pages • PDF Document</span>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto p-3 space-y-3">
          {[1, 2].map((pageNum) => (
            <div
              key={pageNum}
              onClick={() => {
                setActivePage(pageNum);
                const el = document.getElementById(`ipad_page_${pageNum}`);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`p-2 rounded-xl cursor-pointer transition-all border flex flex-col items-center ${
                activePage === pageNum
                  ? "bg-blue-50 border-blue-400 shadow-xs ring-2 ring-blue-500/20"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="w-24 h-32 bg-gray-100 rounded border border-gray-300 flex items-center justify-center text-[11px] font-semibold text-gray-400">
                Page {pageNum}
              </div>
              <span className="text-[11px] font-medium text-gray-600 mt-1.5">
                Page {pageNum}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Right Pane: Full PDF Viewer ─────────────────────────── */}
      <div className="flex-1 min-h-0 flex flex-col bg-slate-200/60 overflow-hidden">
        {/* Top Controls Bar */}
        <div className="px-5 py-2.5 bg-white border-b border-gray-200 flex items-center justify-between shrink-0 shadow-2xs">
          <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl text-xs">
            <button
              onClick={zoomOut}
              className="p-1 hover:bg-white rounded-lg transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut size={15} />
            </button>
            <span className="font-mono px-2 font-semibold text-gray-700">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="p-1 hover:bg-white rounded-lg transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn size={15} />
            </button>
            <button
              onClick={resetZoom}
              className="p-1 hover:bg-white rounded-lg transition-colors cursor-pointer ml-1 text-gray-500"
              title="Reset Zoom"
            >
              <RotateCcw size={13} />
            </button>
          </div>

          <a
            href="/files/resume.pdf"
            download="Ashish_Khopde_Resume.pdf"
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
          >
            <Download size={14} />
            <span>Download Official PDF</span>
          </a>
        </div>

        {/* Viewport */}
        <div
          ref={containerRef}
          className="flex-1 min-h-0 overflow-y-auto p-6 flex flex-col items-center gap-6 pb-16"
        >
          <Document
            file="/files/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="p-12 text-xs text-gray-500">Loading document...</div>
            }
            error={
              <div className="p-8 text-center text-xs text-red-500 bg-white rounded-xl shadow-xs border border-red-100 max-w-md">
                Unable to preview PDF document directly in browser. Please use the <strong>Download Official PDF</strong> button above.
              </div>
            }
          >
            {numPages &&
              Array.from(new Array(numPages), (_, index) => (
                <div
                  id={`ipad_page_${index + 1}`}
                  key={`ipad_page_${index + 1}`}
                  className="flex flex-col items-center"
                >
                  <div className="shadow-xl rounded-md overflow-hidden bg-white border border-gray-300">
                    <Page
                      pageNumber={index + 1}
                      width={pageWidth}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                    />
                  </div>
                  <span className="text-xs text-gray-600 font-mono mt-2 bg-white px-3 py-0.5 rounded-full shadow-2xs">
                    Page {index + 1} of {numPages}
                  </span>
                </div>
              ))}
          </Document>
        </div>
      </div>
    </div>
  );
}

