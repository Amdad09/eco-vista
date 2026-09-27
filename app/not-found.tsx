import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-red-500 text-2xl font-semibold text-center">
                404 Not Found page
            </h1>
            <Link href={'/'}>
                <button className="border px-4 py-2 rounded-lg mt-4">Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
