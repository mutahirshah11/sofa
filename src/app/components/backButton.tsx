"use client";
import { useRouter } from "next/navigation";


const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-all"
    >
      
      <span>Back</span>
    </button>
  );
};

export default BackButton;
