import { useEffect, useState } from "react";

const useWindow = () => {
	const [isWindow, setIsWindow] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") setIsWindow(true);
	}, []);

	return { isWindow } as const;
};

export default useWindow;
