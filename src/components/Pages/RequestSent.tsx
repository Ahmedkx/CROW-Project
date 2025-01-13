import Nav from "../Nav";
import Footer from "../Footer";

export default function RequestSent() {
    return (
        <>
            <Nav />
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="p-6 text-center text-green-700 bg-green-100 rounded-lg shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-12 h-12 mx-auto mb-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <p className="text-lg font-semibold">تم إرسال طلبك بنجاح</p>
                    <p className="mt-2">و سيتم التواصل معك فى اقرب وقت ممكن</p>
                </div>
            </div>
            <Footer />
        </>
    );
}
