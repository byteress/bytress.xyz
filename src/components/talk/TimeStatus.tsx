import { useEffect, useState, useCallback } from "react";

const TimeStatus = () => {
    const [time, setTime] = useState<string>("00:00:00 p.m.");
    const [awake, setAwake] = useState<boolean>(true);

    const updateTime = useCallback(() => {
        let current = new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" });
        setTime(`${current.slice(-11, -6)}${current.slice(-3, -1)}.M.`);

        setAwake(new Date().getHours() >= 7);
    }, []);

    useEffect(() => {
        updateTime();
        const interval = setInterval(updateTime, 60 * 1000); // Run updateTime every minute

        return () => clearInterval(interval); // Cleanup on unmount
    }, [updateTime]);

    return (
        <p className="text-black/50 dark:text-white/50 text-sm mb-10">
            It's currently <span className="font-semibold text-black/60 dark:text-white/60">{time}</span> for me, so I'm
            probably{" "}
            <span className="font-semibold text-black/60 dark:text-white/60">{awake ? "awake" : "sleeping"}</span>. I'll
            get back to you soon.
        </p>
    );
};

export default TimeStatus;
