import React from "react";
import CvSection from "./CvSection";
import { CV } from "@/cv.d";

export default function Basics({cv} : {cv: CV}) {
    return (
        <CvSection>
            <h2>Work Experience</h2>
            <div>
                <p>Company: {cv.work[0].name}</p>
                <p>Position: {cv.work[0].position}</p>
                <p>Summary: {cv.work[0].summary}</p>
                <p>Highlights:</p>
                <ul>
                    <li>{cv.work[0].highlights[0]}</li>
                </ul>
            </div>
        </CvSection>
    )
}