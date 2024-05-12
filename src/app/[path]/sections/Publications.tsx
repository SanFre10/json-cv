import React from "react";
import CvSection from "./CvSection";
import { CV } from "@/cv.d";

export default function Basics({cv} : {cv: CV}) {
    return (
        <CvSection>
            <h2>{cv.basics.name}</h2>
            <p className="label">{cv.basics.label}</p>
            <p>Email: {cv.basics.email}</p>
            <p>Phone: {cv.basics.phone}</p>
            <p>
                Location: {cv.basics.location.city}, {cv.basics.location.region}
            </p>
            <p>Summary: {cv.basics.summary}</p>
            <ul>
                <li>
                    {cv.basics.profiles[0].network}: <a href={cv.basics.profiles[0].url}>{cv.basics.profiles[0].username}</a>
                </li>
            </ul>
        </CvSection>
    )
}