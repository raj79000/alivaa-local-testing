"use client";

import { useEffect } from "react";

export default function AddBootstrap() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.js")
            .then(() => {
               
            })
            .catch((err) => console.error("Failed to load Bootstrap", err));
    }, []);

    return null;
}
