import LoginForm from "@/components/forms/LoginForm";
import { Suspense } from 'react';


export default function Login () {
    return <div  className="w-full max-w-md rounded-[20px] border border-cyan-600/30 shadow-xs">
        <Suspense fallback={
            <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
            </div>
        }>
          <LoginForm />
        </Suspense>
    </div>
}