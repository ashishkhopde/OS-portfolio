import { useState, useRef, useEffect } from 'react';
import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { pdfjs, Document, Page } from 'react-pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const Resume = () => {
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

    const zoomIn = (e) => {
        e.stopPropagation();
        setScale((prev) => Math.min(2.0, +(prev + 0.15).toFixed(2)));
    };

    const zoomOut = (e) => {
        e.stopPropagation();
        setScale((prev) => Math.max(0.6, +(prev - 0.15).toFixed(2)));
    };

    const resetZoom = (e) => {
        e.stopPropagation();
        setScale(1.0);
    };

    // Calculate base width so it fits within narrow screens while rendering at native size on desktop
    // Standard US Letter width is 612px
    const pageWidth = containerWidth 
        ? Math.min(containerWidth - 48, 612) * scale 
        : 612 * scale;

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />

                <div className="flex items-center gap-2">
                    <h2 className="font-bold text-sm text-gray-700">Resume.pdf</h2>
                    {numPages && (
                        <span className="text-[11px] font-medium text-gray-500 bg-gray-200/80 px-2 py-0.5 rounded-full select-none">
                            {numPages} Pages
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-1.5 text-gray-600">
                    <button
                        type="button"
                        onClick={zoomOut}
                        title="Zoom out"
                        className="p-1 text-gray-600 hover:text-black hover:bg-gray-200 rounded cursor-pointer transition-colors"
                    >
                        <ZoomOut size={16} />
                    </button>
                    <span className="text-xs font-mono text-gray-600 min-w-10 text-center select-none">
                        {Math.round(scale * 100)}%
                    </span>
                    <button
                        type="button"
                        onClick={zoomIn}
                        title="Zoom in"
                        className="p-1 text-gray-600 hover:text-black hover:bg-gray-200 rounded cursor-pointer transition-colors"
                    >
                        <ZoomIn size={16} />
                    </button>
                    {scale !== 1.0 && (
                        <button
                            type="button"
                            onClick={resetZoom}
                            title="Reset zoom"
                            className="p-1 text-gray-600 hover:text-black hover:bg-gray-200 rounded cursor-pointer transition-colors"
                        >
                            <RotateCcw size={14} />
                        </button>
                    )}
                    <span className="w-px h-4 bg-gray-300 mx-1" />
                    <a
                        href="/files/resume.pdf"
                        download="Ashish_Khopde_Resume.pdf"
                        className="p-1 text-gray-600 hover:text-black hover:bg-gray-200 rounded cursor-pointer transition-colors"
                        title="Download resume"
                    >
                        <Download size={16} />
                    </a>
                </div>
            </div>

            <div
                ref={containerRef}
                className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-[#525659]/10 p-4 sm:p-6 flex flex-col items-center"
            >
                <Document
                    file="/files/resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="py-20 text-center text-gray-500 text-sm font-medium">
                            Loading Resume...
                        </div>
                    }
                    error={
                        <div className="py-20 text-center text-red-500 text-sm">
                            Failed to load resume PDF.
                        </div>
                    }
                    className="flex flex-col items-center gap-6 w-full"
                >
                    {numPages ? (
                        Array.from(new Array(numPages), (_, index) => (
                            <div
                                key={`page_${index + 1}`}
                                id={`resume-page-${index + 1}`}
                                className="bg-white shadow-xl rounded-sm overflow-hidden border border-gray-300/80 transition-shadow hover:shadow-2xl"
                            >
                                <Page
                                    pageNumber={index + 1}
                                    width={pageWidth}
                                    renderAnnotationLayer={true}
                                    renderTextLayer={true}
                                />
                                <div className="text-center text-[11px] font-medium text-gray-500 py-1.5 bg-gray-50 border-t border-gray-200 select-none">
                                    Page {index + 1} of {numPages}
                                </div>
                            </div>
                        ))
                    ) : null}
                </Document>
            </div>
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
