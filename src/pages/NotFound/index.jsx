import { Link } from 'react-router-dom'
import { FaHome, FaExclamationTriangle } from 'react-icons/fa'

export default function NotFoundPage() {
    return (
        <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center p-4">

            {/* 404 Text */}
            <div className="text-center mb-12">
                <div className="text-9xl md:text-[150px] font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    404
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Page Not Found
                </h1>

                <p className="text-gray-400 text-lg max-w-[500px] mx-auto mb-8">
                    Looks like you tried to access a level that doesn't exist in the arena. Let's get you back on track!
                </p>
            </div>

          
        

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/"
                    className="flex items-center justify-center gap-2 px-8 py-3 bg-cyan-400 text-black font-bold rounded-xl hover:bg-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
                >
                    <FaHome />
                    Back to Dashboard
                </Link>
            
            </div>

           
        </div>
    )
}
