import { useEffect } from "react";

const useReloadOnReconnect = () => {
    useEffect(() => {
        const handleOnline = () => {
            console.log('Back online!');
            window.location.reload()
        }

        window.addEventListener('online', handleOnline);

        return () => {
            window.removeEventListener('online', handleOnline)
        }
    }, [])

}