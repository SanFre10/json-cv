import React from "react";
import CvSection from "./CvSection";
import { CV } from "@/cv.d";

export default function Basics({cv} : {cv: CV}) {
    return (
        <CvSection>
            <h2>Interests</h2>
            <div>
                <p>Name: {cv.interests[0].name}</p>
                <p>Keywords: {cv.interests[0].keywords.join(', ')}</p>
            </div>
        </CvSection>
    )
}