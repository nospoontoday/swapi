
import './skeleton.css';

const Skeleton = () => {
    return (
        <div className="mx-auto w-full max-w-5xl bg-white">
            <ul className="flex flex-col">
                {Array(10).fill(null).map((_, index) => (
                    <li key={index} className="border-gray-100">
                        <div className="py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent hover:border-red-500 hover:bg-red-50">
                            <div className="sm:pl-4 pr-8 flex sm:items-center">
                                <div className="space-y-1">
                                    <div className="text-base text-gray-700 font-bold tracking-wide skeleton title width-50 animate-pulse"></div>
                                    <div className="text-sm text-gray-500 font-medium skeleton text width-100 animate-pulse"></div>
                                    <div className="text-sm text-gray-500 font-medium skeleton text width-100 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skeleton;
